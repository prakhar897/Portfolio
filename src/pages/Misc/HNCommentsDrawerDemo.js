import React from "react";

const HNCommentsDrawerDemo = () => {
    return (
        <>
            <h1>Hacker News Comments</h1>

            <h2>Story 1 Comments</h2>

            <div
                className="hn-comments-drawer"
                hn-story-id="38300167"
                hn-max-depth="10"
            ></div>

            <h2>Story 2 Comments</h2>

            <div
                className="hn-comments-drawer"
                hn-story-id="38378455"
                hn-max-depth="10"
            ></div>

            <script src="https://cdn.jsdelivr.net/gh/prakhar897/hn-comments-drawer@latest/src/script.js"></script>
        </>
    );
};

export default HNCommentsDrawerDemo;
