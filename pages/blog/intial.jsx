import styles from "../../styles/blog.module.scss";

const initial = () => {
	return (
		<article className={styles["article"]}>
			<h1>Hola.</h1>
			<time itemProp="datePublished" dateTime="2021-03-30">
				March 30th, 2021
			</time>
			<p>
				This little blog post is to just make sure that all the
				infastrucure I have built is working corretly on this site. It's
				not really much, but it's mine. I was thinking what was the best
				way to build this but eventually took the easy route. I should
				have set up an api. I should have made this a stand alone react
				app. However, for this purpose, simple is fine.
			</p>
			<p>
				I have found that even small mistakes while initially creating
				an enviorment will eventually cause many headaches down the
				line. Taking days or weeks to create the proper enviorment for
				the use case will save headache down the line. Building things
				quickly can be imperative to hit deadlines. Building things
				correctly will save costs when it is time to rewrite the whole
				stack due to persitent design issues.
			</p>
			<p>
				I am sure I am going to rebuild this at one point, however I
				would like to have a post today instead of never.
			</p>
		</article>
	);
};

export default initial;
