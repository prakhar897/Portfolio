import Link from "next/link";

const Navbar = () => {
	return (
		<>
			<div className="nav">
				<div className="nav-header">
					<h1 className="name-heading">Prakhar Gupta</h1>
				</div>

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
			</div>
		</>
	);
};

export default Navbar;
