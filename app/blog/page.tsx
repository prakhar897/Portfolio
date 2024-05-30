import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";

const page = () => {
	return (
		<>
			<Navbar />
			<ul>
				<li>
					<Link href="/blog/silicon-farm">
						Silicon Farm <b>[30 May 2024]</b>
					</Link>
				</li>
				<li>
					<Link href="/blog/ai-is-the-reason-interviews-are-harder-now">
						AI is the reason interviews are harder now{" "}
						<b>[15 May 2024]</b>
					</Link>
				</li>

				{/* <li>
					<Link>
						Why I created Json Fixer <b>[WIP]</b>
					</Link>
				</li> */}
				<li>
					<Link href="/blog/getting-into-big-tech-reliably">
						Getting into Big Tech Reliably <b>[28 Apr 2024]</b>
					</Link>
				</li>
				{/* <li>
					<Link href="/blog/playing-with-llm-vulnerabilities">
						Playing with LLM Vulnerabilites <b>[30 Dec 2023]</b>
					</Link>
				</li> */}
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
				<li>
					<a href="https://web.archive.org/web/20210112155301/https://sweetcode.io/creating-form-validations-with-react-hooks/">
						Creating Form Validations with React Hooks{" "}
						<b>[21 Dec 2019]</b>
					</a>
				</li>
			</ul>
		</>
	);
};

export default page;
