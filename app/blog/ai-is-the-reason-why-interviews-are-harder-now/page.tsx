import Navbar from "@/components/Navbar";
import React from "react";
import Pic2 from "./pic2.png";
import Pic1 from "./pic1.png";
import Pic3 from "./pic3.jpeg";
import Pic4 from "./pic4.jpeg";
import Pic5 from "./pic5.png";
import Pic6 from "./pic6.png";
import Pic7 from "./pic7.jpeg";
import Pic8 from "./pic8.webp";
import Image from "next/image";
import Link from "next/link";

const page = () => {
	return (
		<>
			<Navbar />
			<h1>AI is the reason why interviews are harder now</h1>
			<h6>
				{" "}
				<i> 15 May 2024 </i>{" "}
			</h6>
			<p>
				For the past few weeks, I've been prepping for interviews. One
				thing that caught my eye was the difficulty of questions have
				dramatically increased.
			</p>
			<p>
				In 2021, you were expected to solve DP, recursion, trees etc in
				45 minutes. Which is tough in itself.
			</p>
			<p>
				But in 2024, companies are giving Leetcode hards and asking you
				to solve them in less than 30 minutes.
			</p>

			<h4> Example 1: </h4>

			<Image src={Pic2} alt="parallel-courses" />

			<cite>
				This question requires DP on graphs with bit masking and
				backtracking. (Maybe topological sorting too.)
			</cite>

			<h4> Example 2: </h4>

			<Image src={Pic1} alt="kenken-puzzle" />
			<cite>
				Here's what KenKen puzzle{" "}
				<Link href="https://en.wikipedia.org/wiki/KenKen">wiki</Link>{" "}
				looks like. Good luck doing in this half an hour!!
			</cite>

			<h2> Who solves these Questions? </h2>
			<p>
				{" "}
				Well ofcourse. It's the people using:
				<ul>
					<li>
						<Link href="https://ultracode.ai/">Ultracode </Link>{" "}
						<Image src={Pic5} alt="ultracode" />
					</li>
					<li>
						<Link href="https://www.finalroundai.com/">
							Final Round AI{" "}
						</Link>
						<Image src={Pic6} alt="final-round" />
					</li>
					<li>
						<Link href="https://github.com/leetcode-mafia/cheetah">
							{" "}
							Cheetah{" "}
						</Link>
						<Image src={Pic7} alt="cheetah" />
					</li>
				</ul>
				and other similar tools.
			</p>

			<p>
				<br />
				The creator of Ultracode said it best:
			</p>
			<blockquote>
				Ultra code is well equipped to answer any techical question you
				throw at it. Algorithmic, OOP, System Design. It doesn't matter.
				Even someone non-technical like myself can pass a sweet
				interview.
			</blockquote>
			<cite>
				{" "}
				38:20 in{" "}
				<Link href={"https://www.youtube.com/watch?v=qJQQ-0BQNOc"}>
					https://www.youtube.com/watch?v=qJQQ-0BQNOc
				</Link>
			</cite>

			<h2> People don't actually use these right?</h2>
			<p> See for yourself:</p>
			<Image src={Pic3} alt="blind-1" />
			<Image src={Pic4} alt="blind-2" />
			<h2> What does this mean for us actual studying peasants?</h2>
			<p>
				We would be continually outcompeted unless we start using these
				tools. A true tragedy of commons.
				<Image src={Pic8} alt="interviewing.io" />
				<cite>
					Source:{" "}
					<Link
						href={
							"https://interviewing.io/blog/how-hard-is-it-to-cheat-with-chatgpt-in-technical-interviews"
						}
					>
						Interviewing.io
					</Link>
				</cite>
			</p>
			<h2> People using GPT are regularly caught </h2>
			<p>
				{" "}
				The idea of spotting cheating is obvious is a case of selection
				bias. You only notice when it's obvious. Clearly, the person put
				0 effort towards cheating (as most cheaters would, to be fair).
				But using the above tools, or even just having some sort of
				setup would make the issue much harder to spot.
			</p>
			<h2> Solution? </h2>
			<p> Do the interviews in person. There's no other way.</p>
			<h2> Should Employers care?</h2>
			<p>
				{" "}
				<b>YES.</b> Because AI can't do all functions of a software
				developer (yet). This means the phony guy you hire will have to
				do them.
			</p>
			<br />
			<br />
			<p>Thanks for Reading!!</p>
			<div className="ml-embedded" data-form="2hzNuN"></div>
		</>
	);
};

export default page;
