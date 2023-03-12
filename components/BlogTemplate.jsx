import BlogTitle from "./BlogTitle";
import styles from "../styles/blog.module.scss";

const BlogTemplate = (props) => {
	return (
		<article className={styles["article"]}>
			{props.title && <BlogTitle {...props.title} />}
			{props.children}
		</article>
	);
};

export default BlogTemplate;
