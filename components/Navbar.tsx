import Link from "next/link";

const Navbar = () => {
	return (
		<>
			<div className="nav">
				<h1 className="name-heading">Prakhar Gupta</h1>
				<Link href="/" className="nav-a">
					Home
				</Link>
				<Link href="/blog" className="nav-a">
					Blog
				</Link>
				<Link href="/projects" className="nav-a">
					Projects
				</Link>
				<Link href="/hireme" className="nav-a">
					Hire Me
				</Link>
			</div>
			<a
				href="https://jsonfixer.com/"
				target="_blank"
				rel="noreferrer"
				className="ml-0 mr-0 font-orbitron border py-4 rounded-2xl grid text-center place-items-center "
			>
				{" "}
				Latest work = JsonFixer{" "}
			</a>
		</>
	);
};

export default Navbar;
