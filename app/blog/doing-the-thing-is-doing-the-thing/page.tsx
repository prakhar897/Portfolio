import Navbar from "@/components/Navbar";
import React from "react";
import HNComments from "@/components/HNComments";

import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Doing the thing is doing the thing",
	description:
		"Thinking, planning, talking, and consuming content about the thing is not doing the thing. A short reminder to just start.",
};

const page = () => {
	return (
		<>
			<h2>Doing the thing is doing the thing.</h2>
			<h6>
				<i>25 Jan 2026</i>
			</h6>

			<br />
			<br />

			<p>
				Thinking about doing the thing{" "}
				<span className="opacity-40">is not doing the thing.</span>
			</p>
			<p>
				Dreaming about doing the thing{" "}
				<span className="opacity-40">is not doing the thing.</span>
			</p>
			<p>
				Visualizing success from doing the thing{" "}
				<span className="opacity-40">is not doing the thing.</span>
			</p>
			<p>
				Waiting to feel ready to do the thing{" "}
				<span className="opacity-40">is not doing the thing.</span>
			</p>

			<br />
			<br />

			<p>
				Talking about doing the thing{" "}
				<span className="opacity-40">is not doing the thing.</span>
			</p>
			<p>
				Explaining the thing to others{" "}
				<span className="opacity-40">is not doing the thing.</span>
			</p>
			<p>
				Arguing online about the thing{" "}
				<span className="opacity-40">is not doing the thing.</span>
			</p>
			<p>
				Announcing that you’ll start the thing{" "}
				<span className="opacity-40">is not doing the thing.</span>
			</p>

			<br />
			<br />

			<p>
				Listening to podcasts about doing the thing{" "}
				<span className="opacity-40">is not doing the thing.</span>
			</p>
			<p>
				Watching tutorials about doing the thing{" "}
				<span className="opacity-40">is not doing the thing.</span>
			</p>
			<p>
				Reading threads about how others did the thing{" "}
				<span className="opacity-40">is not doing the thing.</span>
			</p>

			<br />
			<br />

			<p>
				Planning the perfect system for the thing{" "}
				<span className="opacity-40">is not doing the thing.</span>
			</p>
			<p>
				Buying tools for the thing{" "}
				<span className="opacity-40">is not doing the thing.</span>
			</p>
			<p>
				Reorganizing your workspace for the thing{" "}
				<span className="opacity-40">is not doing the thing.</span>
			</p>

			<br />
			<br />

			<p>
				Feeling guilty about not doing the thing{" "}
				<span className="opacity-40">is not doing the thing.</span>
			</p>
			<p>
				Being “busy” instead of doing the thing{" "}
				<span className="opacity-40">is not doing the thing.</span>
			</p>
			<p>
				Telling yourself you’ll start tomorrow{" "}
				<span className="opacity-40">is not doing the thing.</span>
			</p>

			<br />
			<br />

			<p>
				Failing while doing the thing <b>is</b> doing the thing.
			</p>
			<p>
				Doing it badly <b>is</b> doing the thing.
			</p>
			<p>
				Doing it timidly <b>is</b> doing the thing.
			</p>
			<p>
				Doing a small part of the thing <b>is</b> doing the thing.
			</p>

			<br />
			<br />

			<p>
				Writing a blog about doing the thing{" "}
				<span className="opacity-40">is not doing the thing.</span>
			</p>

			<br />
			<br />

			<p>I should probably get back to work.</p>

			<br />
			<br />
			<br />
			<br />

			<div className="ml-embedded" data-form="2hzNuN"></div>

			<HNComments hnStoryId="46776155" />
		</>
	);
};

export default page;
