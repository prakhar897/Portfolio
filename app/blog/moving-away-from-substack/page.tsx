"use client";

import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";

const Page = () => {
	useEffect(() => {
		const script = document.createElement("script");
		script.src =
			"https://cdn.jsdelivr.net/gh/prakhar897/hn-comments-drawer@latest/src/script.js";
		script.async = true;

		script.onload = () => {
			const rootElement = document.querySelector(
				'[hn-story-id="38300167"]'
			);

			const options = {
				maxDepth: 5,
			};

			(window as any).displayHNComments("38300167", rootElement, options);
		};

		document.body.appendChild(script);
	}, []);
	return (
		<>
			<Navbar />
			<h1>Moving Away from Substack</h1>

			<h6>
				<i> 17 Nov 2023 </i>
			</h6>

			<p>
				I tried Substack. It was fine, I suppose. But truth be told, I
				failed to find any compelling reason why it stood out from
				platforms like Medium.
				<br />
				<br />
			</p>

			<p>
				Back in the day, Medium was a welcoming space where folks shared
				their technical insights and more. However, if you visit it now,
				you might notice a disheartening transformation. It's become a
				cluttered space, resembling spam-filled sites like Quora or even
				Google's over-optimized front page.
				<br />
				<br />
			</p>

			<p>
				They seem desperate for revenue, drowning the site in SEO tricks
				and gating most publications behind a paywall. It's frustrating
				to be lured in by promising articles only to hit a dead end
				behind a payment prompt.
				<br />
				<br />
			</p>

			<p>
				Now, I don't mean to be harsh on Medium, but it's clear to me
				that they've outgrown their prime and are now scrambling for
				every penny before potentially fading into obscurity or being
				swallowed by a faceless conglomerate, much like Vox or Tumblr.
				<br />
				<br />
			</p>

			<p>
				One aspect that deeply concerns me is the fate of the
				independent writers who wrote content on Medium. All their
				efforts have gone to vain. They have to start from scratch on a
				new platform.
				<br />
				<br />
			</p>

			<p>
				But let's be honest, Substack won't be exempt from the chase for
				cash forever [1][2]. When that day comes, all the hard work of
				writers will vanish alongside it. Sure, you can notify your
				subscribers about the move, but a lot people like to directly
				visit the blog instead of subscribing.
				<br />
				<br />
			</p>

			<p>
				But... Substack emails your newsletters directly to the readers
				and provides the option to export your email list right??. I'm
				sure these will the axed as soon as profitability becomes an
				issue since they provide a nice lock in.
				<br />
				<br />
			</p>

			<p>
				Hence, I've taken control by self-hosting my content. No more
				worries about paywalls or unexpected demands. Best of all, I can
				tinker with the design and layouts as I wish. I still maintain
				my cherished list of subscribers, albeit with a little more
				manual effort.
				<br />
				<br />
			</p>

			<p>
				Thanks for Reading!! <br />
			</p>

			<h2>References</h2>
			<ol>
				<li>
					<a href="https://www.axios.com/2023/04/07/substack-gets-writers-to-invest-but-doesnt-share-new-financial-info">
						https://www.axios.com/2023/04/07/substack-gets-writers-to-invest-but-doesnt-share-new-financial-info
					</a>
				</li>
				<li>
					<a href="https://www.theverge.com/2023/3/28/23660473/substack-retail-investors-revenue-profit">
						https://www.theverge.com/2023/3/28/23660473/substack-retail-investors-revenue-profit
					</a>
				</li>
			</ol>

			<div className="ml-embedded" data-form="2hzNuN"></div>

			<div
				className="hn-comments-drawer"
				hn-story-id="38300167"
				hn-max-depth="10"
			></div>
		</>
	);
};

export default Page;
