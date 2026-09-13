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
			<nav className={styles["nav__main"]}>
				<div className={styles["nav__header"]}>
					<Link href="/">D Nicholas</Link>
				</div>
				<div className={`${styles["nav__options"]}`}>
					<ul>
						<li
							className={
								router.pathname == "/" ? styles["active"] : ""
							}
						>
							<Link href="/">Home</Link>
						</li>
						<li
							className={
								router.pathname == "/blog"
									? styles["active"]
									: ""
							}
						>
							<Link href="/blog">Blog</Link>
						</li>
						<li
							className={
								router.pathname == "/aboutme"
									? styles["active"]
									: ""
							}
						>
							<Link href="/aboutme">About Me</Link>
						</li>
						<li
							className={
								router.pathname == "/resume"
									? styles["active"]
									: ""
							}
						>
							<Link href="/resume">Resume</Link>
						</li>
					</ul>
				</div>
			</nav>
		</Fragment>
	);
};

export default Nav;
