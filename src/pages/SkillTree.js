import React from "react";
import Navbar from "../components/Navbar";

const SkillTree = () => {
	return (
		<>
			{" "}
			<Navbar />
			<p>
				Here's a rough knowledge graph of myself. Not a complete list,
				still WIP. This more or less helps me realise how hard tech
				actually is and how much you have to learn and let go during the
				years.
			</p>
			<div className="list-container">
				<ul>
					<li>
						Languages
						<ul>
							<li>
								Java
								<ul>
									<li>SpringBoot</li>
									<li>Swing</li>
								</ul>
							</li>
							<li>
								Python
								<ul>
									<li>
										Flask
										<ul>
											<li>PrismaORM</li>
										</ul>
									</li>
									<li>Django</li>
									<li>PySpark</li>
									<li>Pandas</li>
									<li>Numpy</li>
									<li>Matplotlib</li>
									<li>sklearn</li>
									<li>xgboost</li>
								</ul>
							</li>
							<li>
								Javascript
								<ul>
									<li>
										NodeJS
										<ul>
											<li>express</li>
											<li>mongoose</li>
											<li>passport</li>
										</ul>
									</li>
									<li>
										React
										<ul>
											<li>Redux</li>
										</ul>
									</li>
									<li>Vue</li>
									<li>Svelte</li>
								</ul>
							</li>
							<li>
								Go
								<ul>
									<li>Chi Router</li>
									<li>sqlx</li>
									<li>dotenv</li>
								</ul>
							</li>
							<li>C</li>
							<li>HTML</li>
							<li>
								CSS
								<ul>
									<li>Bootstrap</li>
									<li>Semantic UI</li>
									<li>Tailwind</li>
								</ul>
							</li>
							<li>
								Solidity
								<ul>
									<li>Truffle</li>
									<li>Ganache</li>
								</ul>
							</li>
						</ul>
					</li>
					<li>
						Databases
						<ul>
							<li>ElasticSearch</li>
							<li>SQLite</li>
							<li>MySQL</li>
							<li>PostgreSQL</li>
							<li>Redis</li>
							<li>SingleStore</li>
							<li>MongoDB</li>
						</ul>
					</li>
					<li>
						Hosted Cloud Services
						<ul>
							<li>Render</li>
							<li>Vercel</li>
							<li>Supabase</li>
							<li>
								AWS
								<ul>
									<li>S3</li>
									<li>EC2</li>
									<li>DynamoDB</li>
									<li>ElastiCache</li>
									<li>API Gateway</li>
									<li>AWS Lambda</li>
									<li>Step Functions</li>
									<li>IAM</li>
									<li>CloudFront</li>
									<li>CloudWatch</li>
									<li>AWS EMR</li>
									<li>AWS SNS</li>
									<li>AWS SES</li>
								</ul>
							</li>
							<li>
								GCP
								<ul>
									<li>Firestore</li>
									<li>Firebase</li>
								</ul>
							</li>
						</ul>
					</li>
					<li>
						DevOps
						<ul>
							<li>
								Docker
								<ul>
									<li>Docker Compose</li>
								</ul>
							</li>
							<li>Kubernetes</li>
						</ul>
					</li>
					<li>
						Misc Tools
						<ul>
							<li>Git/Github</li>
							<li>Apache Kafka</li>
							<li>Apache Jmeter</li>
						</ul>
					</li>
				</ul>
			</div>
		</>
	);
};

export default SkillTree;
