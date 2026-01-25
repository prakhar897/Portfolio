import Navbar from "@/components/Navbar";
import React from "react";
import Pic1 from "./pic1.png";
import Pic2 from "./pic2.png";
import Pic3 from "./pic3.png";
import Pic4 from "./pic4.png";
import Pic5 from "./pic5.png";
import Pic6 from "./pic6.png";
import Image from "next/image";

import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Shenanigans on linkedin",
	description:
		"A deep dive into how LinkedIn's Easy Apply, default follows, and phantom job posts are gamifying the job-hunting experience.",
};

const page = () => {
	return (
		<>
			<h2>Shenanigans on linkedin</h2>
			<h6>
				<i>9 July 2025</i>
			</h6>

			<p>
				A year ago, I was applying for jobs because well.... I needed a
				job.
			</p>
			<p>
				Particularly, after completing the leetcode gauntlet, I was
				grinding LinkedIn Jobs for XP.
			</p>

			<p>
				Thankfully, LinkedIn has this thing called “Easy Apply.” Click,
				click, done. Minimal commitment, just the dopamine hit of
				productivity.
			</p>
			<figure>
				<Image src={Pic1} alt="Easy Apply UI" />
			</figure>
			<p>
				But then I noticed something strange. Right before hitting
				Submit, there's a neat little checkbox: <br />
				<i>“Follow [Company Name] for updates.”</i> <br />
				It's already checked. You didn't ask for it. But hey, you just
				followed a company.
			</p>

			<figure>
				<Image src={Pic2} alt="Follow checkbox" />
				<figcaption>Automatically checked, because why not?</figcaption>
			</figure>

			<b>
				That's not a feature. That's a handshake you didn't know you
				made.
			</b>

			<h3>The Feed Is the Product</h3>
			<p>
				Following a company means you start seeing its posts in your
				feed. Even more cleverly, your connections do too.
			</p>
			<figure>
				<Image src={Pic3} alt="Feed showing company follows" />
			</figure>

			<p>
				Your connections don't even need to interact with the company
				for you to see their posts.
			</p>
			<figure>
				<Image src={Pic4} alt="Company post in feed" />
			</figure>

			<p>
				I know, this can be maybe be turned off. But 99% of folks aren’t
				gonna do this.
			</p>
			<br />

			<b>
				😄 - So if I see my friend following “XYZ Salesforce Solutions
				Pvt Ltd,” I can confidently assume they applied for a job there.
			</b>

			<h2>The Phantom Job Board</h2>
			<p>
				Did you know companies can post jobs on LinkedIn for{" "}
				<strong>free</strong>?
			</p>
			<p>
				But if they want reach, they need to boost the post — like
				promoting an Instagram reel, but sadder.
			</p>

			<br />
			<b>
				😄 - This means some job posts don't show up in your search
				unless you manually visit the company's page.
			</b>

			<p>
				One thing always puzzled me: how do these companies have 10,000+
				followers? My friend isn't exactly a Microsoft junkie (more of a
				meth-head tbh).
			</p>
			<p>So I ran an experiment.</p>
			<ul>
				<li>Made a fake company with a cool-sounding "AI" name</li>
				<li>Free Canva logo</li>
				<li>
					Jargon-filled job post — “AI Data Strategist,” “Prompt
					Engineer”
				</li>
				<li>No website. No product. Just LinkedIn.</li>
			</ul>
			<p>Result?</p>
			<figure>
				<Image src={Pic5} alt="Fake company stats" />
			</figure>

			<figure>
				<Image src={Pic6} alt="Fake company stats" />
				<figcaption>102 followers, 102 applicants</figcaption>
			</figure>

			<b>All from a company that doesn't exist.</b>

			<h2>Real Tips from the Inside</h2>
			<ul>
				<li>
					<strong>Applicants are default-sorted by relevance.</strong>
				</li>
				<li>
					<strong> Sell yourself a bit.</strong> There's often an
					auto-reject filter if basic criteria aren't met.
				</li>
				<li>
					<strong>Always answer the screening questions.</strong> Even
					if they seem optional.
				</li>
			</ul>

			<p>Thanks for reading!!</p>

			<br />
			<br />
			<div className="ml-embedded" data-form="2hzNuN"></div>
		</>
	);
};

export default page;
