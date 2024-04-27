import React, { useState } from "react";
import Navbar from "../../../components/Navbar";

const GettingIntoBigTechReliably = () => {
	const [lcPerformance, setLcPerformance] = useState("PFPFFFPPFFFPPPPPFFFPF");
	const [lcRounds, setLcRounds] = useState(4);
	const [otherRounds, setOtherRounds] = useState(1);
	const [isPrepared, setIsPrepared] = useState(false);
	const [probability, setProbability] = useState(0);
	const [attempts, setAttempts] = useState(0);

	const calculateProbability = () => {
		const passes = lcPerformance
			.split("")
			.filter((char) => char === "P").length;
		const fails = lcPerformance
			.split("")
			.filter((char) => char === "F").length;

		const totalQuestions = lcPerformance.length;
		const passProbability = passes / totalQuestions;
		const failProbability = 1 - passProbability;
		const otherRoundsProbability = isPrepared ? 0.8 : 0.5;
		const overallProbability =
			passProbability ** 4 * otherRoundsProbability ** 2;
		setProbability(overallProbability.toFixed(4));
		setAttempts(Math.ceil(1 / (1 - overallProbability)));
	};

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
				Generally Big Tech focuses heavily on Algorithms compared to
				Fundamentals, behavioural parts. So let's focus on that first.
				I'm taking Google as an example. For SDE-2 role, they have 1
				phone screen + 4 Onsite rounds all focused on Leetcode problems.
			</p>

			<h2>Exercise</h2>

			<ul>
				<li>
					Search for “Google Past interview experiences” on Google.
					Pick an experience, it will generally be segmented like ,
					Round 1, Round 2 etc. All rounds kind of have similar
					difficulties so you can interchange them.
				</li>
				<li>
					Pretend you have an interviewer sitting in front of you.
					Now, solve the questions given in a round in next 30-40
					minutes.
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

			<p> Lets assume your results for last 5 attempts is PFFFF. </p>
			<br />

			<p>
				So, you have a 20% probablity of solving a “Google” Question.
				This means you have 1/5 * 1/5 * 1/5 * 1/5 * 1/5 = 1/3125
				probablity of passing all rounds.
			</p>
			<br />

			<p>
				But this only 1 sample. Luckily you sample this for 2-6,
				3-7……15-20 and get somewhat reliable results.
			</p>
			<br />

			<p>
				I've added a small calculator at the end which determines the
				probablity of passing the rounds.
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

			<div className="bg-black text-white rounded-lg shadow-md p-6">
				<h2 className="text-2xl font-semibold mb-4 text-center ">
					Calculator
				</h2>
				<div className="mb-4">
					<label
						htmlFor="lcRounds"
						className="block font-medium mb-2"
					>
						No. of Algo Interview Rounds:
					</label>
					<input
						type="text"
						id="lcRounds"
						value={lcRounds}
						onChange={(e) => setLcRounds(e.target.value)}
						placeholder="4"
						className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-white text-black"
					/>
				</div>
				<div className="mb-4">
					<label
						htmlFor="otherRounds"
						className="block font-medium mb-2"
					>
						No. of Behavioural/Design/Other Interview Rounds:
					</label>
					<input
						type="text"
						id="otherRounds"
						value={otherRounds}
						onChange={(e) => setOtherRounds(e.target.value)}
						placeholder="4"
						className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-white text-black"
					/>
				</div>
				<div className="mb-4 flex items-center">
					<label htmlFor="isPrepared" className="font-medium mr-2">
						Prepared for Other Rounds?
					</label>
					<input
						type="checkbox"
						id="isPrepared"
						checked={isPrepared}
						onChange={(e) => setIsPrepared(e.target.checked)}
						className="form-checkbox h-5 w-5 text-white"
					/>
				</div>
				<div className="mb-4">
					<label
						htmlFor="lcPerformance"
						className="block font-medium mb-2"
					>
						Past Algorithm Performance:
					</label>
					<input
						type="text"
						id="lcPerformance"
						value={lcPerformance}
						onChange={(e) =>
							setLcPerformance(e.target.value.toUpperCase())
						}
						placeholder="Enter P/F sequence"
						className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-white text-black"
					/>
				</div>
				<button
					onClick={calculateProbability}
					className="bg-white text-blue-500 px-4 py-2 rounded-md hover:bg-blue-600 hover:text-white transition-colors duration-300"
				>
					Calculate
				</button>
				<h3 className="text-lg font-semibold mb-4 text-blue-500">
					Results
				</h3>
				<p className=" mb-2">
					Probability of getting selected:{" "}
					<span className="font-bold text-blue-500">
						{probability}
					</span>
				</p>
				<p className="">
					BigTech generally has a 6 months cooldown before you can
					apply again, so it would take you{" "}
					<span className="font-bold text-blue-500">
						{attempts / 2}
					</span>{" "}
					years to get selected.
				</p>
			</div>

			<h2> Notes </h2>

			<p>
				Probability of getting selected in x attempts: 1 - q^n where q =
				probability of not getting selected in a single attempt and n =
				no of attempts
			</p>
			<br />
			<br />
			<br />

			<p>
				Thanks for Reading!! Reach out to me prakhar897@gmail.com for
				any queries.
			</p>

			<div className="ml-embedded" data-form="2hzNuN"></div>
		</>
	);
};

export default GettingIntoBigTechReliably;
