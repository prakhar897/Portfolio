import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Have some empathy for your LLMs",
	description:
		"Why most people fail to get good results from LLMs and how treating them as collaborators instead of black boxes can change everything.",
};

const Page = () => {
	return (
		<>
			<h2>Have some empathy for your LLMs</h2>

			<h6>
				<i> 27 Mar 2026 </i>
			</h6>

			<p>
				My friend was working on a research document. Like most people,
				she wanted things to be fast, so she took the task she was
				given, pasted it directly into ChatGPT, and waited for the
				result. When it came back, she immediately made a face.
				<br />
				<br />
				“This isn't what I wanted.”
			</p>
			<br />

			<p>
				That reaction made me curious. What did she actually want? So I
				asked her to show me a few example documents she considered
				good. That's when it became clear. Those documents had a very
				specific tone, style, and underlying intent. ChatGPT's response,
				while correct on the surface, didn't come close to matching that
				flavor.
			</p>
			<br />

			<p>
				And that's when it clicked: most non-technical users don't
				really understand how LLMs work. They try them once, get a
				generic output, decide it's useless, and move on. But the
				problem wasn't the model. It was the process.
			</p>
			<br />

			<p>In her case, there were several missing layers:</p>
			<br />

			<ul>
				<li>
					First, the research itself. The task required gathering
					information from multiple scattered sources across the
					internet. That step never happened.
				</li>
				<li>
					Second, synthesis. Even with the right data, turning raw
					information into a high-quality document is a separate
					skill. A pitch deck, product analysis, or strategy memo each
					has its own structure and intent.
				</li>
				<li>Third, and most importantly, the implicit expectation.</li>
			</ul>
			<br />

			<p>
				When a manager says “write a research document,” they're not
				just asking for information. They assume you understand the
				broader goal, the target audience, the tone, and what “good”
				looks like. Humans infer this naturally. LLMs don't. They can't
				read your mind, sense dissatisfaction, or pick up on subtle
				cues. If you don't explicitly tell them what you want, they fall
				back to a safe, generic style, which is rarely what you actually
				need.
			</p>
			<br />

			<p>
				So the real takeaway is simple: break your work into smaller,
				explicit tasks. You don't even need to know how to do this
				perfectly.
			</p>
			<br />

			<ul>
				<li>
					Inputs: the task, surrounding context, and any data you have
				</li>
				<li>
					Outputs: your goal, and the organization's goal from this
					document
				</li>
			</ul>
			<br />

			<p>Then ask the LLM to:</p>
			<br />

			<ul>
				<li>break the problem into steps</li>
				<li>generate a prompt for each step</li>
				<li>leave blanks where you can fill in specifics</li>
			</ul>

			<p>
				From there, iterate step by step. In my experience, this alone
				dramatically improves the output.
			</p>
			<br />

			<p>
				This led me to a broader idea: “Please have some empathy for
				your LLMs.” Empathy here doesn't mean emotion. It means
				understanding constraints. They are not mind readers, they don't
				see context unless you provide it, and they don't understand
				intent unless you articulate it. If you treat them like a black
				box that should “just get it,” you'll be disappointed. You need
				to provide them context, clarity, examples and direction, to get
				a good output.
			</p>
			<br />

			<p>
				It also gave me a clearer view into how non-technical users
				interact with LLMs. The gap is massive. As developers, we
				instinctively decompose problems, iterate, and refine inputs.
				Many others expect a one-shot answer, and when that fails, they
				conclude the tool doesn't work. I've even seen strong skeptics
				say, “LLMs can't do my job.” But if you look closely, the issue
				isn't capability. It's usage.
			</p>
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

export default Page;
