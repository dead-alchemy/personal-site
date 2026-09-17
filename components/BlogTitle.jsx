import Head from "next/head";
import Link from "next/link";

import {Badge} from "@/components/ui/badge";
import {ArrowLeftIcon} from "@/components/icons";
import {blogEntries} from "@/pages/blog";

const BlogTitle = ({
	title,
	subHeading = "",
	dateTime,
	description,
	humanDate,
	url,
}) => {
	const entry = blogEntries.find((post) => post.url === url);

	return (
		<>
			<Head>
				<title>{title}</title>
				<meta
					property="og:site_name"
					content={`David Nicholas: ${title}`}
				></meta>
				<link rel="canonical" href="https://www.dnicholas.me"></link>
				<meta name="description" content={description} />
				<meta property="og:title" content={title}></meta>
				<meta property="og:type" content="article"></meta>
				<meta property="og:article:published_time" content={dateTime} />
				<meta property="og:article:author" content="David Nicholas" />
				<meta
					property="og:url"
					content={`https://www.dnicholas.me/blog/${url}`}
				></meta>
				<meta property="og:locale" content="en_US"></meta>
				<meta name="msapplication-starturl" content="/"></meta>
				<meta name="theme-color" content="#0c457d"></meta>
				<meta name="msapplication-TileColor" content="#0c457d"></meta>
			</Head>

			<Link
				href="/blog"
				className="mb-6 inline-flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
			>
				<ArrowLeftIcon className="size-4" />
				Back to blog
			</Link>

			<div className="flex flex-col gap-4 border-b border-border pb-8">
				{entry && <Badge tone={entry.tone}>{entry.category}</Badge>}
				<h1 className="text-[32px] leading-tight sm:text-[40px]">
					{title}
				</h1>
				{subHeading && (
					<p className="max-w-[640px] text-lg leading-relaxed text-muted-foreground">
						{subHeading}
					</p>
				)}
				<time
					itemProp="datePublished"
					dateTime={dateTime}
					className="text-sm text-muted-foreground"
				>
					{humanDate}
				</time>
			</div>
		</>
	);
};

export default BlogTitle;
