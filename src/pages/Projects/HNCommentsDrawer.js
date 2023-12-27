import React, { useEffect } from "react";
import Navbar from "../../components/Navbar";

const HNCommentsDrawer = () => {
	useEffect(() => {
		const script = document.createElement("script");
		script.src =
			"https://cdn.jsdelivr.net/gh/prakhar897/hn-comments-drawer@latest/src/script.js";
		script.async = true;

		script.onload = () => {
			const rootElement = document.querySelector(
				'[hn-story-id="38597301"]'
			);

			const options = {
				maxDepth: 5,
			};

			window.displayHNComments("38597301", rootElement, options);
		};

		document.body.appendChild(script);
	}, []);
	return (
		<>
			<Navbar />
			<h1>HN Comments Drawer</h1>

			<h6>
				<i> 21 Nov 2023 </i>
			</h6>

			<p>
				Integrate Hacker News comments and display them beautifully
				within your websites.
			</p>

			<ul>
				<li>
					<a
						href="https://github.com/prakhar897/hn-comments-drawer"
						target="_blank"
						rel="noreferrer"
					>
						Project Link
					</a>
				</li>
			</ul>

			<div
				className="hn-comments-drawer"
				hn-story-id="38597301"
				hn-max-depth="10"
			></div>
		</>
	);
};

export default HNCommentsDrawer;
