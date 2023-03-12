import BlogTitle from "./BlogTitle";
import styles from "../styles/blog.module.scss";

const BlogTemplate = (props) => {
	return (
		<article className={styles["article"]}>
			{props.title && (
				<BlogTitle
					title={props.title.title}
					subHeading={props.title.subHeading}
					dateTime={props.title.dateTime}
					humanDate={props.title.humanDate}
				/>
			)}
			{props.children}
		</article>
	);
};

export default BlogTemplate;
