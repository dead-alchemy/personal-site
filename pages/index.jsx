import Head from "next/head";

import styles from "../styles/Home.module.scss";

export default function Home() {
	return (
		<div className={styles["main"]}>
			<Head>
				<title>D. Nicholas</title>
				<meta
					name="description"
					content="The personal website of David Nicholas"
				/>
			</Head>
			<main>
				<div>
					<h1>The Personal Site of David Nicholas</h1>
					<h2>
						Hello and welcome! This is a little site I built for my
						blog, about me, portfolio, and how to get a hold of me.
					</h2>
				</div>

				<div className={styles["contact__info"]}>
					<p>
						<a href="https://twitter.com/dlonicholas">
							<img src="/icons/twitter.svg" alt="Twitter Logo" />
							Twitter
						</a>
					</p>
					<p>
						<img src="/icons/github.svg" alt="Github Logo" />
						<a href="https://github.com/dead-alchemy">Git-Hub</a>
					</p>
				</div>
			</main>
		</div>
	);
}
