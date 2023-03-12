import {Fragment} from "react";
import Head from "next/head";
import styles from "./BlogTitle.module.scss";

const BlogTitle = ({
	title,
	subHeading = "",
	dateTime,
	description,
	humanDate,
	url,
}) => {
	return (
		<Fragment>
			<Head>
				<title>{title}</title>
				<meta property="og:site_name" content="David Nicholas"></meta>
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
				<meta name="theme-color" content="#f2efeaff"></meta>
				<meta name="msapplication-TileColor" content="#f2efeaff"></meta>
			</Head>
			<div className={styles["blog-title"]}>
				<h1>{title}</h1>
				<>{subHeading ? <h2>{subHeading}</h2> : ""}</>
			</div>
			<time itemProp="datePublished" dateTime={dateTime}>
				{humanDate}
			</time>
			<hr />
		</Fragment>
	);
};

export default BlogTitle;
