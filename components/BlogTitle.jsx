import {Fragment} from "react";

const BlogTitle = ({title, subHeading = "", dateTime, humanDate}) => {
	return (
		<Fragment>
			<h1>{title}</h1>
			{subHeading ? <h2>{subHeading}</h2> : ""}
			<time itemProp="datePublished" dateTime={dateTime}>
				{humanDate}
			</time>
			<hr />
		</Fragment>
	);
};

export default BlogTitle;
