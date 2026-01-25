import React from "react";

import Comic10xEngineers from "./comic-10x-engineers.webp";
import Image from "next/image";

import Navbar from "@/components/Navbar";
import HNComments from "@/components/HNComments";

import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Why technical cofounders reject you",
	description:
		"A deep dive into why technical cofounders often reject business founders, covering unrealistic expectations, equity concerns, and risk imbalances.",
};

const page = () => {
	return (
		<>
			<h2>Why technical cofounders reject you</h2>
			<h6>
				<i> 21 Jul 2024 </i>
			</h6>
			<p>
				As a tech fellow, I've been to a lot of cofounder dates. I want
				to share some perspective from the other side of the table.
			</p>
			<h2>Your requirements are insane</h2>
			<p>Here are the requirements quoted to me by the founders I met:</p>
			<ul>
				<li>is in their country </li>
				<li>has an engineering degree</li>
				<li>capable of doing actual greenfield work</li>
				<li>has worked in FAANG and/or serious startups</li>
				<li>is someone they can trust</li>
				<li>has business acumen</li>
				<li>is in a family position to do a start up</li>
				<li>can manage a team </li>
				<li>shares their passion</li>
				<li>available immediately</li>
				<li>works for free</li>
			</ul>
			<p>
				This is quite an insane list and I don't think any person on
				this planet qualifies. And if this mythical person does exist,
				why would they work with you?
			</p>
			<h2>You care about idea equity</h2>
			<p>
				A person has around 6000-7000 conscious thoughts per day.
				Multiply this by the whole population over the last 10 years,
				you have 189,000,000,000,000,000 ideas. <br /> <br />
				So the chances that yours is unique is somewhat low. <br />{" "}
				<br />
				The value in a startup isn't the idea but the ability to execute
				and build on that idea. For every very successful startup in X
				space there were 10 more X's with the same general idea but that
				failed to execute. <br /> <br />
				And so please believe that ideas really don't matter that much.
				Anyways, people like Kobe didn't become great because they
				thought of playing basketball. They became great because they
				did it every day. <br /> <br />
				<b>There is no idea equity, only sweat equity.</b>
				<br /> <br />
				And if you really did find someone who gave you 20% extra equity
				for your idea, then they would be forever resentful to you. Why
				should they work two years extra to get the 20% equity, which
				you have earned in a single thought. This would create distrust
				and sabotage the startup from the very beginning. <br /> <br />
			</p>
			<h2>You don't bring anything to the table</h2>
			<p>
				Jordan Belfort made it by selling scams. Then he sold movie
				rights of him selling scams. Now he makes it by selling courses
				on how to sell scams. A good salesman can be selling 10
				different crap easily. You need to show you are the one. <br />{" "}
				<br />
				Every person who is recruited must be convinced that he/she is
				going to get something out of the deal. And you have to sell the
				idea of the company to win labour. <br /> <br />
				If you're a dentist, or a store manager, please understand,
				those skills are irrelavant to this role. Maybe your experience
				is a plus, but your primary current role will be selling.
				<br /> <br />
				There are no dentists in a NBA team. and there are no dentists
				in a startup. <br /> <br />
				<b>Build it, or sell it, there's no third seat on this ride.</b>
				<br /> <br />
			</p>
			<h2>You're bootstrapping</h2>
			<p>
				People keep using the word “bootstrapping” like it's a cheat
				code. Bootstrapped companies are significantly more likely to
				fail. More so because no one ever vetted their plan with some of
				their money on stake. <br /> <br />
				I might be biased but most cofounders who want to bootstrap was
				because they were afraid to do actual work. Raising funding
				requires hard rejections which they want to avoid as much as
				possible. <br /> <br />
				If you can't sell even the whole enterprise, how would you sell
				the individual product\s built by the company? <br /> <br />
				Is it bootstrap if you sit around and ask others to do all the
				work. That's like me saying I want to construct a house, ask
				someone else to build it for us and when asked for funds, just
				say the magic word “bootstrap”. When the house is built, I'll
				maybe sell it. Maybe not. <br /> <br />
			</p>
			<h2>You don't understand the risk imbalance</h2>
			<p>
				There is a lot of upfront risk that the technical co-founder
				takes. They are the one putting all the time upfront before the
				business co-founder does.
				<br /> <br />
				The business cofounder essentially gets more leverage the more
				work the technical cofounder does -- because now there is
				sunk-cost and a psychological shackle. The technical cofounder
				just wants to be done with the build-out so the business can
				proceed and make money -- but the business cofounder has every
				incentive to expand the MVP more and more since they are putting
				in no effort (possibly have not quit their job either) and wants
				more and more before the system can be sold.
				<br /> <br />
				<b>
					My family, health, and social circles would qualify as
					assets and I'm definitely putting those on the line as an
					engineer.
				</b>
				<br /> <br />
				So, the business co-founder needs to take equal amount of risk.
				That means quitting their day job and either selling the product
				full time or essentially putting all of the money that they
				earned from the job into the company.
				<br /> <br />
			</p>
			<h2>Your Expectations are Insane</h2>
			<Image src={Comic10xEngineers} alt="10x Engineer" />
			<ul>
				<li>Fast paced.</li>
				<li>live and breathe work</li>
				<li>
					I don't want someone who's just in for the
					money/stipend/certificate.
				</li>
				<li>Looking for Mountain movers.</li>
				<li>rock star developer</li>
				<li>“game changing” idea</li>
			</ul>
			<p>
				I should be hearing about how I just need to write some code for
				an year, then I'll be cruising in my private yacht. Instead all
				people talk about is back-breaking work that I need to do.
			</p>
			<h2>But But…. Impact, 0-&gt;1</h2>
			<blockquote>
				From the ages of 19-21, I spent my time as a missionary for the
				Church of Jesus Christ of Latter-Day Saints, popularly known as
				the Mormon church. I worked 12 hours a day for two years
				straight with only Christmas and Mother's Day off. <br /> <br />
				During that time, people tried to stab me, passersby in the
				street screamed in my face, and I helped people get through some
				of the worst life has to offer (disease, drugs, abuse, and other
				crises). For this job, I was paid a total of 0 dollars. In fact,
				I used money that I had saved since I was 11 to pay for it
				myself. It was the best and worst and best experience of my
				life; it shaped everything about me. <br /> <br /> So you will
				have to forgive me if I laugh when people say their company is
				“mission-driven.” As someone who was literally a missionary, a
				startup selling productivity software is a business, not a
				calling. <br /> <br />
				<cite> - Not Me</cite>
			</blockquote>
			<h2> You don't understand your competitors </h2>
			<p>
				You are not competing with other founders for technical people.
				You're competing with companies. I can get 100K salary working
				30 hours a week with good food, social life and overall general
				happiness, or I could be working in your startup for 100 hours a
				week with zero pay. What do you think a reasonable person would
				pick?
			</p>
			<h2>How do I get a technical Cofounder?</h2>
			<p>
				So what you actually need to do is build a compelling case for a
				technical cofounder to want to join you. You have to show that
				you and your idea will succeed, and that it's inevitable.
			</p>
			<p>A compelling case to join you consists of two things:</p>
			<ul>
				<li>
					Proof that the idea or product itself will work, and, maybe
					more importantly:
				</li>
				<li>
					Validation of you, yourself! — as a person who can ship
					this, even without waiting for a magic coder person to help.
					You're going to be successful bringing this idea to life, no
					matter what.
				</li>
			</ul>
			<p>
				You should prove to the other party that this is happening and
				the train is departing. They can have a ticket to the ride if
				they join you right now.
			</p>
			<br /> <br />
			<p> Thanks for Reading!!</p>
			<h2>References</h2>
			<ol>
				<li>
					<a href="https://www.breakneck.dev/blog/no-tech-cofounder">
						https://www.breakneck.dev/blog/no-tech-cofounder
					</a>
				</li>
				<li>
					<a href="https://news.ycombinator.com/item?id=39902372">
						https://news.ycombinator.com/item?id=39902372
					</a>
				</li>
				<li>
					<a href="https://news.ycombinator.com/item?id=2714304">
						https://news.ycombinator.com/item?id=2714304
					</a>
				</li>
				<li>
					<a href="https://web.archive.org/web/20130601121658/http://martingryner.com/no-i-wont-be-your-technical-co-founder/">
						https://web.archive.org/web/20130601121658/http://martingryner.com/no-i-wont-be-your-technical-co-founder/
					</a>
				</li>
				<li>
					<a href="https://web.archive.org/web/20140215042843/http://humbledmba.com/please-please-please-stop-asking-how-to-find">
						https://web.archive.org/web/20140215042843/http://humbledmba.com/please-please-please-stop-asking-how-to-find
					</a>
				</li>
			</ol>
			<div className="ml-embedded" data-form="2hzNuN"></div>
			<HNComments hnStoryId="41034604" />
		</>
	);
};

export default page;
