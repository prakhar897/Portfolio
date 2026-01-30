"use client";

import React, { useEffect, useRef } from "react";

interface HNCommentsProps {
	hnStoryId: string;
}

const HNComments: React.FC<HNCommentsProps> = ({ hnStoryId }) => {
	const initializedRef = useRef(false);
	useEffect(() => {
		if (initializedRef.current) return;
		initializedRef.current = true;
		const script = document.createElement("script");
		script.src =
			"https://cdn.jsdelivr.net/gh/prakhar897/hn-comments-drawer@latest/src/script.js";
		script.async = true;

		script.onload = () => {
			const rootElement = document.querySelector(
				`[hn-story-id="${hnStoryId}"]`,
			);

			const options = {
				maxDepth: 5,
			};

			(window as any).displayHNComments(hnStoryId, rootElement, options);
		};

		document.body.appendChild(script);
	}, [hnStoryId]);
	return (
		<div>
			<div
				className="hn-comments-drawer"
				hn-story-id={hnStoryId}
				hn-max-depth="10"
			></div>
		</div>
	);
};

export default HNComments;
