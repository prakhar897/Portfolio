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
const newTemplateBtn = document.getElementById("newTemplateBtn");
const templateForm = document.getElementById("templateForm");
const templateName = document.getElementById("templateName");
const templateCommand = document.getElementById("templateCommand");
const cancelTemplateBtn = document.getElementById("cancelTemplateBtn");

if (container) {
	render();
}

newTemplateBtn?.addEventListener("click", () => {
	if (!templateForm) return;

	templateForm.hidden = false;
	newTemplateBtn.hidden = true;
	templateName?.focus();
});

cancelTemplateBtn?.addEventListener("click", () => {
	hideTemplateForm();
});

templateForm?.addEventListener("submit", (event) => {
	event.preventDefault();

	if (!templateName || !templateCommand) return;

	const name = templateName.value.trim();
	const template = templateCommand.value.trim();

	if (!name || !template) return;

	templates.push({ name, template });
	save();
	render();
	hideTemplateForm();
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
				[...template.template.matchAll(/{{(.*?)}}/g)].map((x) => x[1].trim()),
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
				result = result.replace(
					new RegExp("{{\\s*" + escapeRegExp(ph) + "\\s*}}", "g"),
					values[ph] || "",
				);
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

function escapeRegExp(value) {
	return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function hideTemplateForm() {
	if (!templateForm) return;

	templateForm.reset();
	templateForm.hidden = true;

	if (newTemplateBtn) {
		newTemplateBtn.hidden = false;
	}
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
