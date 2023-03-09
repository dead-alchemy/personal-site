import Head from "next/head";

import styles from "../styles/Home.module.scss";

export default function Home() {
	return (
		<div className={styles["main"]}>
			<main>
				<div>
					<h1>David Nicholas</h1>
					<h2>Welcome!</h2>
					<h3>
						This is a little site I built for my blog, about me,
						portfolio, and how to get a hold of me.
					</h3>
					<p>
						I am a web developer out of Salt Lake City that
						specializes in React, API's, Tableau, and what ever
						other full stack problems come my way.
					</p>
					<p>
						Feel free to look around, spend some time, or drop a
						line.
					</p>
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
