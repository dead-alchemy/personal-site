import React from "react";
import Head from "next/head";
import styles from "../styles/Resume.module.scss";

const Resume = () => {
	return (
		<div className={styles["resume_container"]}>
			<Head>
				<link
					href="https://fonts.googleapis.com/css2?family=Inknut+Antiqua&family=Martel&family=Karma&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<h2>David Nicholas</h2>
			<div className={styles["contact_container"]}>
				<h3>
					<a href="tel:+18013098163">1 (801) 309-8163</a> /{" "}
					<a href="mailto:david@dnicholas.me">david@dnicholas.me</a> /
					Salt Lake City, UT
				</h3>
			</div>

			<div className={styles["aboutme_container"]}>
				<h3>About Me</h3>
				<div className={styles["aboutme__details"]}>
					<div className={styles["aboutme__mission"]}>
						A full stack software developer working to ensure people
						are empowered with data, stability, and choice. Building
						React application to translate data for users so they
						can make meaningful choices.
					</div>
					<div>
						Often working with various databases, api’s, and library
						to bring to life trends that are obfusciated by the
						weight of data.
					</div>
				</div>
			</div>

			<div className={styles["education_container"]}>
				<h3>Education</h3>
				<div className={styles["education_block"]}>
					<h4>Bachelor of Science in Computer Science</h4>
					<h5>Wilmington University</h5>
					<div>2018 - Current</div>
					<div>In Progress</div>
				</div>
			</div>

			<div className={styles["skills_container"]}>
				<h3>Skills</h3>
				<ul className={styles["skills_ul"]}>
					<li>React</li>
					<li>SQL</li>
					<li>NoSQL</li>
					<li>Node</li>
					<li>UI / UX</li>
					<li>Matierial UI</li>
					<li>Cold Fusion</li>
					<li>Bash</li>
					<li>SAS</li>
					<li>Tableau</li>
					<li>Docker</li>
					<li>Bootstrap</li>
				</ul>
			</div>

			<div className={styles["experience_container"]}>
				<h3>Experience</h3>
				<div className={styles["experience__job"]}>
					<h4>Associate Software Developer</h4>
					<div className="italic">
						Discover Financial Services, West Valley, July 2016 -
						Current
					</div>

					<div>
						<p>
							Building new solutions with React, tools, and data
							to help Discover and its employees have access to
							meaningful trends and to assist in their daily
							functions. Automating processes and reports to
							reduce errors, speed up access to data, and save
							time.
						</p>
					</div>
					<div>
						<ul>
							<li>
								Building React applications to assist users in
								whatever project requested.
							</li>
							<li>
								Building visualizations of data across
								environments.
							</li>
							<li>
								Converting legacy application to modern UI and
								technologies.
							</li>
						</ul>
					</div>
				</div>
				<div className={styles["experience__job"]}>
					<h4>Senior Sales Associate</h4>
					<div className="italic">
						Discover Financial Services, West Valley, August 2013 -
						July 2016
					</div>

					<div>
						<p>
							Working with customers to sell Personal Loans.
							Understanding needs and goals to help facilitate a
							program that worked best for them
						</p>
					</div>
					<div>
						<ul>
							<li>Onboarding applicants</li>
							<li>
								Interviewing them to better understand needs
							</li>
							<li>Reviewing data to ensure we could help them</li>
						</ul>
					</div>
				</div>
			</div>

			<div
				itemProp="datePublished"
				dateTime="2022-02-19"
				className={styles["last_updated"]}
			>
				Last Updated 2/19/2022
			</div>
		</div>
	);
};

export default Resume;
