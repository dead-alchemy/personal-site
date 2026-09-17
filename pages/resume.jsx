import Head from "next/head";

import {Badge} from "@/components/ui/badge";

const tones = ["blue", "green", "gold", "red"];

const skills = [
	"Angular",
	"React",
	"TypeScript",
	"JavaScript",
	"SQL",
	"NoSQL",
	"Node",
	"Jest",
	"UI / UX",
	"Material UI",
	"Bootstrap",
	"ETL Development",
	"SAS",
	"Tableau",
	"Jenkins",
	"Docker",
	"Bash",
	"AI-assisted development (Claude)",
];

const jobs = [
	{
		title: "Senior Software Developer",
		company: "Capital One",
		companyNote: "formerly Discover Financial Services, acquired 2025",
		location: "West Valley, UT",
		dates: "July 2016 – Current",
		highlights: [
			"Led the Discover-to-Capital One hierarchy data integration (Apr 2025 – Feb 2026); solely responsible for designing and executing the queries and ETL pipelines that migrated and fed hierarchy data to 7 downstream teams, including 4 critical reporting systems.",
			"Built an AI-assisted shared component library (Calendar, Table, and other reusable UI components) adopted by 2 teams (26 developers combined), cutting initial component delivery time by roughly 33–50%.",
			"Building Angular (previously React) applications to give Capital One/Discover employees access to meaningful data trends and support daily operational functions.",
			"Converting legacy applications to modern UI and technologies.",
		],
	},
	{
		title: "Senior Sales Associate",
		company: "Discover Financial Services",
		location: "West Valley",
		dates: "August 2013 – July 2016",
		summary:
			"Sold personal loan programs by understanding customer needs and matching them to the right solution — built a foundation in client communication and needs assessment.",
	},
];

const Resume = () => {
	return (
		<>
			<Head>
				<title>David Nicholas: Resume</title>
				<meta property="og:site_name" content="David Nicholas"></meta>
				<link rel="canonical" href="https://www.dnicholas.me"></link>
				<meta name="description" content="David Nicholas: Resume" />
				<meta
					property="og:title"
					content="David Nicholas: Resume"
				></meta>
				<meta property="og:type" content="article"></meta>
				<meta
					property="og:article:published_time"
					content="2022-01-01"
				/>
				<meta property="og:article:author" content="David Nicholas" />
				<meta
					property="og:url"
					content={`https://www.dnicholas.me/resume`}
				></meta>
				<meta property="og:locale" content="en_US"></meta>
				<meta name="msapplication-starturl" content="/"></meta>
				<meta name="theme-color" content="#0c457d"></meta>
				<meta name="msapplication-TileColor" content="#0c457d"></meta>
			</Head>

			<div className="mx-auto flex max-w-[720px] flex-col gap-10 px-4 py-12 sm:px-8 sm:py-16">
				<div className="flex flex-col gap-2">
					<h1 className="text-[32px] leading-tight sm:text-[40px]">
						David Nicholas
					</h1>
					<div className="flex flex-wrap gap-x-2 gap-y-1 text-sm text-muted-foreground">
						<a
							href="tel:+18013098163"
							className="transition-colors hover:text-foreground"
						>
							1 (801) 309-8163
						</a>
						<span>/</span>
						<a
							href="mailto:david@dnicholas.me"
							className="transition-colors hover:text-foreground"
						>
							david@dnicholas.me
						</a>
						<span>/</span>
						<span>Salt Lake City, UT</span>
					</div>
				</div>

				<div className="flex flex-col gap-4">
					<h2 className="text-xl">About Me</h2>
					<p className="font-semibold italic text-foreground">
						Full stack software developer building responsive,
						user-focused applications with Angular and React,
						backed by strong data engineering skills — including
						designing and executing ETL pipelines that consolidate
						data across systems.
					</p>
					<p className="text-muted-foreground">
						Builds reusable UI component libraries with
						AI-assisted development to help teams ship faster,
						with a focus on turning complex data into clear,
						usable interfaces.
					</p>
				</div>

				<div className="flex flex-col gap-4 border-t border-border pt-10">
					<h2 className="text-xl">Skills</h2>
					<p className="text-sm text-muted-foreground">
						Currently building with Angular; prior professional
						experience with React.
					</p>
					<div className="flex flex-wrap gap-2">
						{skills.map((skill, index) => (
							<Badge key={skill} tone={tones[index % tones.length]}>
								{skill}
							</Badge>
						))}
					</div>
				</div>

				<div className="flex flex-col gap-8 border-t border-border pt-10">
					<h2 className="text-xl">Experience</h2>
					{jobs.map((job) => (
						<div key={job.title} className="flex flex-col gap-3">
							<div>
								<h3 className="text-lg font-semibold">
									{job.title}
								</h3>
								<div className="text-sm italic text-muted-foreground">
									{job.company}
									{job.companyNote && ` (${job.companyNote})`}
									{" — "}
									{job.location} · {job.dates}
								</div>
							</div>
							{job.summary && (
								<p className="text-sm leading-relaxed text-muted-foreground">
									{job.summary}
								</p>
							)}
							{job.highlights && (
								<ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
									{job.highlights.map((highlight) => (
										<li key={highlight}>{highlight}</li>
									))}
								</ul>
							)}
						</div>
					))}
				</div>

				<div className="flex flex-col gap-2 border-t border-border pt-10">
					<h2 className="text-xl">Education</h2>
					<div>
						<h3 className="text-lg font-semibold">
							Bachelor of Science in Software Design and
							Development
						</h3>
						<div className="text-sm text-muted-foreground">
							Wilmington University
						</div>
					</div>
				</div>

				<div
					itemProp="datePublished"
					dateTime="2026-09-17"
					className="text-right text-xs text-muted-foreground"
				>
					Last Updated September 2026
				</div>
			</div>
		</>
	);
};

export default Resume;
