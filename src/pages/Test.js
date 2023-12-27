import React, { useEffect } from "react";

const Test = () => {
	useEffect(() => {
		const script = document.createElement("script");
		script.src =
			"https://cdn.jsdelivr.net/gh/prakhar897/hn-comments-drawer@latest/src/script.js";
		script.async = true;

		script.onload = () => {
			console.log("Script loaded successfully");

			const storyId = "38300167";

			const rootElement = document.getElementById("comments-container");

			const options = {
				maxDepth: 5,
			};

			window.displayHNComments(storyId, rootElement, options);
		};

		document.body.appendChild(script);
	}, []);

	return (
		<div>
			<div id="comments-container"></div>
		</div>
	);
};

export default Test;
