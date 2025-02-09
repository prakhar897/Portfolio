import React from "react";
import CoveyQuadrants from "./covey_quadrants.png";
import Ex1 from "./ex1.jpeg";
import Ex2 from "./ex2.jpg";
import Image from "next/image";

import Navbar from "@/components/Navbar";

import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "A TODO List that actually works",
	description:
		"An honest breakdown of common TODO list methods and why they fail, along with a practical, consequence-based approach that actually works. Learn how to prioritize tasks effectively and avoid productivity traps.",
};

const page = () => {
	return (
		<>
			<Navbar />
			<h1>A TODO List that actually works</h1>

			<h3>
				<i> 07 Sep 2023 </i>
			</h3>
			<p>
				I've seen countless apps, methodologies, scientism, talks,
				conversations on TODO Lists to the point it has spun into its
				own genre. Let me outline some methodologies and why they don't
				work. Then I'll talk about what really worked well for me at
				least.
			</p>

			<h2>Approaches That don't work</h2>

			<h2>1. A giant List</h2>
			<p>
				This offers <b>no prioritization</b>, you will often miss
				important tasks. Eventually, it will also become overwhelming
				when hundred chores are staring down at you all the time. <br />
				<br />
				How to solve this: Organize your tasks.
			</p>

			<h2>2. TODO Apps</h2>
			<p>
				Cool you say, Let's organize them using a <b>TODO app</b>. This
				is the worst option by far. These apps have slick UI but the
				whole point of the list is to motivate yourself to do the task.
				The feeling you get crossing a line on a paper is unmatched
				compared to touching on an app. Further, these apps just hide
				your achievement so you'll be even less incentivized. <br />
				<br />
				How to solve this: Use paper-pen/whiteboard instead of these
				apps.
			</p>

			<h2>3. Four Quadrant/ Similar Methodologies</h2>
			<p>
				If you've ventured deep into productivity lore, you'll know
				there's something called the "Four Quadrant Method" [2]. In
				brief, you split your tasks into four sections:
			</p>
			<ol>
				<li>Important, Due Soon</li>
				<li>Important, Not Due Soon</li>
				<li>Not Important, Due Soon</li>
				<li>Not Important, Not Due Soon</li>
			</ol>

			<Image src={CoveyQuadrants} alt="Covey Quadrants" />

			<p>
				The strategy is to pick the tasks in the priorities given above.
				This means you'll be able to pick all the important tasks first.
				<br />
				<br />
				I liked this approach initially but eventually realized: ”Tasks
				are not the same. Get milk, write an essay, plan a vacation,
				reconnect with a friend. These are things of different
				magnitude, different emotional connection, different context and
				time commitment.” [1]
				<br />
				Quadrant just means you miss the essence of the task, why it's
				important and why you should do it.
			</p>

			<h2>Consequence based Approach (works for me)</h2>
			<p>
				I moved a step back into the giant list. But now with each task,
				I'll write a consequence of not doing it. <br />
				<br />
				Ex:
			</p>

			<blockquote>
				Task - Apply to JS Conference <br />
				<br />
				Consequence - Not being able to attend JS Conf.
			</blockquote>

			<Image src={Ex1} alt="Example Task" />

			<p>
				It's Sunday night and I pick up this task. Then I play
				Counter-Strike for the rest of the night. In the morning, I can
				either decide to keep this in the pile or if the pile has grown
				too much, I'll just cross this out meaning I accept the
				consequences of not doing this.
			</p>

			<Image src={Ex2} alt="Task Comparisons" />
			<p>
				This helps in keeping my priorities sorted. Not doing the day
				job tasks have harsher consequences than this, so I'll naturally
				pick those out first. You can also mix the four Quadrant
				approach here but I found it to be overkill. <br />
				<br />
				If the list grows large, this means I'm struggling to let go. At
				this point, It's important to remind myself that as an adult,
				there are things I will miss in life. And it's strangely
				relieving. <br />
				<br />
				Another benefit is that, this help you uncover truths about your
				values. Like if you're pursuing a field only because your
				parents wants you too. The consequence here would be
				“disappointed parents”.
			</p>

			<p>
				<b> Note </b> - DO NOT make a task out of things you love to do.
				I did not make a task of “playing video games”. If you like them
				so much, you'll make space for it and accept consequences of not
				doing other tasks. Making it a task will only diminish the joy.
			</p>

			<p>
				Thanks for Reading, you can email me at
				<b> prakhar897@gmail.com</b> to share your thoughts!
			</p>

			<div className="ml-embedded" data-form="2hzNuN"></div>

			<h2>References</h2>
			<ol>
				<li>
					<a href="https://frantic.im/todo-for-robots/">
						TODO For Robots
					</a>
				</li>
				<li>
					<a href="https://www.youtube.com/watch?v=oTugjssqOT0">
						Time Management By Randy Pausch
					</a>
				</li>
			</ol>
		</>
	);
};

export default page;
