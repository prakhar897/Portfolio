import React from "react";

const Home = () => {
    return (
        <>
            {" "}
            <Navbar />
            <p>
                Hi, I'm Prakhar, a Full Stack Developer who focuses on building
                and deploying web apps. In the initial years, I learnt how to
                create systems that are highly scalable, can handle heavy load
                and are highly resilient. After years of sticking just to the
                tech side of things, I started taking bigger roles which
                included coming up with product initiatives to bring in more
                business for the product.
                <br />
                <br />
                This site is a brain dump of everything I've learned from being
                a software developer for the last 7 years. Check out the
                <a href="./hireme">Hire Me</a> page if you want to know more
                about my work or to explore the possibility of working together.
            </p>
            <h2 style="text-align: center">Profiles</h2>
            <div className="list-container">
                <ul>
                    <li>
                        <a href="https://github.com/prakhar897"> Github </a>
                    </li>
                    <li>
                        <a href="https://linkedin.com/in/prakhar897">
                            {" "}
                            LinkedIn{" "}
                        </a>
                    </li>
                    <li>
                        <a href="https://stackoverflow.com/users/7293918/p-gupta">
                            StackOverflow
                        </a>
                    </li>
                    <li>
                        <a href="https://codeforces.com/profile/prakhar897">
                            Codeforces
                        </a>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Home;
