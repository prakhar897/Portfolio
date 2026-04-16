import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "A Guide to Reducing Cognitive Load",
	description:
		"A practical guide to offloading reminders, routines, documents, decisions, and distractions so your brain can focus on thinking.",
};

const Page = () => {
	return (
		<>
			<h2>A Guide to Reducing Cognitive Load</h2>

			<h6>
				<i>16 Apr 2026</i>
			</h6>

			<p>
				I used to feel like my brain was full all the time. Over time, I
				realized that the brain is good at thinking, not remembering.
				Every time I relied on memory for routine tasks, it introduced
				failure points. So the better approach I found is to offload
				everything I possibly can.
			</p>
			<br />

			<h3>Reminders for Everything</h3>
			<p>Not just important things. Everything.</p>
			<ul>
				<li>Take supplements</li>
				<li>Call parents / respond to someone you’ve been delaying</li>
				<li>Take food out of the freezer</li>
				<li>Join a meeting, with a 5-min pre-reminder</li>
				<li>Follow up on an email if no reply in 2 days</li>
				<li>Check logs / dashboards at a fixed time</li>
				<li>Check that random idea later</li>
			</ul>
			<br />

			<p>
				The rule is: don't rely on memory for near-future tasks. The
				moment I think "I need to do X before leaving in 30 minutes," I
				set a reminder immediately. I don't trust myself to remember.
				Holding that thought in my head without offloading it adds load.
				My mind keeps revisiting it in the background to make sure it
				doesn't slip away. My phone rings a lot. It's excessive, but I
				don't miss things anymore.
			</p>
			<br />

			<p>
				There's also an implicit cognitive load in procrastinating
				unpleasant tasks. Adding a reminder means being accountable. I
				promised myself that I'll do XYZ at a certain time, and that
				time has arrived.
			</p>
			<br />

			<h3>Location-Based Reminders</h3>
			<p>
				I use the{" "}
				<a
					href="https://play.google.com/store/apps/details?id=com.technomadapps.gpsalarm&hl=en_IN"
					target="_blank"
					rel="noreferrer"
				>
					GPS Alarm
				</a>{" "}
				app for geofencing. When I get on a bus or metro, I set an alarm
				for my destination. Then I can completely relax instead of
				constantly checking where I am. I used to check every 5 to 10
				minutes: how far along am I, how much time is left? Now I can
				focus on other things, knowing I won't miss my stop. I didn't
				realize how much background stress that removes until it was
				gone.
			</p>
			<br />

			<p>
				I also set a geofence just outside my house for things I need to
				remember before leaving. Like carry charger etc. Forgetting one
				item can easily create a 30-minute detour. Comparatively,
				setting a reminder takes five seconds. So, one avoided mistake
				pays for hundreds of alarms over time.
			</p>
			<br />

			<h3>SOPs for Everything</h3>
			<p>
				I started writing things down every time I learned something
				new, especially at work:
			</p>
			<ul>
				<li>Common commands</li>
				<li>Repeated processes</li>
				<li>Checklists for complex tasks</li>
				<li>Templates for tickets</li>
				<li>howtos for things I do infrequently</li>
			</ul>
			<br />

			<p>And at home too:</p>
			<ul>
				<li>
					A list of all food choices, so I can browse options for
					breakfast, lunch, or dinner without deliberating from
					scratch
				</li>
				<li>Step-by-step instructions for cooking things my way</li>
				<li>Skincare routine</li>
				<li>Gift ideas for different types of people</li>
				<li>Maintenance logs of vehicles.</li>
			</ul>
			<br />

			<p>
				At work, whenever someone explained something to me, I would
				record it if possible, convert it into steps, and store it
				somewhere searchable. I generally use the Whisper speech-to-text
				model and then run it through an LLM to generate coherent,
				structured text.
			</p>
			<br />

			<p>
				Over time, I built a personal knowledge base. The number of
				times I had to refigure something out or ask a coworker again
				because I'd forgotten a detail is staggering. With this system,
				I'm always on top of my work.
			</p>
			<br />

			<h3>A "MyDocs" Dump</h3>
			<p>
				My father has a habit of asking me to produce any document at
				any moment. So I devised a system once and for all: a single
				folder containing literally every important document.
			</p>
			<ul>
				<li>IDs, driving license, passport, voter card, etc.</li>
				<li>Income tax documents</li>
				<li>Insurance paperwork</li>
				<li>Old job documents</li>
				<li>College degree and mark sheets</li>
				<li>Major invoices and warranty cards for household items</li>
				<li>Doctor's prescriptions</li>
			</ul>
			<br />

			<p>
				I photographed each one, trimmed and cropped them properly, and
				stored everything in one place. I also made a habit of taking a
				picture/downloading whenever I get my hand on a new document.
			</p>
			<br />

			<p>
				Yes, there are security trade-offs. I accept them for the sake
				of speed and reliability. The folder is compressed and protected
				with a master password used only for this.
			</p>
			<br />

			<p>
				The upside was: documents always within reach when needed, no
				dependence on physical copies, and nothing ever gets lost.
			</p>
			<br />

			<h3>Fixed Places for Physical Objects</h3>
			<p>
				I reduce decision-making for trivial things. Everything goes to
				its fixed place.
			</p>
			<br />

			<p>
				I do this consistently. Even when distracted or tired, I don't
				lose things. Losing a single object creates cascading failures.
				If I can't find my car keys, I won't make it to an appointment
				on time, which means rescheduling or cancelling something else.
				Fixing locations eliminates that entire class of problems.
			</p>
			<br />

			<p>
				(Hard to practice since housemates move stuff, still it's better
				than nothing.)
			</p>
			<br />

			<h3>Eliminating Unnecessary Inputs</h3>
			<p>
				I realized I was too distracted too much of the time to make
				meaningful progress. Unclear goals combined with constant
				distractions make for a perfect quagmire. Cognitive load isn't
				just tasks, It's also noise.
			</p>
			<br />

			<p>So I started aggressively filtering inputs:</p>
			<ul>
				<li>
					Stopped watching TV because there was no way to block ads on
					it
				</li>
				<li>
					Enabled ad blockers across YouTube, Netflix, and the rest of
					the internet,{" "}
					<a
						href="https://brave.com/"
						target="_blank"
						rel="noreferrer"
					>
						Brave Browser
					</a>{" "}
					with{" "}
					<a
						href="https://ublockorigin.com/"
						target="_blank"
						rel="noreferrer"
					>
						uBlock Origin
					</a>
				</li>
				<li>
					Added{" "}
					<a
						href="https://chromewebstore.google.com/detail/sponsorblock-for-youtube/mnjggcdmjocbbbhaepdhchncahnbgone"
						target="_blank"
						rel="noreferrer"
					>
						SponsorBlock
					</a>{" "}
					on YouTube, since creators increasingly insert filler
					content around mid-roll ads
				</li>
				<li>
					Switched to Android because iPhone has no way to sideload
					apps.{" "}
					<a
						href="https://revanced.app/"
						target="_blank"
						rel="noreferrer"
					>
						ReVanced
					</a>{" "}
					is a godsend for people like me. It lets me install a
					patched version of YouTube that blocks ads on my phone. I
					tried YouTube Premium, but it didn't block sponsors, so this
					was the better option.
				</li>
			</ul>
			<br />

			<p>
				Why does this matter? Ads don't just annoy. They shape
				preferences subconsciously. Repeated exposure builds
				familiarity, and familiarity biases decisions. Removing ads
				reduces that hidden influence. I now discover new brands only
				through word of mouth from people I trust, though they too are
				influenced by ads to some degree.
			</p>
			<br />

			<h3>Restricted Notifications</h3>
			<p>
				Most notifications are useless. Modern apps have algorithms
				designed to pull you back in when they realize they're losing
				you. The only way they can do that is by notifications. So I
				blocked notifications from almost everything.
			</p>
			<br />

			<p>I kept notifications only from:</p>
			<ul>
				<li>Work-related groups</li>
				<li>Immediate family chats</li>
				<li>My reminders app</li>
			</ul>
			<br />

			<h3>App Blockers</h3>
			<p>
				Modern apps are designed to maximize the amount of time you
				spend on them.
			</p>
			<br />

			<p>
				So I don't rely on willpower. Instead I use app blockers to
				restrict access to the worst offenders. Either time-based limits
				or full blocks during certain hours. If I try to open them, I
				hit a wall.
			</p>
			<br />

			<p>
				The specific tools don't matter much. What matters is that the
				friction is high enough that opening the app becomes a
				deliberate choice, not a reflex.
			</p>
			<br />

			<h3>LLM Revisions for Everything</h3>
			<p>
				Whenever I’m doing something even slightly non-trivial, I run it
				through LLMs.
			</p>
			<br />

			<p>
				For example, if I'm going on a vacation, I'll just describe the
				trip and ask what I might be missing. If I'm cooking something,
				I'll ask what groceries I should order. The LLM gives me a list
				I can cross-check against what I already have. If something's
				missing, it tells me. I add it. That's it.
			</p>
			<br />

			<p>
				It almost always catches one or two things I hadn't thought of.
				Not because I'm careless, but because it's genuinely hard to
				think of everything from scratch every time.
			</p>
			<br />

			<p>
				The value isn't in the obvious suggestions. It's in the edge
				cases. The LLM has seen thousands of variations of whatever I'm
				doing. I haven't. So it flags the thing I don't know I don't
				know.
			</p>
			<br />

			<p>
				Ofcourse I do override it's thinking and making the final
				judgement call. but this prevents me from making the most
				obvious mistakes.
			</p>
			<br />

			<h3>Breaking Goals Down Aggressively</h3>
			<p>
				You might wonder, "Why do this all?". I'm a big believer in
				having grander goals. and hitting them requires focus.
			</p>
			<br />

			<p>
				I used to suffer from too much big-picture thinking. High-level
				ideas about things that would add value. There were too many of
				them, and they were too large. This led to a lot of analysis
				paralysis.
			</p>
			<br />

			<p>
				So I started dedicating separate time purely for thinking.
				During that time, I worked through:
			</p>
			<ul>
				<li>10-year goals</li>
				<li>Yearly targets</li>
				<li>Daily actions</li>
			</ul>
			<br />

			<p>
				The key is making daily tasks deceptively simple. I don't need
				to complete the 10-year goal, just the small daily task. After a
				few months of this, I could see meaningful progress toward my
				longer-term goals.
			</p>
			<br />

			<p>
				Writing goals down also matters. Thinking about them endlessly
				just turns into daydreaming. Writing forces clarity and
				accountability. and helps me stay grounded in the knowledge that
				I'm actually moving forward every day.
			</p>
			<br />
			<br />
			<br />
			<br />
			<br />

			<p>
				Thanks for reading!! Feel free to contact me at
				prakhar897@gmail.com
			</p>

			<br />
			<br />

			<div className="ml-embedded" data-form="2hzNuN"></div>
		</>
	);
};

export default Page;
