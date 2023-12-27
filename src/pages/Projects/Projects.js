import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";

const Projects = () => {
	return (
		<>
			<Navbar />
			<ul>
				<li>
					<Link to="/projects/li-quoridor">
						Li Quoridor <b>[10 Dec 2023]</b>
					</Link>
				</li>

				<li>
					<Link to="/projects/hn-comments-drawer">
						HN Comments Drawer <b>[21 Nov 2023]</b>
					</Link>
				</li>
				<li>
					<Link to="/projects/cold-message-ai">
						Cold Message AI <b>[08 Sep 2023]</b>
					</Link>
				</li>
				<li>
					<Link to="/projects/workaround-gpt">
						WorkaroundGPT <b>[05 Apr 2023]</b>
					</Link>
				</li>
				<li>
					<Link to="/projects/diffudle">
						Diffudle
						<b>[17 Jan 2023]</b>
					</Link>
				</li>
				<li>
					<Link to="/projects/headline-hero">
						Headline Hero <b>[02 Aug 2020]</b>
					</Link>
				</li>
				<li>
					<Link to="/projects/node-Saas">
						NodeSaas
						<b>[08 Mar 2020]</b>
					</Link>
				</li>
			</ul>
		</>
	);
};

export default Projects;
