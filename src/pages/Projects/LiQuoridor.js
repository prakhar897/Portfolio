import React from "react";
import Navbar from "../../components/Navbar";

const LiQuoridor = () => {
	return (
		<>
			<Navbar />
			<h1>Li Quoridor</h1>

			<h6>
				<i> 10 Dec 2023 </i>
			</h6>

			<p>A freeBoard for the Game "Quoridor".</p>

			<p>
				<ul>
					<li>
						{" "}
						<a
							href="https://li-quoridor.vercel.app/"
							target="_blank"
							rel="noreferrer"
						>
							Project Link
						</a>{" "}
					</li>
					<li>
						{" "}
						<a
							href="https://github.com/prakhar897/li-quoridor"
							target="_blank"
							rel="noreferrer"
						>
							{" "}
							Source Code{" "}
						</a>{" "}
					</li>
				</ul>
			</p>
		</>
	);
};

export default LiQuoridor;
