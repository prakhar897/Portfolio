import React from "react";
import Navbar from "../../components/Navbar";

const Diffudle = () => {
	return (
		<>
			<Navbar />
			<h1>Diffudle</h1>

			<h6>
				<i> 17 Jan 2023 </i>
			</h6>

			<iframe
				width="100%"
				src="https://www.youtube.com/embed/uLoMd0TkGKk"
				title="Diffudle Demo (AI art + Wordle)"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				allowfullscreen
			></iframe>

			<p>A game involving Stable Diffusion and Wordle.</p>

			<p>
				<ul>
					<li>
						<a
							href="https://chrome.google.com/webstore/detail/coldmessagegpt-gpt-writte/abbbgckfinjdbndjjjlpkkkoefklnaih?hl=en&authuser=0"
							target="_blank"
							rel="noreferrer"
						>
							Project Link
						</a>{" "}
					</li>
					<li>
						<a
							href="https://www.youtube.com/watch?v=MRQWbVcexSc"
							target="_blank"
							rel="noreferrer"
						>
							{" "}
							YouTube Demo{" "}
						</a>{" "}
					</li>
					<li>
						<a
							href="https://github.com/prakhar897/ColdMessageAI"
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

export default Diffudle;
