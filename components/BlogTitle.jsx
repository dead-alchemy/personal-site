import {Fragment} from "react";

import styles from "./BlogTitle.module.scss";

const BlogTitle = ({title, subHeading = "", dateTime, humanDate}) => {
	return (
		<Fragment>
			<div className={styles["blog-title"]}>
				<h1>{title}</h1>
				{subHeading ? <h2>{subHeading}</h2> : ""}
			</div>
			<time itemProp="datePublished" dateTime={dateTime}>
				{humanDate}
			</time>
			<hr />
		</Fragment>
	);
};

export default BlogTitle;
