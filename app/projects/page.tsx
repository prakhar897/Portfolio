"use client";
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Link from "next/link";

const Page = () => {
	const showHNComments = (hnStoryId: string) => {
		const rootElement = document.querySelector(
			`[hn-story-id="${hnStoryId}"]`
		);

		const options = {
			maxDepth: 5,
		};

		(window as any).displayHNComments(hnStoryId, rootElement, options);
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

			<h1> Pinned </h1>

			<div className="border p-4 mt-4 mb-4 rounded-2xl">
				<a
					href="https://saibarsaiko.softwaredesign.ing/"
					target="_blank"
					rel="noreferrer"
					className=""
				>
					<b className="text-4xl">saibarsaiko.</b>softwaredesign.ing
				</a>{" "}
				<h6 className="mt-1">
					<i> 26 Dec 2023 </i>
				</h6>
				<br />
				<p>
					A site to build small tools. [and test LLM Vulnerabilities.]
				</p>
				<br />
			</div>

			<div className="border p-4 mt-4 mb-4 rounded-2xl">
				<a
					href="https://jsonfixer.softwaredesign.ing/"
					target="_blank"
					rel="noreferrer"
					className=""
				>
					<b className="text-4xl">jsonfixer.</b>softwaredesign.ing
				</a>{" "}
				<h6 className="mt-1">
					<i> 20 Apr 2024 </i>
				</h6>
				<br />
				<p>Fixes Broken JSONs.</p>
				<br />
				<button onClick={() => showHNComments("40030411")}>
					{" "}
					Show Comments on this project{" "}
				</button>
				<div
					className="hn-comments-drawer"
					hn-story-id="40030411"
					hn-max-depth="10"
				></div>
			</div>

			<div className="border p-4 mt-4 mb-4 rounded-2xl">
				<a
					href="https://github.com/prakhar897/hn-comments-drawer"
					target="_blank"
					rel="noreferrer"
					className=""
				>
					<b className="text-4xl">HN Comments Drawer</b>
				</a>{" "}
				<h6 className="mt-1">
					<i> 21 Nov 2023 </i>
				</h6>
				<br />
				<p>
					Integrate Hacker News comments and display them beautifully
					within your websites.
				</p>
				<br />
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

			<h1> Other </h1>

			<div className="border p-4 mt-4 mb-4 rounded-2xl">
				<a
					href="https://3-minute-test.softwaredesign.ing/"
					target="_blank"
					rel="noreferrer"
					className=""
				>
					<b className="text-4xl">3-minute-test.</b>softwaredesign.ing
				</a>{" "}
				<h6 className="mt-1">
					<i> 14 Jun 2024 </i>
				</h6>
				<br />
				<p>A test taken in 3 minutes.</p>
				<br />
			</div>

			<div className="border p-4 mt-4 mb-4 rounded-2xl">
				<a
					href="https://tubesearch.softwaredesign.ing/"
					target="_blank"
					rel="noreferrer"
					className=""
				>
					<b className="text-4xl">tubesearch.</b>softwaredesign.ing
				</a>{" "}
				<h6 className="mt-1">
					<i> 21 Jan 2024 </i>
				</h6>
				<br />
				<p>Advanced Filters for Youtube Channels.</p>
				<br />
			</div>

			<div className="border p-4 mt-4 mb-4 rounded-2xl">
				<a
					href="https://li-quoridor.softwaredesign.ing/"
					target="_blank"
					rel="noreferrer"
					className=""
				>
					<b className="text-4xl">li-quoridor.</b>softwaredesign.ing
				</a>{" "}
				<h6 className="mt-1">
					<i> 10 Dec 2023 </i>
				</h6>
				<br />
				<p>A freeBoard for the Game &quot;Quoridor&quot;.</p>
				<br />
				<a
					href="https://github.com/prakhar897/li-quoridor"
					target="_blank"
					rel="noreferrer"
				>
					{" "}
					Source Code{" "}
				</a>{" "}
			</div>

			<div className="border p-4 mt-4 mb-4 rounded-2xl">
				<a
					href="https://coldmessageai.softwaredesign.ing/"
					target="_blank"
					rel="noreferrer"
					className=""
				>
					<b className="text-4xl">coldmessageai.</b>softwaredesign.ing
				</a>{" "}
				<h6 className="mt-1">
					<i> 08 Sep 2023 </i>
				</h6>
				<br />
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
				<a
					href="https://chrome.google.com/webstore/detail/coldmessagegpt-gpt-writte/abbbgckfinjdbndjjjlpkkkoefklnaih?hl=en&authuser=0"
					target="_blank"
					rel="noreferrer"
				>
					Extension Link
				</a>{" "}
				<br />
				<a
					href="https://www.youtube.com/watch?v=MRQWbVcexSc"
					target="_blank"
					rel="noreferrer"
				>
					{" "}
					Extension YouTube Demo{" "}
				</a>{" "}
			</div>

			<div className="border p-4 mt-4 mb-4 rounded-2xl">
				<a
					href="https://botspotting.softwaredesign.ing/"
					target="_blank"
					rel="noreferrer"
					className=""
				>
					<b className="text-4xl">botspotting.</b>softwaredesign.ing
				</a>{" "}
				<h6 className="mt-1">
					<i> 08 Aug 2023 </i>
				</h6>
				<br />
				<p>An app to track and spot bots.</p>
				<br />
			</div>

			<div className="border p-4 mt-4 mb-4 rounded-2xl">
				<a
					href="https://github.com/prakhar897/workaround-gpt"
					target="_blank"
					rel="noreferrer"
					className=""
				>
					<b className="text-4xl">WorkAround GPT [3000+ DAU]</b>
				</a>{" "}
				<h6 className="mt-1">
					<i> 10 Jul 2023 </i>
				</h6>
				<br />
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
				<br />
				<a
					href="https://www.youtube.com/watch?v=oMdjdYotCno"
					target="_blank"
					rel="noreferrer"
				>
					{" "}
					YouTube Demo{" "}
				</a>{" "}
				<br />
				<a
					href="https://github.com/prakhar897/workaround-gpt"
					target="_blank"
					rel="noreferrer"
				>
					{" "}
					Source Code{" "}
				</a>{" "}
			</div>

			<div className="border p-4 mt-4 mb-4 rounded-2xl">
				<a
					href="https://flashcards.softwaredesign.ing/"
					target="_blank"
					rel="noreferrer"
				>
					<b className="text-4xl">flashcards.</b>softwaredesign.ing
				</a>{" "}
				<h6 className="mt-1">
					<i> 10 Mar 2023 </i>
				</h6>
				<br />
				<p>A simple app to create and try out flashcards.</p>
				<br />
			</div>

			<div className="border p-4 mt-4 mb-4 rounded-2xl">
				<a
					href="https://github.com/prakhar897/diffudle"
					rel="noreferrer"
					className=""
				>
					<b className="text-4xl">Diffudle</b>
				</a>{" "}
				<h6 className="mt-1">
					<i> 17 Jan 2023 </i>
				</h6>
				<br />
				<p>A game involving Stable Diffusion and Wordle.</p>
				<br />
			</div>

			<div className="border p-4 mt-4 mb-4 rounded-2xl">
				<a
					href="https://headline-hero.glitch.me/"
					rel="noreferrer"
					className=""
				>
					<b className="text-4xl">headlinehero.</b>glitch.me
				</a>{" "}
				<h6 className="mt-1">
					<i> 02 Aug 2020 </i>
				</h6>
				<br />
				<p>
					App for bloggers to generate headlines based on keywords.
					Completely Obsolete with the arrival of GPT.
				</p>
				<br />
				<a
					href="https://github.com/prakhar897/HeadLineHero"
					target="_blank"
					rel="noreferrer"
				>
					{" "}
					Source Code{" "}
				</a>{" "}
			</div>

			<div className="border p-4 mt-4 mb-4 rounded-2xl">
				<a
					href="https://node-saas.glitch.me/"
					rel="noreferrer"
					className=""
				>
					<b className="text-4xl">node-saas.</b>glitch.me
				</a>{" "}
				<h6 className="mt-1">
					<i> 02 Mar 2020 </i>
				</h6>
				<br />
				<p>
					Inspired By alecrocute's flaskSaas. I've noticed SaaS
					bootstraps/boilerplates being sold upwards of $1,000 per
					year and I think that's ridiculous. This project will be my
					attempt to make a great starting point for your next big
					business as easy and efficent as possible.
				</p>
				<br />
				<a
					href="https://github.com/prakhar897/nodeSaas"
					target="_blank"
					rel="noreferrer"
				>
					{" "}
					Source Code{" "}
				</a>
			</div>
		</>
	);
};

export default Page;
