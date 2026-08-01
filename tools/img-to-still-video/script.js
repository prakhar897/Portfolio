const imageInput = document.getElementById("imageInput");
const preview = document.getElementById("preview");
const generate = document.getElementById("generate");
const download = document.getElementById("download");

let image = new Image();

imageInput.onchange = (e) => {
	const file = e.target.files[0];
	if (!file) return;

	image.src = URL.createObjectURL(file);

	image.onload = () => {
		preview.src = image.src;
		preview.style.display = "block";
	};
};

generate.onclick = async () => {
	if (!image.src) {
		alert("Choose an image");
		return;
	}

	const duration = Number(document.getElementById("duration").value);
	const fps = Number(document.getElementById("fps").value);
	const resolution = document.getElementById("resolution").value;

	const canvas = document.createElement("canvas");
	const ctx = canvas.getContext("2d");

	if (resolution === "720") {
		canvas.width = 1280;
		canvas.height = 720;
	} else if (resolution === "1080") {
		canvas.width = 1920;
		canvas.height = 1080;
	} else {
		canvas.width = image.width;
		canvas.height = image.height;
	}

	ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

	const stream = canvas.captureStream(fps);

	const recorder = new MediaRecorder(stream, {
		mimeType: "video/webm",
	});

	const chunks = [];

	recorder.ondataavailable = (e) => {
		if (e.data.size) chunks.push(e.data);
	};

	recorder.start();

	await new Promise((r) => setTimeout(r, duration * 1000));

	recorder.stop();

	recorder.onstop = () => {
		const blob = new Blob(chunks, {
			type: "video/webm",
		});

		const url = URL.createObjectURL(blob);

		download.href = url;
		download.download = "video.webm";
		download.style.display = "block";
		download.textContent = "Download Video";
	};
};
