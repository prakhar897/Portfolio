import React from "react";

const Navbar = () => {
    return (
        <div className="nav">
            <h1 className="name-heading"> Prakhar Gupta </h1>

            <a href="../" className="nav-a">
                {" "}
                Home{" "}
            </a>
            <a href="../blog" className="nav-a">
                {" "}
                Blog{" "}
            </a>
            <a href="../projects" className="nav-a">
                {" "}
                Projects{" "}
            </a>
            <a href="../hireme" className="nav-a">
                {" "}
                Hire Me{" "}
            </a>
        </div>
    );
};

export default Navbar;
