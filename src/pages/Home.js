import React from "react";
import Navbar from "../components/Navbar";

const Home = () => {
	return (
		<>
			<Navbar />

			<a
				href="https://jsonfixer.com/"
				target="_blank"
				rel="noreferrer"
				className="font-orbitron border py-4 rounded-3xl text-center grid place-items-center"
			>
				{" "}
				Latest work = JsonFixer{" "}
			</a>
			<p className="mt-12">
				Hi, I'm Prakhar, a developer who focuses on building web apps.
				In the initial years, I learnt how to create systems that are
				highly scalable, can handle heavy load and are highly resilient.
				After years of sticking just to the tech side of things, I
				started taking bigger roles which included coming up with
				product initiatives to bring in more business for the product.
			</p>
			<br />

			<p>
				Here's my
				<a
					href="https://www.linkedin.com/in/prakhar897/"
					target="_blank"
					rel="noreferrer"
				>
					{" "}
					LinkedIn{" "}
				</a>
				and
				<a
					href="https://prakgupta.com/Resume.pdf"
					target="_blank"
					rel="noreferrer"
				>
					{" "}
					CV{" "}
				</a>
				to know more.
			</p>
			<br />
			<p>
				This site is a brain dump of everything I've learned from being
				a software developer for the last 7 years. Check out the
				<a href="./hireme"> Hire Me</a> page if you want to know more
				about my work or to explore the possibility of working together.
			</p>
		</>
	);
};

export default Home;
