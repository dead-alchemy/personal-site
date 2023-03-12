import Link from "next/link";

import styles from "../../styles/blog.module.scss";

const Home = () => {
	const entries = [
		{
			date: "3/11/2023",
			display: "Magic: My Favorite App",
			description: "An Essay I wrote about my favorite app Magic: Arena",
			url: "magic_my_favorite_app",
		},
		{
			date: "1/31/2023",
			display: "How to Build a Twitter Bot",
			description:
				"This is how to build a twitter bot using Node.JS and Netlify.",
			url: "build_twitter_bot",
		},
		{
			date: "12/28/2022",
			display: "Jorge Ortega's Eulogy",
			url: "jorge_ortega_eulogy",
		},
		{
			date: "10/24/2021",
			display: "NieR: Automata Part 3",
			url: "or_not_to_be",
		},
		{
			date: "8/7/2021",
			display: "NieR: Automata Part 2",
			url: "meaningless_code",
		},
		{
			date: "8/1/2021",
			display: "NieR: Automata Part 1",
			url: "flowers_for_machines",
		},
		{
			date: "4/2/2021",
			display: "Outriders Early Impressions",
			url: "outriders_impressions",
		},
		{date: "3/31/2021", display: "Meet My Pets", url: "hello_pets"},
		//{date: "chil[D]hood&apos;s end", display: "NieR: Automata Part 4"},
		//{date: "the [E]nd of yorha", display: "NieR: Automata Part 5"},
	];

	return (
		<div className={styles["article"]}>
			<div>
				My Most Recent Blog is{" "}
				<Link href={`/blog/${entries[0].url}`}>
					<a className={styles["blog_link"]}>{entries[0].display}</a>
				</Link>
				<br />
				{entries[0].description}
			</div>

			<table className={styles["blog_table"]}>
				<thead>
					<tr>
						<td>Blog Name</td>
						<td>Date Published</td>
					</tr>
				</thead>
				<tbody>
					{entries.map((e) => (
						<tr key={e.display}>
							<td>
								<Link href={`/blog/${e.url}`}>
									<a className={styles["blog_link"]}>
										{e.display}
									</a>
								</Link>
							</td>
							<td>{e.date}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Home;
