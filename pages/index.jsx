import Head from "next/head";
import Link from "next/link";

import {Button} from "@/components/ui/button";
import {Badge} from "@/components/ui/badge";
import PostCard from "@/components/PostCard";
import {ArrowRightIcon} from "@/components/icons";
import {socialLinks} from "@/lib/social-links";
import {blogEntries} from "@/pages/blog";

const skills = [
	{label: "Angular", tone: "red"},
	{label: "TypeScript", tone: "blue"},
	{label: "ETL Development", tone: "gold"},
	{label: "SQL", tone: "green"},
];

const latestPosts = blogEntries.slice(0, 3);

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
							I&apos;m a full stack developer out of Salt Lake
							City building responsive, user-focused
							applications with Angular and React — backed by
							strong data engineering and ETL pipeline
							experience. I write about code, UX, and whatever
							else is on my mind, plus the occasional game
							review.
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
								<PostCard key={post.url} {...post} />
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
