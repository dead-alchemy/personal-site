import Head from "next/head";

import PostCard from "@/components/PostCard";

export const blogEntries = [
	{
		url: "my_experience_with_fedora",
		title: "Something New, Something Old: Why I Finally Left Windows for Linux",
		description:
			"Why I finally left Windows for Fedora Linux, and how I got everything installed and running.",
		date: "9/18/2026",
		category: "Tech",
		tone: "blue",
	},
	{
		url: "robert_nicholas_eulogy",
		title: "Robert Nicholas's Eulogy",
		description: "The eulogy I wrote for my father, Robert Nicholas.",
		date: "8/16/2026",
		category: "Life",
		tone: "gold",
	},
	{
		url: "raquel_ortega_eulogy",
		title: "Raquel Ortega's Eulogy",
		description: "The eulogy I wrote for my grandmother, Raquel Ortega.",
		date: "8/29/2024",
		category: "Life",
		tone: "gold",
	},
	{
		url: "hicks_vs_fitts_law",
		title: "How Hicks and Fitts Law Drive User Experiences",
		description:
			"How to build and manage user interfaces when building applications for our customers and users.",
		date: "7/29/2023",
		category: "UX",
		tone: "blue",
	},
	{
		url: "bad_users_toxic_users",
		title: "Bad Users Toxic Users",
		description: "Keys to help us navigate hard users.",
		date: "5/29/2023",
		category: "Culture",
		tone: "red",
	},
	{
		url: "adhd_in_the_office",
		title: "ADHD In the Office",
		description:
			"How I manage to stay productive in very different locations with ADHD.",
		date: "5/21/2023",
		category: "Life",
		tone: "gold",
	},
	{
		url: "magic_my_favorite_app",
		title: "Magic: My Favorite App",
		description: "An Essay I wrote about my favorite app Magic: Arena.",
		date: "3/11/2023",
		category: "Gaming",
		tone: "green",
	},
	{
		url: "build_twitter_bot",
		title: "How to Build a Twitter Bot",
		description: "How to build a Twitter bot using Node.js and Netlify.",
		date: "1/31/2023",
		category: "Tutorial",
		tone: "blue",
	},
	{
		url: "jorge_ortega_eulogy",
		title: "Jorge Ortega's Eulogy",
		description: "The eulogy I wrote for Jorge Ortega.",
		date: "12/28/2022",
		category: "Life",
		tone: "gold",
	},
	{
		url: "or_not_to_be",
		title: "NieR: Automata Part 3",
		description: "How can I forget NieR: Automata — Part 3.",
		date: "10/24/2021",
		category: "Reviews",
		tone: "green",
	},
	{
		url: "meaningless_code",
		title: "NieR: Automata Part 2",
		description: "How can I forget NieR: Automata — Part 2.",
		date: "8/7/2021",
		category: "Reviews",
		tone: "green",
	},
	{
		url: "flowers_for_machines",
		title: "NieR: Automata Part 1",
		description: "My play through of NieR: Automata.",
		date: "8/1/2021",
		category: "Reviews",
		tone: "green",
	},
	{
		url: "outriders_impressions",
		title: "Outriders Early Impressions",
		description: "My early impressions of Outriders.",
		date: "4/2/2021",
		category: "Reviews",
		tone: "green",
	},
	{
		url: "hello_pets",
		title: "Meet My Pets",
		description: "All my pets!",
		date: "3/31/2021",
		category: "Life",
		tone: "gold",
	},
];

const Blog = () => {
	return (
		<>
			<Head>
				<title>Blog | David Nicholas</title>
				<meta
					name="description"
					content="Thoughts on code, UX, and whatever else is on my mind — plus the occasional game review."
				/>
				<meta property="og:title" content="Blog | David Nicholas"></meta>
				<meta property="og:type" content="website"></meta>
				<meta
					property="og:url"
					content="https://www.dnicholas.me/blog"
				></meta>
				<meta property="og:site_name" content="David Nicholas"></meta>
				<meta property="og:locale" content="en_US"></meta>
				<link
					rel="canonical"
					href="https://www.dnicholas.me/blog"
				></link>
				<meta name="msapplication-starturl" content="/"></meta>
				<meta name="theme-color" content="#0c457d"></meta>
				<meta name="msapplication-TileColor" content="#0c457d"></meta>
			</Head>

			<div className="w-full bg-background">
				<div className="mx-auto max-w-[1120px] px-4 py-12 sm:px-8 sm:py-16">
					<div className="flex flex-col gap-3 pb-10">
						<h1 className="text-[32px] sm:text-[40px]">Blog</h1>
						<p className="max-w-[560px] text-base leading-relaxed text-muted-foreground">
							Thoughts on code, UX, and whatever else is on my
							mind — plus the occasional game review.
						</p>
					</div>

					<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
						{blogEntries.map((entry) => (
							<PostCard key={entry.url} {...entry} />
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default Blog;
