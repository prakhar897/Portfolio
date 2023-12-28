import React from "react";
import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";

const Blog = () => {
	return (
		<>
			<Navbar />
			<ul>
				{/* <li>
					<Link to="blog/playing-with-llm-vulnerabilities">
						Playing with LLM Vulnerabilites <b>[30 Dec 2023]</b>
					</Link>
				</li> */}
				<li>
					<Link to="blog/moving-away-from-substack">
						Moving Away from Substack <b>[17 Nov 2023]</b>
					</Link>
				</li>

				<li>
					<Link to="blog/real-world-stats-for-bootstrapping">
						Real World Stats for IndieHacking <b>[19 Sep 2023]</b>
					</Link>
				</li>
				<li>
					<Link to="blog/todo-list-that-actually-works">
						A TODO List that Actually Works <b>[07 Sep 2023]</b>
					</Link>
				</li>
				<li>
					<Link to="blog/envisioning-a-future-with-gpt">
						Envisioning A Future With GPT <b>[15 Apr 2023]</b>
					</Link>
				</li>
				<li>
					<Link to="blog/chatgpt-in-diffudle">
						Using ChatGPT to automate my AI Art Game
						<b>[21 Dec 2022]</b>
					</Link>
				</li>
				<li>
					<a href="https://sweetcode.io/creating-form-validations-with-react-hooks/">
						Creating Form Validations with React Hooks
						<b>[21 Dec 2019]</b>
					</a>
				</li>
			</ul>
		</>
	);
};

export default Blog;
