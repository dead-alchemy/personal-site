import BlogTitle from "./BlogTitle";

const BlogTemplate = ({title, children}) => {
	return (
		<article className="mx-auto w-full max-w-[720px] bg-background px-4 py-12 sm:px-8 sm:py-16">
			{title && <BlogTitle {...title} />}
			<div className="prose prose-neutral mt-8 max-w-none">
				{children}
			</div>
		</article>
	);
};

export default BlogTemplate;
