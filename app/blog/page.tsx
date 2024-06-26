import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";

const page = () => {
	return (
		<>
			<Navbar />
			<ul>
				<li>
					<Link href="/blog/ai-is-the-reason-interviews-are-harder-now">
						AI is the reason interviews are harder now{" "}
						<b>[15 May 2024]</b>
					</Link>
				</li>

				<li>
					<Link href="/blog/moving-away-from-substack">
						Moving Away from Substack <b>[17 Nov 2023]</b>
					</Link>
				</li>

				<li>
					<Link href="/blog/real-world-stats-for-bootstrapping">
						Real World Stats for IndieHacking <b>[19 Sep 2023]</b>
					</Link>
				</li>
				<li>
					<Link href="/blog/todo-list-that-actually-works">
						A TODO List that Actually Works <b>[07 Sep 2023]</b>
					</Link>
				</li>
				<li>
					<Link href="/blog/envisioning-a-future-with-gpt">
						Envisioning A Future With GPT <b>[15 Apr 2023]</b>
					</Link>
				</li>
				<li>
					<Link href="/blog/chatgpt-in-diffudle">
						Using ChatGPT to automate my AI Art Game{" "}
						<b>[21 Dec 2022]</b>
					</Link>
				</li>
			</ul>
		</>
	);
};

export default page;
