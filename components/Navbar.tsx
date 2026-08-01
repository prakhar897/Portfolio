"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type BlueprintTheme = "day" | "night";

const THEME_STORAGE_KEY = "blueprint-theme";

const Navbar = () => {
	const [theme, setTheme] = useState<BlueprintTheme>("day");

	useEffect(() => {
		const savedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);

		if (savedTheme === "day" || savedTheme === "night") {
			setTheme(savedTheme);
			document.documentElement.dataset.blueprintTheme = savedTheme;
		}
	}, []);

	const toggleTheme = () => {
		const nextTheme = theme === "day" ? "night" : "day";

		setTheme(nextTheme);
		document.documentElement.dataset.blueprintTheme = nextTheme;
		window.localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
	};

	return (
		<>
			<div className="nav">
				<div className="nav-header">
					<h1 className="name-heading">Prakhar Gupta</h1>
				</div>

				<div className="nav-row">
					<div className="nav-links">
						<Link href="/" className="nav-a">
							Home
						</Link>
						<Link href="/blog" className="nav-a">
							Blog
						</Link>
						<Link href="/projects" className="nav-a">
							Projects
						</Link>
						<Link href="/talk-to-me" className="nav-a">
							Talk to me
						</Link>
					</div>

					<button
						type="button"
						className="theme-toggle"
						aria-label={`Switch to ${theme === "day" ? "night" : "day"} mode`}
						aria-pressed={theme === "night"}
						onClick={toggleTheme}
					>
						<span className="theme-toggle-track" aria-hidden="true">
							<span className="theme-toggle-thumb">
								{theme === "day" ? "☀" : "☾"}
							</span>
						</span>
						<span className="theme-toggle-label">
							{theme === "day" ? "Day" : "Night"}
						</span>
					</button>
				</div>
			</div>
		</>
	);
};

export default Navbar;
