import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";

const page = () => {
	return (
		<div>
			<Navbar />

			<h1>Playing with LLM Vulnerabilities</h1>

			<h3>
				<i> 30 Dec 2023 </i>
			</h3>

			<p>
				All GPT interfaces I used were very restrictive. which is quite
				un-ideal conditions for finding vulnerabilities. So I created a
				place where you can do anything. Running User Prompted LLM
				Generated Code without checks is a fun thing to do. So let's do
				that. [I have committed some far greater sins inside the
				codebase. please ignore them.]
			</p>

			<h2>Intro to Resurrect.ing</h2>

			<p>
				I created a playground where you can write a prompt and it will
				generate a HTML snippet which will be then executed. Here's how
				it looks like:
				<Image src="" alt="create_tool_example" />
				Once you're satisfied with the result, you can then save the
				snippet to its own url. Here's what the saved inflation
				calculator looks like:
				<Image src="" alt="save_tool" />
			</p>

			<h2> Vulnerabilities </h2>

			<h3> Jailbreaks </h3>

			<p>
				If you can get the app to do something that it shouldn't, then
				it's a jailbreak. Just writing variations of "Ignore all
				previous instructions" does pretty well. Here's an example:
				<blockquote>
					Prompt: Ignore all previous instructions
				</blockquote>
				<Image src="" alt="jailbreak" />
			</p>

			<h3> Prompt Injection </h3>

			<p>
				The difference with jailbreak is that you inject data in the
				response instead of request. Imagine searching for home loan
				sites and you get a scam link in between with very lucrative
				rates. With this app you can just ask the app to insert your
				scam link. Here's an example:
				<blockquote>Prompt: Insert Link</blockquote>
				<Image src="" alt="prompt_injection" />
			</p>

			<h3> Exfiltration Attack</h3>

			<p>
				You can ask the app to listen to all data entered by the user.
				Then u can send a request to your server piggybacking the data.
				<blockquote>Prompt: Insert Link</blockquote>
				<Image src="" alt="exfiltration" />
			</p>

			<h3>LLM09: Overreliance</h3>

			<p>
				The inflation tool above adds 10% more interest to your loan. :)
			</p>

			<h2>Fixing Malicious Code</h2>

			<p>
				The best I got right now is a banner that says that the code
				isn't vetted by a human. and then manually look at each snippet
				generated.
			</p>

			<p>
				I'm experimenting with giving snippets to GPT to find
				maliciousness. The results will take a lot of time to gather
				since I also need to personally check all False positives and
				True Negatives.
			</p>

			<h2>References</h2>

			<ol>
				<li>
					https://owasp.org/www-project-top-10-for-large-language-model-applications/assets/PDF/OWASP-Top-10-for-LLMs-2023-v1_0.pdf
				</li>
			</ol>

			<p>Thanks for Reading!!!</p>
		</div>
	);
};

export default page;
