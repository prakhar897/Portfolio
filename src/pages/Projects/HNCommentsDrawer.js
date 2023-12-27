import React from "react";

const HNCommentsDrawer = () => {
    return (
        <>
            <h1>HN Comments Drawer</h1>

            <h6>
                <i> 21 Nov 2023 </i>
            </h6>

            <p>
                Integrate Hacker News comments and display them beautifully
                within your websites.
            </p>

            <ul>
                <li>
                    <a
                        href="https://github.com/prakhar897/hn-comments-drawer"
                        target="_blank"
                    >
                        Project Link
                    </a>
                </li>
            </ul>

            <div
                className="hn-comments-drawer"
                hn-story-id="38597301"
                hn-max-depth="10"
            ></div>

            <script src="https://cdn.jsdelivr.net/gh/prakhar897/hn-comments-drawer@latest/src/script.js"></script>
        </>
    );
};

export default HNCommentsDrawer;
