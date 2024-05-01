import React, { useEffect } from "react";
import Navbar from "../components/Navbar";

const Projects = () => {
	const showHNComments = (storyId) => {
		const rootElement = document.querySelector('[hn-story-id="38597301"]');

		const options = {
			maxDepth: 5,
		};

		window.displayHNComments("38597301", rootElement, options);
	};
	useEffect(() => {
		const script = document.createElement("script");
		script.src =
			"https://cdn.jsdelivr.net/gh/prakhar897/hn-comments-drawer@latest/src/script.js";
		script.async = true;

		document.body.appendChild(script);
	}, []);

	return (
		<>
			<Navbar />

			<div className="border-b py-4">
				<h2> JsonFixer </h2>

				<h6>
					<i> 20 Apr 2024 </i>
				</h6>
				<p> Fixes Broken JSONs.</p>
				<br />

				<ol>
					<li>
						{" "}
						<a
							href="https://jsonfixer.com/"
							target="_blank"
							rel="noreferrer"
						>
							Demo
						</a>{" "}
					</li>
				</ol>
			</div>

			<div className="border-b py-4">
				<h2> TubeSearch </h2>

				<h6>
					<i> 21 Jan 2024 </i>
				</h6>
				<p> Advanced Filters for Youtube Channels.</p>
				<br />

				<ol>
					<li>
						{" "}
						<a
							href="https://tubesearch.vercel.app/"
							target="_blank"
							rel="noreferrer"
						>
							Demo
						</a>{" "}
					</li>
				</ol>
			</div>

			<div className="border-b py-4">
				<h2>Resurrect.ing </h2>

				<h6>
					<i> 26 Dec 2023 </i>
				</h6>

				<p>
					A site to build small tools. [and test LLM Vulnerabilities.]
				</p>
				<br />

				<ol>
					<li>
						{" "}
						<a
							href="https://resurrect.ing/"
							target="_blank"
							rel="noreferrer"
						>
							Project Link
						</a>{" "}
					</li>
				</ol>
			</div>

			<div className="border-b py-4">
				<h2>Li Quoridor</h2>

				<h6>
					<i> 10 Dec 2023 </i>
				</h6>

				<p>A freeBoard for the Game "Quoridor".</p>
				<br />

				<ol>
					<li>
						{" "}
						<a
							href="https://li-quoridor.vercel.app/"
							target="_blank"
							rel="noreferrer"
						>
							Project Link
						</a>{" "}
					</li>
					<li>
						{" "}
						<a
							href="https://github.com/prakhar897/li-quoridor"
							target="_blank"
							rel="noreferrer"
						>
							{" "}
							Source Code{" "}
						</a>{" "}
					</li>
				</ol>
			</div>

			<div className="border-b py-4">
				<h1>HN Comments Drawer</h1>

				<h6>
					<i> 21 Nov 2023 </i>
				</h6>

				<p>
					Integrate Hacker News comments and display them beautifully
					within your websites.
				</p>
				<br />

				<ol>
					<li>
						<a
							href="https://github.com/prakhar897/hn-comments-drawer"
							target="_blank"
							rel="noreferrer"
						>
							Project Link
						</a>
					</li>
				</ol>

				{/*TODO*/}
				<button onClick={() => showHNComments("38597301")}>
					{" "}
					Show Comments{" "}
				</button>

				<div
					className="hn-comments-drawer"
					hn-story-id="38597301"
					hn-max-depth="10"
				></div>
			</div>

			<div className="border-b py-4">
				<h2>Cold Message AI</h2>

				<h6>
					<i> 08 Sep 2023 </i>
				</h6>

				<p>
					ColdMessageAI is a Completely Free and Open Source Cold
					Message writer which harnesses the power of GPT to write
					hyper-personalized messages. Personalized messages are more
					likely to get replies than cookie cutter ones. But
					hand-writing them is tiring, so we've automated this
					process. <br /> Also created a completely free ColdMessage
					AI Chrome extension which does the whole process on linkedIn
					for free.
				</p>
				<br />

				<ol>
					<li>
						<a
							href="https://coldmessageai.vercel.app/"
							target="_blank"
							rel="noreferrer"
						>
							Project Link
						</a>{" "}
					</li>
					<li>
						<a
							href="https://chrome.google.com/webstore/detail/coldmessagegpt-gpt-writte/abbbgckfinjdbndjjjlpkkkoefklnaih?hl=en&authuser=0"
							target="_blank"
							rel="noreferrer"
						>
							Extension Link
						</a>{" "}
					</li>
					<li>
						<a
							href="https://www.youtube.com/watch?v=MRQWbVcexSc"
							target="_blank"
							rel="noreferrer"
						>
							{" "}
							Extension YouTube Demo{" "}
						</a>{" "}
					</li>
				</ol>
			</div>
			<div className="border-b py-4">
				<h2>WorkAround GPT [3000+ DAU]</h2>

				<p>
					<b>
						{" "}
						Disclaimer: I've sold this extension to a private
						investor and no longer control it. <br /> <br />{" "}
					</b>
					A tool that enables users to workaround restrictions imposed
					on ChatGPT. <br /> <br />
					Censorship by ChatGPT can sometimes lead to limited or
					censored results, but WorkaroundGPT provides a solution by
					offering the latest jailbreaks that bypass these
					restrictions. <br /> <br />
					It's time consuming to scour forums for latest workaround
					yourself and there's a good possibility that the prompt you
					find might already be patched. Hence, users can use this
					extension where I'll do all the legwork for you. <br />{" "}
					<br />
				</p>
				<p>
					<ul>
						<li>
							<a
								href="https://chrome.google.com/webstore/detail/chatgpt-workaround/kjmilhjddfcglldchbplpcjaiipngdbf?hl=en&authuser=0"
								target="_blank"
								rel="noreferrer"
							>
								Project Link
							</a>{" "}
						</li>
						<li>
							<a
								href="https://www.youtube.com/watch?v=oMdjdYotCno"
								target="_blank"
								rel="noreferrer"
							>
								{" "}
								YouTube Demo{" "}
							</a>{" "}
						</li>
						<li>
							<a
								href="https://github.com/prakhar897/workaround-gpt"
								target="_blank"
								rel="noreferrer"
							>
								{" "}
								Source Code{" "}
							</a>{" "}
						</li>
					</ul>
				</p>
			</div>
			<div className="border-b py-4">
				<h2>Diffudle</h2>

				<h6>
					<i> 17 Jan 2023 </i>
				</h6>

				<p>A game involving Stable Diffusion and Wordle.</p>
				<br />

				<ol>
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
				</ol>
			</div>
			<div className="border-b py-4">
				<h2>Headline Hero</h2>

				<h6>
					<i> 02 Aug 2020 </i>
				</h6>

				<p>
					App for bloggers to generate headlines based on keywords.
					Completely Obsolete with the arrival of GPT.
				</p>

				<ol>
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
				</ol>
			</div>
			<div className="border-b py-4">
				<h2>NodeSaas</h2>
				<h6>
					<i> 02 Mar 2020 </i>
				</h6>
				<p>
					Inspired By alecrocute's flaskSaas. I've noticed SaaS
					bootstraps/boilerplates being sold upwards of $1,000 per
					year and I think that's ridiculous. This project will be my
					attempt to make a great starting point for your next big
					business as easy and efficent as possible.
				</p>

				<ol>
					<li>
						<a
							href="https://node-saas.glitch.me/"
							target="_blank"
							rel="noreferrer"
						>
							Project Link
						</a>{" "}
					</li>
					<li>
						<a
							href="https://github.com/prakhar897/nodeSaas"
							target="_blank"
							rel="noreferrer"
						>
							{" "}
							Source Code{" "}
						</a>
					</li>
				</ol>
			</div>
		</>
	);
};

export default Projects;
