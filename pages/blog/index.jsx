import Link from "next/link";

import styles from "../../styles/blog.module.scss";

const Home = () => {
	let entries = [
		{date: "3/30/2021", display: "Inital Blog Post", url: "intial"},
		{date: "3/31/2021", display: "Meet My Pets", url: "hello_pets"},
		{
			date: "4/2/2021",
			display: "Outriders Early Impressions",
			url: "outriders_impressions",
		},
		{
			date: "8/1/2021",
			display: "NieR: Automata Part 1",
			url: "flowers_for_machines",
		},
		{
			date: "8/7/2021",
			display: "NieR: Automata Part 2",
			url: "meaningless_code",
		},
		{
			date: "10/24/2021",
			display: "NieR: Automata Part 3",
			url: "or_not_to_be",
		},
		//{date: "chil[D]hood's end", display: "NieR: Automata Part 4"},
		//{date: "the [E]nd of yorha", display: "NieR: Automata Part 5"},
	];

	return (
		<div className={styles["article"]}>
			<div>Hi. These are my blog posts</div>
			<table className={styles["blog_table"]}>
				<thead>
					<tr>
						<td>Blog Name</td>
						<td>Date Published</td>
					</tr>
				</thead>
				<tbody>
					{entries.map((e) => (
						<tr>
							<td>
								<Link href={`/blog/${e.url}`}>
									<a>{e.display}</a>
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
