import Head from "next/head";

import {Badge} from "@/components/ui/badge";
import {socialLinks} from "@/lib/social-links";

const tones = ["blue", "green", "gold", "red"];

const skills = [
	"Angular",
	"TypeScript",
	"SQL",
	"ETL Development",
	"SAS",
	"Node",
];

const hobbies = [
	"Fishing",
	"Playing the accordion",
	"Enjoying a video game",
	"Playing with my pets",
	"Traveling",
];

const AboutMe = () => {
	return (
		<>
			<Head>
				<title>About David Nicholas</title>
				<meta property="og:site_name" content="David Nicholas"></meta>
				<link rel="canonical" href="https://www.dnicholas.me"></link>
				<meta name="description" content="About David Nicholas" />
				<meta property="og:title" content="About David Nicholas"></meta>
				<meta property="og:type" content="article"></meta>
				<meta
					property="og:article:published_time"
					content="2022-01-01"
				/>
				<meta property="og:article:author" content="David Nicholas" />
				<meta
					property="og:url"
					content={`https://www.dnicholas.me/aboutme`}
				></meta>
				<meta property="og:locale" content="en_US"></meta>
				<meta name="msapplication-starturl" content="/"></meta>
				<meta name="theme-color" content="#0c457d"></meta>
				<meta name="msapplication-TileColor" content="#0c457d"></meta>
			</Head>

			<div className="mx-auto flex max-w-[720px] flex-col gap-10 px-4 py-12 sm:px-8 sm:py-16">
				<div className="flex flex-col gap-4">
					<h1 className="text-[32px] leading-tight sm:text-[40px]">
						About Me
					</h1>
					<p className="text-lg leading-relaxed text-muted-foreground">
						I am David Nicholas. I am a full stack developer out of
						Salt Lake City, Utah. Married to lovely Liz. I have
						dogs and 2 cats. They are lovely and precious.
					</p>
				</div>

				<div className="flex flex-col gap-4 border-t border-border pt-10">
					<h2 className="text-xl">What I&apos;m proficient at</h2>
					<div className="flex flex-wrap gap-2">
						{skills.map((skill, index) => (
							<Badge key={skill} tone={tones[index % tones.length]}>
								{skill}
							</Badge>
						))}
					</div>
				</div>

				<div className="flex flex-col gap-4 border-t border-border pt-10">
					<h2 className="text-xl">Outside of work</h2>
					<ul className="grid grid-cols-1 gap-2 text-muted-foreground sm:grid-cols-2">
						{hobbies.map((hobby) => (
							<li key={hobby} className="flex items-center gap-2">
								<span className="size-1.5 shrink-0 rounded-full bg-accent" />
								{hobby}
							</li>
						))}
					</ul>
				</div>

				<div className="flex flex-col gap-4 border-t border-border pt-10">
					<p className="text-muted-foreground">
						Be sure to follow me on the social medias. I do not
						support individuals following me around while I am
						about town. Thanks for your understanding.
					</p>
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

				<p className="text-xs text-muted-foreground">
					This blog was built using Next.js. I migrated it from
					React to Next.js.
				</p>
			</div>
		</>
	);
};

export default AboutMe;
