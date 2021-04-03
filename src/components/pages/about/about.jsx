import React from "react";
import {Container} from "react-bootstrap";
import "./about.scss";

const About = () => {
	return (
		<div className="about_container">
			<Container className="pt-3">
				<p>
					I am David Nicholas. I am a full stack developer out of Salt
					Lake City, Utah. I am engaged to a lovely fiance. I have 3
					dogs and 2 cats. They are lovely and precious.
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
					<li>Beer</li>
				</ul>
				<p>
					Be sure to follow me on the social medias. I do not support
					individuals following me around while I am about town.
					Thanks for your understanding.
				</p>
				<p>
					<a href="https://www.twitch.tv/dead_alchemy">Twitch</a>
				</p>
				<p>
					<a href="https://twitter.com/dlonicholas">Twitter</a>
				</p>
				<p>
					<a href="https://github.com/dead-alchemy">Git-Hub</a>
				</p>
			</Container>
		</div>
	);
};

export default About;
