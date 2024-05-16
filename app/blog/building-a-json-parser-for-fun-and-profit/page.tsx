import Navbar from "@/components/Navbar";
import React from "react";

const page = () => {
	return (
		<>
			<Navbar />
			<h1>Building a JSON parser for fun and profit</h1>
			<h6>
				{" "}
				<i> 16 May 2024 </i>{" "}
			</h6>
			<p>
				The backend used to contain all business logics. But in the
				recent wave of AI startups, there's an interesting pattern. All
				backends have a "prompts" section which makes calls to LLMs and
				use the "vague" result in the logic.
			</p>
			<p>
				This introduces some vague. And LLMs are not always able to
				output result in the correct format.
			</p>
			<p>
				I personally saw 2 startups who had a written regex hacks when
				LLMs malfunctions. It's a really interesting problem in itself.
			</p>
			<p>
				Sure, OpenAI has a param "json_intent" and you can limit the
				pool of characters for the LLMs next token. Still these
				companies never used them.
			</p>

			<h2> JSON Fixer</h2>
			<p>
				{" "}
				Keeping all this in mind, I thought to myself , what if I can
				create something which handles all possible edge cases for
				broken JSONs.
			</p>

			<p>
				{" "}
				So, I (Claude) created a few example, wrote some regex for it
				and created the surrounding app. Next, I posted it on Reddit,
				where people broke it within 5 minutes.{" "}
			</p>

			<p>
				{" "}
				So, I went back to the drawing board and eventually created a
				huge chart to map all possible edge cases. They involved loops
				and recursion. After everything, I wrote a parser which kinda
				handles a lot of edge cases.{" "}
			</p>

			<p> Here's the site: jsonfixer.com </p>

			<br />
			<br />
			<p>Thanks for Reading!!</p>

			<br />
			<br />
			<br />
			<br />

			<div className="ml-embedded" data-form="2hzNuN"></div>
		</>
	);
};

export default page;
