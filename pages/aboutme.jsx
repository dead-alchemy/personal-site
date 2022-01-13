import styles from "../styles/aboutme.module.scss";

const AboutMe = () => {
	return (
		<div className={styles["about_container"]}>
			<p>
				I am David Nicholas. I am a full stack developer out of Salt
				Lake City, Utah. I am engaged to a lovely fiance. I have 2 dogs
				and 2 cats. They are lovely and precious.
			</p>
			<p>Things I am proficent at in my job include</p>
			<ul>
				<li>SQL</li>
				<li>SAS</li>
				<li>JavaScript</li>
				<li>Teradata</li>
				<li>React</li>
				<li>ColdFusion (RIP)</li>
			</ul>
			<p>The things I enjoy doing outside of work include:</p>
			<ul>
				<li>Fishing</li>
				<li>Playing the accordion</li>
				<li>Enjoying a Video Game</li>
				<li>Playing with my pets</li>
				<li>Traveling</li>
			</ul>
			<p>
				Be sure to follow me on the social medias. I do not support
				individuals following me around while I am about town. Thanks
				for your understanding.
			</p>
			<p>
				This blog was built using Next JS. I migrated it from React to
				Next JS.
			</p>
		</div>
	);
};

export default AboutMe;
