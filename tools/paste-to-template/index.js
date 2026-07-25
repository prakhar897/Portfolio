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

	templates.forEach((template, index) => {
		const row = document.createElement("div");
		row.className = "template-row";

		const name = document.createElement("div");
		name.className = "template-name";
		name.textContent = template.name;

		const inputs = document.createElement("div");
		inputs.className = "template-inputs";

		const output = document.createElement("div");
		output.className = "template-output";
		output.tabIndex = 0;
		output.setAttribute("role", "button");
		output.setAttribute("aria-label", `Copy ${template.name} output`);
		output.title = "Click to copy";

		const remove = document.createElement("button");
		remove.className = "delete-btn";
		remove.type = "button";
		remove.textContent = "🗑️";
		remove.setAttribute("aria-label", `Delete ${template.name}`);
		remove.title = "Delete";

		const values = {};

		const placeholders = [
			...new Set(
				[...template.template.matchAll(/{{(.*?)}}/g)]
					.map((x) => x[1].trim())
					.filter((ph) => !isBuiltInValue(ph)),
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
			let result = applyBuiltInValues(template.template);

			placeholders.forEach((ph) => {
				result = result.replace(
					new RegExp("{{\\s*" + escapeRegExp(ph) + "\\s*}}", "g"),
					values[ph] || "",
				);
			});

			output.textContent = applyEvalExpressions(result);
		}

		output.addEventListener("click", async () => {
			await copyText(output.textContent);
			showCopied(output);
		});

		output.addEventListener("keydown", async (event) => {
			if (event.key !== "Enter" && event.key !== " ") return;

			event.preventDefault();
			await copyText(output.textContent);
			showCopied(output);
		});

		remove.addEventListener("click", () => {
			templates.splice(index, 1);
			save();
			render();
		});

		update();

		row.append(remove, name, inputs, output);

		container.appendChild(row);
	});
}

function processValue(ph, value) {
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

function isBuiltInValue(value) {
	return ["date", "time", "datetime", "timestamp"].includes(value);
}

function applyBuiltInValues(template) {
	const now = new Date();
	const values = {
		date: now.toLocaleDateString(),
		time: now.toLocaleTimeString(),
		datetime: now.toLocaleString(),
		timestamp: String(now.getTime()),
	};

	return Object.entries(values).reduce(
		(result, [key, value]) =>
			result.replace(
				new RegExp("{{\\s*" + key + "\\s*}}", "g"),
				value,
			),
		template,
	);
}

function applyEvalExpressions(command) {
	let result = "";
	let index = 0;

	while (index < command.length) {
		const start = command.indexOf("eval(", index);

		if (start === -1) {
			result += command.slice(index);
			break;
		}

		const expressionStart = start + 5;
		const expressionEnd = findClosingParen(command, expressionStart);

		if (expressionEnd === -1) {
			result += command.slice(index);
			break;
		}

		result += command.slice(index, start);
		result += calculateExpression(command.slice(expressionStart, expressionEnd));
		index = expressionEnd + 1;
	}

	return result;
}

function findClosingParen(value, start) {
	let depth = 1;

	for (let index = start; index < value.length; index += 1) {
		if (value[index] === "(") depth += 1;
		if (value[index] === ")") depth -= 1;
		if (depth === 0) return index;
	}

	return -1;
}

function calculateExpression(expression) {
	try {
		return String(Function('"use strict"; return (' + expression + ")")());
	} catch {
		return "";
	}
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

function showCopied(output) {
	const previousTitle = output.title;

	output.classList.add("copied");
	output.title = "Copied";
	output.setAttribute("aria-label", "Copied");

	setTimeout(() => {
		output.classList.remove("copied");
		output.title = previousTitle;
		output.setAttribute("aria-label", "Copy output");
	}, 1000);
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
