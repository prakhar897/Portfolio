const STORAGE = "template-builder";

const defaults = [
	{
		name: "Greeting Email",
		template: "Hello {{name}}, welcome to {{company}}.",
	},
	{
		name: "Invoice",
		template: "Invoice #{{invoice}} for ₹{{amount}}.",
	},
	{
		name: "Meeting",
		template: "Meeting with {{person}} on {{date}}.",
	},
];

let templates = JSON.parse(localStorage.getItem(STORAGE));

if (!Array.isArray(templates)) {
	templates = defaults;
	save();
}

const container = document.getElementById("templates");

render();

document.getElementById("newTemplateBtn").addEventListener("click", () => {
	const name = prompt("Template name");

	if (!name) return;

	const template = prompt(
		"Template\n\nExample:\nHello {{name}}, welcome to {{company}}.",
	);

	if (!template) return;

	templates.push({
		name,
		template,
	});

	save();
	render();
});

function save() {
	localStorage.setItem(STORAGE, JSON.stringify(templates));
}

function render() {
	container.innerHTML = "";

	templates.forEach((template) => {
		const row = document.createElement("div");
		row.className = "template-row";

		const name = document.createElement("div");
		name.className = "template-name";
		name.textContent = template.name;

		const inputs = document.createElement("div");
		inputs.className = "template-inputs";

		const output = document.createElement("div");
		output.className = "template-output";

		const copy = document.createElement("button");
		copy.className = "copy-btn";
		copy.textContent = "Copy";

		const values = {};

		const placeholders = [
			...new Set(
				[...template.template.matchAll(/{{(.*?)}}/g)].map((x) => x[1]),
			),
		];

		placeholders.forEach((ph) => {
			const input = document.createElement("input");

			input.placeholder = ph;

			input.addEventListener("input", () => {
				values[ph] = processValue(ph, input.value);

				update();
			});

			inputs.appendChild(input);
		});

		function update() {
			let result = template.template;

			placeholders.forEach((ph) => {
				result = result.replaceAll("{{" + ph + "}}", values[ph] || "");
			});

			output.textContent = result;
		}

		copy.addEventListener("click", async () => {
			await navigator.clipboard.writeText(output.textContent);

			copy.textContent = "Copied";

			setTimeout(() => {
				copy.textContent = "Copy";
			}, 1000);
		});

		update();

		row.append(name, inputs, output, copy);

		container.appendChild(row);
	});
}

function processValue(ph, value) {
	if (ph === "date") return new Date().toLocaleDateString();

	if (ph === "datetime") return new Date().toLocaleString();

	if (ph.startsWith("upper:")) return value.toUpperCase();

	if (ph.startsWith("lower:")) return value.toLowerCase();

	if (ph.startsWith("eval:")) {
		try {
			return Function("return " + value)();
		} catch {
			return "";
		}
	}

	return value;
}
