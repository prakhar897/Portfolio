"use client";

import React, { useEffect } from "react";

const HNCommentsDrawerDemo = () => {
	useEffect(() => {
		const script = document.createElement("script");
		script.src =
			"https://cdn.jsdelivr.net/gh/prakhar897/hn-comments-drawer@latest/src/script.js";
		script.async = true;

		script.onload = () => {
			const rootElement = document.querySelector(
				'[hn-story-id="38300167"]'
			);

			const options = {
				maxDepth: 5,
			};

			(window as any).displayHNComments("38300167", rootElement, options);

			const rootElement2 = document.querySelector(
				'[hn-story-id="38378455"]'
			);

			(window as any).displayHNComments(
				"38378455",
				rootElement2,
				options
			);
		};

		document.body.appendChild(script);
	}, []);

	return (
		<>
			<h1>Hacker News Comments</h1>

			<h2>Story 1 Comments</h2>

			<div className="hn-comments-drawer" hn-story-id="38300167"></div>

			<h2>Story 2 Comments</h2>

			<div
				className="hn-comments-drawer"
				hn-story-id="38378455"
				hn-max-depth="10"
			></div>
		</>
	);
};

export default HNCommentsDrawerDemo;
