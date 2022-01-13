import {useState} from "react";
import Link from "next/link";
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
		<nav className={styles["nav__main"]}>
			<div className={styles["nav__header"]}>D. Nicholas</div>
			<div className={styles["cheveron"]} onClick={buttonClick}>
				<img src="/icons/menu.svg" alt="Menu" />
			</div>
			<div
				className={`${styles["nav__options"]} ${
					!displayMenu
						? styles["display__none"]
						: styles["display__true"]
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
							router.pathname == "/blog" ? styles["active"] : ""
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
				</ul>
			</div>
		</nav>
	);
};

export default Nav;
