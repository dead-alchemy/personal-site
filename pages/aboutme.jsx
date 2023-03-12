import styles from "../styles/aboutme.module.scss";
import Head from "next/head";

const AboutMe = () => {
	return (
		<>
			<Head>
				<title>About David Nicholas</title>
				<meta property="og:site_name" content="David Nicholas"></meta>
				<link rel="canonical" href="https://www.dnicholas.me"></link>
				<meta name="description" content="About David Nicholas" />
				<meta property="og:title" content="About David Nicholas"></meta>
				<meta property="og:type" content="article"></meta>
				<meta
					property="og:article:published_time"
					content="2022-01-01"
				/>
				<meta property="og:article:author" content="David Nicholas" />
				<meta
					property="og:url"
					content={`https://www.dnicholas.me/aboutme`}
				></meta>
				<meta property="og:locale" content="en_US"></meta>
				<meta name="msapplication-starturl" content="/"></meta>
				<meta name="theme-color" content="#f2efeaff"></meta>
				<meta name="msapplication-TileColor" content="#f2efeaff"></meta>
			</Head>
			<div className={styles["about_container"]}>
				<p>
					I am David Nicholas. I am a full stack developer out of Salt
					Lake City, Utah. Married to lovely Liz. I have dogs and 2
					cats. They are lovely and precious.
				</p>
				<p>Things I am proficent at in my job include</p>
				<ul>
					<li>SQL</li>
					<li>SAS</li>
					<li>JavaScript</li>
					<li>Teradata</li>
					<li>React</li>
					<li>ColdFusion (RIP)</li>
				</ul>
				<p>The things I enjoy doing outside of work include:</p>
				<ul>
					<li>Fishing</li>
					<li>Playing the accordion</li>
					<li>Enjoying a Video Game</li>
					<li>Playing with my pets</li>
					<li>Traveling</li>
				</ul>
				<p>
					Be sure to follow me on the social medias. I do not support
					individuals following me around while I am about town.
					Thanks for your understanding.
				</p>
				<p>
					This blog was built using Next JS. I migrated it from React
					to Next JS.
				</p>
			</div>
		</>
	);
};

export default AboutMe;
