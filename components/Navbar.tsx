import Link from "next/link";

const Navbar = () => {
	return (
		<>
			<div className="nav">
				<div className="nav-header">
					<h1 className="name-heading">Prakhar Gupta</h1>
				</div>

				<Link href="/" className="nav-a">
					Home
				</Link>
				<Link href="/blog" className="nav-a">
					Blog
				</Link>
				<Link href="/projects" className="nav-a">
					Projects
				</Link>
			</div>
		</>
	);
};

export default Navbar;
