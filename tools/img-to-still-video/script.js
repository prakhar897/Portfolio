const imageInput = document.getElementById("imageInput");
const preview = document.getElementById("preview");
const generate = document.getElementById("generate");
const download = document.getElementById("download");

let image = null;

imageInput.addEventListener("change", (e) => {
	const file = e.target.files[0];
	if (!file) return;

	image = new Image();

	image.onload = () => {
		preview.src = image.src;
		preview.style.display = "block";
	};

	image.src = URL.createObjectURL(file);
});

generate.addEventListener("click", async () => {
	if (!image) {
		alert("Please select an image.");
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
		canvas.width = image.naturalWidth;
		canvas.height = image.naturalHeight;
	}

	const draw = () => {
		ctx.fillStyle = "#000";
		ctx.fillRect(0, 0, canvas.width, canvas.height);

		const scale = Math.min(
			canvas.width / image.naturalWidth,
			canvas.height / image.naturalHeight,
		);

		const w = image.naturalWidth * scale;
		const h = image.naturalHeight * scale;

		const x = (canvas.width - w) / 2;
		const y = (canvas.height - h) / 2;

		ctx.drawImage(image, x, y, w, h);
	};

	draw();

	const stream = canvas.captureStream(fps);

	let mimeType = "";

	if (MediaRecorder.isTypeSupported("video/webm;codecs=vp9")) {
		mimeType = "video/webm;codecs=vp9";
	} else if (MediaRecorder.isTypeSupported("video/webm;codecs=vp8")) {
		mimeType = "video/webm;codecs=vp8";
	} else {
		mimeType = "video/webm";
	}

	const recorder = new MediaRecorder(stream, {
		mimeType,
	});

	const chunks = [];

	recorder.ondataavailable = (e) => {
		if (e.data.size > 0) {
			chunks.push(e.data);
		}
	};

	recorder.onstop = () => {
		const blob = new Blob(chunks, {
			type: mimeType,
		});

		const url = URL.createObjectURL(blob);

		download.href = url;
		download.download = "still-video.webm";
		download.textContent = "Download Video";
		download.style.display = "inline-block";
	};

	recorder.start(100);

	const interval = setInterval(draw, 1000 / fps);

	setTimeout(() => {
		clearInterval(interval);
		recorder.stop();
	}, duration * 1000);
});
