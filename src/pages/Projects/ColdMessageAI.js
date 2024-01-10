import React from "react";
import Navbar from "../../components/Navbar";

const ColdMessageAI = () => {
	return (
		<>
			<Navbar />

			<h1>Cold Message AI</h1>

			<h6>
				<i> 08 Sep 2023 </i>
			</h6>

			<p>
				ColdMessageAI is a Completely Free and Open Source Cold Message
				writer which harnesses the power of GPT to write
				hyper-personalized messages. Personalized messages are more
				likely to get replies than cookie cutter ones. But hand-writing
				them is tiring, so we've automated this process.
			</p>

			<p>
				Also created a completely free ColdMessage AI Chrome extension
				which does the whole process on linkedIn for free.
			</p>

			<p>
				<ul>
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
				</ul>
			</p>
		</>
	);
};

export default ColdMessageAI;
