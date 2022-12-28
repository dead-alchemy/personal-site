import {Fragment} from "react";

const BlogTitle = ({title, subHeading, dateTime, humanDate}) => {
	return (
		<Fragment>
			<h1>{title}</h1>
			<h2>{subHeading}</h2>
			<time itemProp="datePublished" dateTime={dateTime}>
				{humanDate}
			</time>
		</Fragment>
	);
};

export default BlogTitle;
