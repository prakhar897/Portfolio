import React from "react";
import Navbar from "../components/Navbar";

const HireMe = () => {
	return (
		<>
			<Navbar />

			<blockquote>
				Rent my brain to write code, design systems, give programming
				advice or discover ways to optimize your startup / business.
			</blockquote>
			<h2>Things I can do for You</h2>
			<h2>1. Develop MVPs</h2>

			<p>
				I've worked in lots of different fronts of programming. I have
				created frontends, backends of various sites. Created ML models,
				Data Pipelines for apps too. I've hosted various apps sometimes
				using AWS and K8s, other times using managed solutions like
				Heroku etc.
			</p>
			<p>
				Hence, I can create whatever you have in mind and would be able
				to iterate quickly. Founders need more assistance from the
				engineers than just building their app. I am able to help with
				things like determining feasibility of their idea, refining
				future requirements, anticipating hurdles, scalability of their
				product, cost estimation, timelines etc. Essentially, I act as a
				Tech Cofounder while you look for one.
			</p>
			<p></p>
			<h2>2. Software Development</h2>
			<p>
				If you already have a Team and a working product, I can help you
				deliver new features. I also have a great eye for the overall
				architecture and I dare to challenge the status quo in healthy
				doses. If you are looking to enhance your team, I'd be happy to
				be on board.
			</p>
			<h2>3. Technical Consulting</h2>

			<p>
				If you're non technical and looking for some opinion on any
				technical topic, I'm happy to help! You can schedule a meeting
				from the link given below.
			</p>

			<br />

			<p>
				{" "}
				If you're interested, then send mail at prakhar897@gmail.com or
				book a meet
				<a
					href="https://calendly.com/prakhar897/meet"
					target="_blank"
					rel="noreferrer"
				>
					{" "}
					here
				</a>
			</p>
		</>
	);
};

export default HireMe;
