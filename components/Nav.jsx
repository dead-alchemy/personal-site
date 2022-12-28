import {Fragment, useState} from "react";
import Link from "next/link";
import Head from "next/head";
import {useRouter} from "next/router";

import styles from "./Nav.module.scss";

const Nav = () => {
	const [displayMenu, setDisplayMenu] = useState(false);

	const router = useRouter();

	const buttonClick = () => {
		setDisplayMenu((prevState) => {
			return !prevState;
		});
	};

	return (
		<Fragment>
			<Head>
				<link
					href="https://fonts.googleapis.com/css2?family=Inknut+Antiqua&family=Martel&family=Karma&display=swap"
					rel="stylesheet"
				/>
				<title>D. Nicholas</title>
				<meta
					name="description"
					content="The personal website of David Nicholas"
				/>
			</Head>
			<nav className={styles["nav__main"]}>
				<div className={styles["nav__header"]}>D. Nicholas</div>
				<div className={styles["cheveron"]} onClick={buttonClick}>
					<img src="/icons/menu.svg" alt="Menu" />
				</div>
				<div
					className={`${styles["nav__options"]} ${
						!displayMenu
							? styles["display__true"]
							: styles["display__none"]
					}`}
				>
					<ul>
						<li
							className={
								router.pathname == "/" ? styles["active"] : ""
							}
						>
							<Link href="/">
								<a>Home</a>
							</Link>
						</li>
						<li
							className={
								router.pathname == "/blog"
									? styles["active"]
									: ""
							}
						>
							<Link href="/blog">
								<a>Blog</a>
							</Link>
						</li>
						<li
							className={
								router.pathname == "/aboutme"
									? styles["active"]
									: ""
							}
						>
							<Link href="/aboutme">
								<a>About Me</a>
							</Link>
						</li>
						<li
							className={
								router.pathname == "/resume"
									? styles["active"]
									: ""
							}
						>
							<Link href="/resume">
								<a>Resume</a>
							</Link>
						</li>
					</ul>
				</div>
				<div className={styles["nav__options2"]}>
					<ul>
						<li
							className={
								router.pathname == "/" ? styles["active"] : ""
							}
						>
							<Link href="/">
								<a>Home</a>
							</Link>
						</li>
						<li
							className={
								router.pathname == "/blog"
									? styles["active"]
									: ""
							}
						>
							<Link href="/blog">
								<a>Blog</a>
							</Link>
						</li>
						<li
							className={
								router.pathname == "/aboutme"
									? styles["active"]
									: ""
							}
						>
							<Link href="/aboutme">
								<a>About Me</a>
							</Link>
						</li>
						<li
							className={
								router.pathname == "/resume"
									? styles["active"]
									: ""
							}
						>
							<Link href="/resume">
								<a>Resume</a>
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		</Fragment>
	);
};

export default Nav;
