import React from "react";
import Navbar from "../../components/Navbar";

const HeadlineHero = () => {
	return (
		<>
			<Navbar />
			<h1>Headline Hero</h1>

			<h6>
				<i> 02 Aug 2020 </i>
			</h6>

			<p>
				App for bloggers to generate headlines based on keywords.
				Completely Obsolete with the arrival of GPT.
			</p>

			<p>
				<ul>
					<li>
						{" "}
						<a
							href="https://headline-hero.glitch.me/"
							target="_blank"
							rel="noreferrer"
						>
							Project Link
						</a>{" "}
					</li>
					<li>
						{" "}
						<a
							href="https://github.com/prakhar897/HeadLineHero"
							target="_blank"
							rel="noreferrer"
						>
							{" "}
							Source Code{" "}
						</a>{" "}
					</li>
				</ul>
			</p>
		</>
	);
};

export default HeadlineHero;