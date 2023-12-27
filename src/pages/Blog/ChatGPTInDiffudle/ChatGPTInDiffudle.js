import React from "react";
import Navbar from "../../../components/Navbar";

import Cavemen from "./cavemen.jpg";
import GPTResult from "./gptResult.png";
import GPTText from "./gptText.png";

const ChatGPTInDiffudle = () => {
	return (
		<>
			<Navbar />
			<h1>Using ChatGPT to Automate an AI Art Game</h1>

			<p>
				I created an AI Art based Wordle type game called
				<b>Diffudle</b> (Dead, unfortunately). In short, you are given
				images created using hidden “prompts” which you have to guess.
				For the MVP, I used to generate images myself and upload them to
				a database. Between selecting prompts, styles, and images; it
				takes me around 30 mins to do this. Since this is a daily game,
				doing this every day quickly became a timesink. I realized this
				is a crisis which I need to solve.
			</p>

			<h2>Old Way</h2>
			<p>
				I used to visit generative art sites like
				<a
					href="https://lexica.art/"
					target="_blank"
					rel="noreferrer"
					className="article-a"
				>
					lexica.ai
				</a>
				to search for similar prompts. I used styles from other prompts
				to generate images. Eg: If the prompt is “cavemen selfie”. The
				actual images will be generated from the following phrases:
			</p>
			<ul>
				<li>
					cavemen selfie, drawn by inexperienced artistically -
					challenged 1 4 - year - old in class in 2 0 minutes when
					bored, bad proportions, bad art, ink pen, scratchy, no
					shading, red eyes, angry
				</li>
				<li>
					cavemen selfie, in the style of Valorant by Cushart Krentz
					and Gilleard James, Fierce expression 4k, 8k, HDR, Trending
					on artstation, Behance, Pinterest
				</li>
			</ul>
			<p>
				Here's the actual images generated for the above game. The
				images are stylistically different but all of them are still
				kind of doing the same thing.
			</p>
			<img src={Cavemen} alt="Cavemen Pic" />

			<h2>New Way</h2>
			<p>
				I started using ChatGPT to create prompts with immediate
				results. I asked GPT to generate phrases for me with the given
				prompt and here's what it came up with:
			</p>
			<img src={GPTText} alt="Cavemen Pic (Improved)" />
			<p>
				Impressive!! It contains different aspects of the same prompt
				which can be used to generate images. Here's the final images.
				You can see that the images now describe the prompt instead of
				just drawing it.
			</p>
			<img src={GPTResult} alt="Cavemen Pic (Descriptive)" />

			<h2>Automating the Whole Game</h2>
			<p>At this point, I could've automated the whole game:</p>

			<ol>
				<li>ChatGPT to generate appropriate prompts for the word.</li>
				<li>lexica.ai API to get differing styles for the Image.</li>
				<li>Stable Diffusion API to create images.</li>
			</ol>

			<p>
				Since all this is paid, I decided to wait until this project
				starts generating some revenue before buying a subscription to
				these.
			</p>

			<p>
				Thanks for Reading!! Reach out to me prakhar897@gmail.com for
				any queries.
			</p>

			<div className="ml-embedded" data-form="2hzNuN"></div>
		</>
	);
};

export default ChatGPTInDiffudle;
