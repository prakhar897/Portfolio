import Link from "next/link";

const Navbar = () => {
	return (
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
	);
};

export default Navbar;
