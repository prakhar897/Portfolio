import React from "react";
import Navbar from "../../components/Navbar";

const Bookmarks = () => {
    return (
        <>
            <Navbar />

            <h1>Bookmarks</h1>

            <h3> UI Tools</h3>

            <a
                href="https://www.uidesigndaily.com/"
                target="_blank"
                rel="noreferrer"
            >
                https://www.uidesigndaily.com/
            </a>

            <h3> Other </h3>

            <a href="https://sit.sonnet.io/" target="_blank" rel="noreferrer">
                https://sit.sonnet.io/
            </a>

            <a
                href="https://matplotlib.org/stable/gallery/showcase/xkcd.html"
                target="_blank"
                rel="noreferrer"
            >
                XKCD like plots
            </a>

            <a href="https://enso.sonnet.io/" target="_blank" rel="noreferrer">
                https://enso.sonnet.io/
            </a>
        </>
    );
};

export default Bookmarks;
