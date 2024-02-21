import React from "react";
import Head from "next/head";
import styles from "../styles/Resume.module.scss";

const Resume = () => {
	return (
		<>
			<Head>
				<title>David Nicholas: Resume</title>
				<meta property="og:site_name" content="David Nicholas"></meta>
				<link rel="canonical" href="https://www.dnicholas.me"></link>
				<meta name="description" content="David Nicholas: Resume" />
				<meta
					property="og:title"
					content="David Nicholas: Resume"
				></meta>
				<meta property="og:type" content="article"></meta>
				<meta
					property="og:article:published_time"
					content="2022-01-01"
				/>
				<meta property="og:article:author" content="David Nicholas" />
				<meta
					property="og:url"
					content={`https://www.dnicholas.me/resume`}
				></meta>
				<meta property="og:locale" content="en_US"></meta>
				<meta name="msapplication-starturl" content="/"></meta>
				<meta name="theme-color" content="#f2efeaff"></meta>
				<meta name="msapplication-TileColor" content="#f2efeaff"></meta>
			</Head>
			<div className={styles["resume_container"]}>
				<h2>David Nicholas</h2>
				<div className={styles["contact_container"]}>
					<h3>
						<a href="tel:+18013098163">1 (801) 309-8163</a> /{" "}
						<a href="mailto:david@dnicholas.me">
							david@dnicholas.me
						</a>{" "}
						/ Salt Lake City, UT
					</h3>
				</div>

				<div className={styles["aboutme_container"]}>
					<h3>About Me</h3>
					<div className={styles["aboutme__details"]}>
						<div className={styles["aboutme__mission"]}>
							A full stack software developer working to ensure
							people are empowered with data, stability, and
							choice. Building React applications to translate
							data for users so they can make meaningful choices.
						</div>
						<div>
							Often working with various databases, api’s, and
							libraries to bring to life trends that are
							obfusciated by the weight of data.
						</div>
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
						<h4>Senior Software Developer</h4>
						<div className="italic">
							Discover Financial Services, West Valley, July 2016
							- Current
						</div>

						<div>
							<p>
								Building new solutions with React, tools, and
								data to help Discover and its employees have
								access to meaningful trends and to assist in
								their daily functions. Automating processes and
								reports to reduce errors, speed up access to
								data, and save time.
							</p>
						</div>
						<div>
							<ul>
								<li>
									Building React applications to assist users
									in whatever project requested.
								</li>
								<li>
									Building visualizations of data across
									environments.
								</li>
								<li>
									Converting legacy application to modern UI
									and technologies.
								</li>
							</ul>
						</div>
					</div>
					<div className={styles["experience__job"]}>
						<h4>Senior Sales Associate</h4>
						<div className="italic">
							Discover Financial Services, West Valley, August
							2013 - July 2016
						</div>

						<div>
							<p>
								Working with customers to sell Personal Loans.
								Understanding needs and goals to help facilitate
								a program that worked best for them
							</p>
						</div>
						<div>
							<ul>
								<li>Onboarding applicants</li>
								<li>
									Interviewing them to better understand needs
								</li>
								<li>
									Reviewing data to ensure we could help them
								</li>
							</ul>
						</div>
					</div>
				</div>

				<div className={styles["education_container"]}>
					<h3>Education</h3>
					<div className={styles["education_block"]}>
						<h4>Bachelor of Science in Computer Science</h4>
						<h5>Wilmington University</h5>
					</div>
				</div>
				<div
					itemProp="datePublished"
					dateTime="2022-02-19"
					className={styles["last_updated"]}
				>
					Last Updated 2/21/2024
				</div>
			</div>
		</>
	);
};

export default Resume;
