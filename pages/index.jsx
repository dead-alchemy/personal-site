import Head from "next/head";
import Link from "next/link";

import {Button} from "@/components/ui/button";
import {ArrowRightIcon} from "@/components/icons";
import {socialLinks} from "@/lib/social-links";
import {cn} from "@/lib/utils";

const skills = [
	{label: "React", tone: "red"},
	{label: "SQL", tone: "blue"},
	{label: "Tableau", tone: "gold"},
	{label: "Node", tone: "green"},
];

const latestPosts = [
	{
		category: "UX",
		tone: "blue",
		title: "How Hicks and Fitts Law Drive User Experiences",
		description:
			"How to build and manage user interfaces when building applications for our customers and users.",
		date: "July 29, 2023",
		url: "hicks_vs_fitts_law",
	},
	{
		category: "Culture",
		tone: "red",
		title: "Bad Users Toxic Users",
		description:
			"How to manage relationships and set expectations with our hardest users.",
		date: "May 29, 2023",
		url: "bad_users_toxic_users",
	},
	{
		category: "Life",
		tone: "gold",
		title: "ADHD In the Office",
		description:
			"How I manage to stay productive in very different locations with ADHD.",
		date: "May 21, 2023",
		url: "adhd_in_the_office",
	},
];

const badgeTone = {
	blue: "bg-badge-blue text-badge-blue-foreground",
	green: "bg-badge-green text-badge-green-foreground",
	gold: "bg-badge-gold text-badge-gold-foreground",
	red: "bg-badge-red text-badge-red-foreground",
};

const Badge = ({tone, children}) => (
	<span
		className={cn(
			"inline-flex h-6 items-center whitespace-nowrap rounded-full px-2.5 text-xs font-bold",
			badgeTone[tone]
		)}
	>
		{children}
	</span>
);

export default function Home() {
	return (
		<>
			<Head>
				<title>David Nicholas</title>
				<meta
					name="description"
					content="The personal website of David Nicholas"
				/>
				<meta property="og:title" content="David Nicholas"></meta>
				<meta property="og:type" content="website"></meta>
				<meta
					property="og:url"
					content="https://www.dnicholas.me"
				></meta>
				<meta property="og:site_name" content="David Nicholas"></meta>
				<meta property="og:locale" content="en_US"></meta>
				<link rel="canonical" href="https://www.dnicholas.me"></link>
				<meta name="msapplication-starturl" content="/"></meta>
				<meta name="theme-color" content="#0c457d"></meta>
				<meta name="msapplication-TileColor" content="#0c457d"></meta>
			</Head>

			<div className="flex min-h-[calc(100vh-72px)] w-full flex-col bg-background">
				<section className="w-full px-4 py-16 sm:px-8 sm:py-24">
					<div className="mx-auto flex max-w-[720px] flex-col items-start gap-6">
						<Badge tone="blue">
							Senior Software Developer · Salt Lake City, UT
						</Badge>
						<h1 className="text-[40px] leading-[1.1] sm:text-[56px]">
							David Nicholas
						</h1>
						<p className="max-w-[560px] text-lg leading-relaxed text-muted-foreground">
							I&apos;m a full stack web developer out of Salt Lake
							City who specializes in React, APIs, and Tableau —
							plus whatever other full stack problems come my way.
							I write about code, UX, and whatever else is on my
							mind, plus the occasional game review.
						</p>
						<div className="flex flex-wrap gap-3 pt-2">
							<Button asChild size="lg">
								<Link href="/blog">Read the blog</Link>
							</Button>
							<Button asChild variant="outline" size="lg">
								<Link href="/aboutme">About me</Link>
							</Button>
						</div>
						<div className="flex w-full flex-wrap gap-2 border-t border-border pt-6">
							{skills.map(({label, tone}) => (
								<Badge key={label} tone={tone}>
									{label}
								</Badge>
							))}
						</div>
					</div>
				</section>

				<section className="w-full bg-muted px-4 py-12 sm:px-8 sm:py-16">
					<div className="mx-auto flex max-w-[1120px] flex-col gap-8">
						<div className="flex items-baseline justify-between gap-4">
							<h2 className="text-2xl sm:text-[28px]">
								Latest from the blog
							</h2>
							<Link
								href="/blog"
								className="group flex items-center gap-1 text-sm font-bold text-primary"
							>
								View all posts
								<ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-0.5" />
							</Link>
						</div>

						<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
							{latestPosts.map((post) => (
								<Link
									key={post.url}
									href={`/blog/${post.url}`}
									className="group flex flex-col gap-3.5 rounded-[14px] border border-border bg-card p-6 transition-colors hover:border-muted-foreground/40"
								>
									<Badge tone={post.tone}>{post.category}</Badge>
									<h3 className="text-lg leading-snug">
										{post.title}
									</h3>
									<p className="flex-1 text-sm leading-relaxed text-muted-foreground">
										{post.description}
									</p>
									<div className="flex items-center justify-between border-t border-border pt-3">
										<span className="text-[13px] text-muted-foreground">
											{post.date}
										</span>
										<span className="flex items-center gap-1 text-[13px] font-bold text-primary">
											Read post
											<ArrowRightIcon className="size-3.5 transition-transform group-hover:translate-x-0.5" />
										</span>
									</div>
								</Link>
							))}
						</div>
					</div>
				</section>

				<footer className="mt-auto w-full border-t border-border px-4 py-8 sm:px-8">
					<div className="mx-auto flex max-w-[1120px] flex-wrap items-center justify-between gap-4">
						<span className="text-sm text-muted-foreground">
							David Nicholas — Salt Lake City, UT
						</span>
						<div className="flex items-center gap-1">
							{socialLinks.map(({href, label, Icon}) => (
								<a
									key={href}
									href={href}
									target="_blank"
									rel="noreferrer"
									aria-label={label}
									className="flex size-11 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
								>
									<Icon width="18" height="18" />
								</a>
							))}
						</div>
					</div>
					<div className="mx-auto mt-4 max-w-[1120px] text-xs text-muted-foreground">
						© 2026 David Nicholas.
					</div>
				</footer>
			</div>
		</>
	);
}
