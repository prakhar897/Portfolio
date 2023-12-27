import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<div className="nav">
			<h1 className="name-heading"> Prakhar Gupta </h1>

			<Link to="/" className="nav-a">
				Home
			</Link>
			<Link to="/blog" className="nav-a">
				Blog
			</Link>
			<Link to="/projects" className="nav-a">
				Projects
			</Link>
			<Link to="/hireme" className="nav-a">
				Hire Me
			</Link>
		</div>
	);
};

export default Navbar;
