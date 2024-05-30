"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";

const Page = () => {
	return (
		<>
			<Navbar />
			<h1>Getting into Big Tech Reliably</h1>

			<h3>
				<i> 28 Apr 2024 </i>
			</h3>

			<p>
				I fooled you, there is no surefire way to get into Google.
				Otherwise, everyone would've done it. But there are ways to
				improve the odds.
			</p>
			<br />

			<p>
				{" "}
				You already know what these companies ask so I won't bore you
				with the details. But broadly, Big Tech focuses heavily on
				Algorithmic interviews. I'm taking Google as an example, For
				SDE-2 role, they have 4 Leetcode + 1 Behavioural round.
			</p>

			<h2>Probablity of Getting Selected</h2>

			<ul>
				<li>
					Search for “Past Google interview experiences". Pick an
					experience.
				</li>
				<li>
					Pretend there's an interviewer sitting in front of you. Now,
					solve the questions given in a round in next 30-40 minutes.
				</li>
			</ul>
			<br />

			<p>Repeat above steps for 20 Questions.</p>
			<br />

			<p>
				At the end, you will have an array like this: PFFFF [P = Pass ,
				F = Fail]
			</p>
			<br />

			<h4>Calculation</h4>

			<p>
				{" "}
				Lets assume your results for last 5 attempts is PFFFF. Since
				companies require you to pass every round. You have a 0%
				probablity of clearing the interviews.{" "}
			</p>
			<br />

			<p>
				But this only 1 sample right? Luckily you sample this for 2-6,
				3-7……15-20 and get somewhat reliable results.
			</p>

			<p>
				Ex: Let's say your results are PFPPPFPPFPPPPPPFPFPFPPP.
				<br />
				There are 2 samples containing "PPPP" in total 18 samples. This
				means you have 11% chance of clearing the interview.
			</p>

			<br />
			<p>
				Note that in above example, you had 16 "P"s and 7 "F"s. Meaning
				you were passing 16/23 = 61% of interviews. But still you only
				had 11% chance of getting selected. The key point here is that
				you need consecutive wins not just higher percentage of them.
			</p>
			<br />

			<h2> Behavioural/Design Rounds </h2>

			<p>
				I feel these rounds are more of a toss since they depend on
				interviewers mood a lot. I'd give a 50% chance with no
				preparation and 80% chance with full preparation. You can
				integrate these into calculations to get full results.
			</p>
			<br />

			<p>
				Thanks for Reading!! Reach out to me prakhar897@gmail.com for
				any queries.
			</p>

			<br />

			<div className="ml-embedded" data-form="2hzNuN"></div>
		</>
	);
};

export default Page;
