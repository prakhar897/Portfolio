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

let templates = loadTemplates();

if (!Array.isArray(templates)) {
	templates = [...defaults];
	save();
}

const container = document.getElementById("templates");

if (container) {
	render();
}

document.getElementById("newTemplateBtn")?.addEventListener("click", () => {
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
	try {
		localStorage.setItem(STORAGE, JSON.stringify(templates));
	} catch {
		// The app still works for the current page view if storage is blocked.
	}
}

function loadTemplates() {
	try {
		return JSON.parse(localStorage.getItem(STORAGE));
	} catch {
		return null;
	}
}

function render() {
	if (!container) return;

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
		copy.type = "button";
		copy.textContent = "📋";
		copy.setAttribute("aria-label", `Copy ${template.name} output`);
		copy.title = "Copy";

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
			await copyText(output.textContent);

			copy.textContent = "✅";

			setTimeout(() => {
				copy.textContent = "📋";
			}, 1000);
		});

		update();

		row.append(name, inputs, copy, output);

		container.appendChild(row);
	});
}

function processValue(ph, value) {
	if (ph === "date") return value || new Date().toLocaleDateString();

	if (ph === "datetime") return value || new Date().toLocaleString();

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

async function copyText(text) {
	if (navigator.clipboard?.writeText) {
		await navigator.clipboard.writeText(text);
		return;
	}

	const textarea = document.createElement("textarea");
	textarea.value = text;
	textarea.setAttribute("readonly", "");
	textarea.style.position = "fixed";
	textarea.style.opacity = "0";
	document.body.appendChild(textarea);
	textarea.select();
	document.execCommand("copy");
	textarea.remove();
}
