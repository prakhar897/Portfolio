import React from "react";
import Pic1 from "./pic1.png";
import Pic2 from "./pic2.png";
import Pic3 from "./pic3.png";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Real World Stats for Indie Hacking",
	description:
		"A deep dive into real-world indie hacking data, analyzing revenue distribution, startup trends, and success patterns. This study explores key insights from over 2,800 bootstrapped startups, debunking myths and revealing the truth about what works in the indie hacker space.",
};

const page = () => {
	return (
		<>
			<h2>Real World Stats for Indie Hacking</h2>

			<h6>
				<i> 19 Sep 2023 </i>
			</h6>

			<p>
				The tech twitter is filled with Indie Hackers spewing their
				often conflicting "wisdom". Unfortunately, their is no way to
				verify what is true and what is marketing. So I decided to
				crunch some numbers and make a few hard assertions.
			</p>

			<h2>Gathering The Data</h2>

			<p>
				<a
					href="https://www.indiehackers.com/"
					target="_blank"
					rel="noreferrer"
				>
					IndieHackers{" "}
				</a>
				is a platform where Bootstrappers generally post about their
				product and discuss specifics of their endeavors. They have a
				<b> products</b> page where you can see data for a lot of
				registered products. It looks something like this
				<Image src={Pic1} alt="indie-hackers-pic" />
			</p>

			<p>
				I decided to scrape all the data from this page. After writing a
				lot of scroll down, scraping, proxy scripts and a few other
				hacks, I got this beautiful dataset. It contains info of
				<b> 2868</b> bootstrapped startups.
				<Image src={Pic2} alt="dataset-pic" id="#dataset-pic" />
			</p>

			<p>
				Here's the{" "}
				<Link
					href="https://github.com/prakhar897/indiehacker-scraped"
					target="_blank"
					rel="noopener noreferrer"
				>
					github repository{" "}
				</Link>
				containing dataset and other artifacts. You can also visit
				<a
					href="https://www.indiehackers.com/product/pep"
					target="_blank"
					rel="noreferrer"
				>
					{" "}
					this sample link{" "}
				</a>
				to know more about what kind of data I've scraped.
			</p>

			<h2>Revenue</h2>

			<table>
				<tr>
					<th>Startups earning(per month)</th>
					<th>Count</th>
				</tr>
				<tr>
					<th>&lt;0$</th>
					<td>36</td>
				</tr>
				<tr>
					<th>0$</th>
					<td>1516</td>
				</tr>
				<tr>
					<th>0$-100$</th>
					<td>97</td>
				</tr>
				<tr>
					<th>100$-1000$</th>
					<td>98</td>
				</tr>
				<tr>
					<th>1000$-10k$</th>
					<td>173</td>
				</tr>
				<tr>
					<th>&gt;10k+$</th>
					<td>915</td>
				</tr>
				<tr>
					<th>Total</th>
					<td>2868</td>
				</tr>
			</table>

			<p>
				<b>Inference</b>: From the above data, it seems like either you
				hit it big with &gt;10k$ MRR or it completely doesn't work out.
				Pursuing 100$/month passive income just from this data looks
				like a fool's errand.
			</p>

			<p>
				<br />
				<br />
				....But people lie a lot right? Luckily IH also provides
				stripe-verified revenue. Let's see how many startups actually
				have verification enabled
				<Image src={Pic3} alt="pie-chart" />
			</p>

			<table>
				<tr>
					<th>Startups earning(per month)</th>
					<th>Stripe Verified Revenue Startups</th>
					<th>Self Reported Revenue Startups</th>
				</tr>
				<tr>
					<th>&lt;0$</th>
					<td>3</td>
					<td>33</td>
				</tr>
				<tr>
					<th>0$</th>
					<td>118</td>
					<td>1398</td>
				</tr>
				<tr>
					<th>0$-100$</th>
					<td>28</td>
					<td>69</td>
				</tr>
				<tr>
					<th>100$-1000$</th>
					<td>25</td>
					<td>73</td>
				</tr>
				<tr>
					<th>1000$-10k$</th>
					<td>37</td>
					<td>136</td>
				</tr>
				<tr>
					<th>&gt;10k+$</th>
					<td>74</td>
					<td>841</td>
				</tr>
				<tr>
					<th>Total</th>
					<td>285</td>
					<td>2550</td>
				</tr>
			</table>

			<p>
				Just from eyeballing, it seems like Stripe verified startups
				also either gain no traction or a lot of it.
			</p>
			<p>
				I'm low on time and energy so I'm not doing any “mean, median,
				deviation, skewness” checks to see if both distributions are
				same or not.
			</p>

			<h2>Keyword Analysis</h2>

			<h4>Q1. Which fields are most pursued by startups?</h4>

			<p>
				<b>
					Here are top 100 keywords in the dataset from taglines of
					all startups
				</b>
				[You can look at the dataset example given above to know what a
				tagline looks like]
			</p>

			<blockquote>
				[('ai', 163), ('platform', 141), ('app', 128), ('tool', 114),
				('online', 113), ('software', 91), ('website', 84), ('service',
				74), ('build', 73), ('management', 73), ('web', 73), ('design',
				72), ('wordpress', 68), ('data', 67), ('marketing', 66),
				('create', 65), ('simple', 64), ('find', 64), ('business', 63),
				('content', 63), ('saas', 59), ('get', 58), ('free', 58),
				('social', 55), ('digital', 53), ('email', 53), ('video', 52),
				('best', 50), ('product', 49), ('tools', 48), ('analytics', 45),
				('job', 45), ('one', 44), ('apps', 42), ('way', 42), ('help',
				40), ('code', 39), ('easy', 37), ('community', 37), ('videos',
				37), ('feedback', 37), ('people', 36), ('based', 36),
				('newsletter', 35), ('work', 35), ('time', 35), ('monitoring',
				33), ('tech', 32), ('developers', 32), ('world', 31),
				('builder', 31), ('api', 31), ('make', 30), ('media', 30),
				('remote', 30), ('google', 30), ('websites', 29),
				('subscription', 29), ('without', 29), ('startups', 29),
				('teams', 28), ('businesses', 28), ('using', 28), ('mobile',
				28), ('solution', 28), ('better', 28), ('discover', 28),
				('powered', 28), ('new', 28), ('share', 28), ('youtube', 28),
				('products', 27), ('development', 27), ('fast', 26), ('sales',
				25), ('startup', 25), ('customer', 25), ('user', 25), ('learn',
				25), ('podcast', 25), ('track', 25), ('minutes', 24), ('made',
				24), ('daily', 24), ('marketplace', 23), ('automation', 23),
				('cloud', 23), ('tracking', 23), ('seo', 23), ('generate', 23),
				('use', 22), ('custom', 22), ('unlimited', 22), ('browser', 22),
				('turn', 22), ('search', 22), ('board', 22), ('companies', 21),
				('services', 21), ('real', 21)]
			</blockquote>

			<h4>Q2.Which fields are most successful?</h4>

			<p>
				<b>
					Here are top 100 keywords in the dataset from taglines of
					startups with &gt;10k$ MRR
				</b>
			</p>

			<blockquote>
				[('platform', 64), ('software', 61), ('online', 52),
				('marketing', 39), ('service', 39), ('design', 33), ('digital',
				31), ('app', 31), ('business', 30), ('build', 30), ('wordpress',
				30), ('management', 28), ('tool', 28), ('website', 27), ('data',
				24), ('saas', 23), ('content', 23), ('social', 20), ('product',
				19), ('get', 18), ('free', 18), ('ai', 18), ('create', 17),
				('email', 16), ('apps', 16), ('media', 16), ('video', 16),
				('simple', 16), ('businesses', 16), ('way', 15), ('web', 15),
				('one', 15), ('tech', 15), ('help', 15), ('best', 15),
				('automation', 14), ('teams', 14), ('easy', 14), ('tools', 14),
				('builder', 14), ('sales', 13), ('seo', 13), ('developers', 13),
				('agency', 13), ('without', 13), ('subscription', 12),
				('companies', 12), ('unlimited', 12), ('analytics', 12),
				('products', 11), ('work', 11), ('startup', 11), ('tracking',
				11), ('solution', 11), ('code', 11), ('time', 11), ('job', 11),
				('marketplace', 10), ('make', 10), ('people', 10), ('services',
				10), ('api', 10), ('real', 10), ('startups', 10), ('find', 10),
				('generation', 9), ('solutions', 9), ('world', 9), ('small', 9),
				('grow', 9), ('development', 9), ('minutes', 9), ('themes', 9),
				('ad', 8), ('cloud', 8), ('support', 8), ('creators', 8),
				('use', 8), ('community', 8), ('ecommerce', 8), ('based', 8),
				('life', 8), ('experts', 8), ('using', 8), ('mobile', 8),
				('turn', 8), ('scheduling', 8), ('automated', 8), ('forms', 8),
				('google', 8), ('plugin', 8), ('powerful', 8), ('paid', 7),
				('remote', 7), ('monitoring', 7), ('company', 7), ('agencies',
				7), ('1', 7), ('team', 7), ('store', 7)]
			</blockquote>

			<h4>Q3. Most Overhyped fields</h4>

			<p>
				<b>
					I also did a diff between the two to get the most overhyped
					fields.
				</b>
			</p>

			<blockquote>
				[('ai', 145), ('app', 97), ('tool', 86), ('platform', 77),
				('online', 61), ('web', 58), ('website', 57), ('find', 54),
				('simple', 48), ('create', 48), ('management', 45), ('build',
				43), ('data', 43), ('get', 40), ('free', 40), ('content', 40),
				('design', 39), ('wordpress', 38), ('email', 37), ('video', 36),
				('saas', 36), ('social', 35), ('service', 35), ('best', 35),
				('tools', 34), ('job', 34), ('business', 33), ('analytics', 33),
				('videos', 33), ('newsletter', 31)]
			</blockquote>

			<p>
				<b>Inference</b>: AI is hugely Overhyped. Only 18 out of 163 AI
				startups listed are successful. Apps and tools seems like
				overhyped areas as well.
			</p>

			<p>
				I got really interesting results calculating underhyped areas.
				I'll keep those results with me for now.
			</p>

			<h2>Tech vs Non Tech Founders</h2>

			<table>
				<tr>
					<th>Companies with Founders who</th>
					<th>Code</th>
					<th>Dont Code</th>
				</tr>
				<tr>
					<th>Number of Companies</th>
					<td>2307</td>
					<td>515</td>
				</tr>
				<tr>
					<th>Number of Companies With &gt;10k$ MRR</th>
					<td>638</td>
					<td>267</td>
				</tr>
			</table>

			<p>
				<b>Inference</b>: This is a perfect example of "sampling bias".
				It seems like Founders who Code are less successful since they
				have 638/2307 = 27% success rate. Compared to Non Tech founders
				who have 267/515 = 51% success rate. This is just because Tech
				Founders don't need extensive planning to create a product. I
				recommend
				<a
					href="https://www.youtube.com/watch?v=P9WFpVsRtQg"
					target="_blank"
					rel="noreferrer"
				>
					{" "}
					this lesson by Eddie Woo{" "}
				</a>
				to learn more on this.
			</p>

			<h2>Solo vs Multiple Founders</h2>

			<table>
				<tr>
					<th>-</th>
					<th>Solo Founders</th>
					<th>Multiple Founders</th>
				</tr>
				<tr>
					<th>All Companies</th>
					<td>1836</td>
					<td>990</td>
				</tr>
				<tr>
					<th>Number of Companies With &gt;10k$ MRR</th>
					<td>417</td>
					<td>492</td>
				</tr>
			</table>

			<p>
				<b>Inference</b>: Multiple founders are objectively better.
				Solopreneurship is really difficult.
			</p>

			<h2>B2B vs B2C</h2>

			<table>
				<tr>
					<th>-</th>
					<th>B2C</th>
					<th>B2B</th>
				</tr>
				<tr>
					<th>All Companies</th>
					<td>242</td>
					<td>937</td>
				</tr>
				<tr>
					<th>Number of Companies With &gt;10k$ MRR</th>
					<td>75</td>
					<td>461</td>
				</tr>
			</table>

			<p>
				<b>Inference</b>: B2B is pursued a lot more in bootstrapping.
				and it kind of makes sense. when you don't have a big budget,
				targetting general audience is wild. That's the mistake I made
				with my first startup.
			</p>

			<h2>Results</h2>

			<p>
				<b>Chances of You being successful (if listed on IH)</b>: 31.9%
				<br />
				<br />
				The chances part is very important. <br />
				<br />
				X (My guess is 30000 startups) start bootstrapping —-&gt; 2868
				list on IH —-&gt; 915 making 10k$ MRR <br />
				<br />
				<b>That puts the actual percentage to be</b> : 3.5% chance of
				success. <br />
				<br />
			</p>

			<h2>Further Thoughts</h2>

			<p>
				There's a lot of survivorship bias, Twitter accounts like DHH,
				Naval glorify this journey and while they are successful, there
				are 1000 others who failed. <br />
				<br />I also remember tyler cowen's talk about
				<a
					href="https://www.youtube.com/watch?v=RoEEDKwzNBw"
					target="_blank"
					rel="noreferrer"
				>
					{" "}
					being suspicious of stories
				</a>
				. Particularly, DHH ran <b>37signals</b> for 5 years as a
				consultancy before basecamp. <br />
				<br />
				At this point he had pile of $, a network of people, and
				essential skills that would help him move further up the
				<a
					href="https://nathanbarry.com/wealth-creation/"
					target="_blank"
					rel="noreferrer"
				>
					{" "}
					ladders of wealth creation
				</a>
				. DHH built himself a foundation that made it much easier for
				him to not have to work “as hard” after a certain point. <br />
				<br />
				<br />
				<br />
				<br />
				<br />
				Thanks to
				<a
					href="https://www.linkedin.com/in/manan-nahata/"
					target="_blank"
					rel="noreferrer"
				>
					{" "}
					Manan{" "}
				</a>
				for proofreading this!! <br />
				<br />
				Thats it!! If you want any other insights from the dataset, Feel
				free to contact me at prakhar897@gmail.com :)
				<br />
				<br />
			</p>

			<div className="ml-embedded" data-form="2hzNuN"></div>
		</>
	);
};

export default page;
