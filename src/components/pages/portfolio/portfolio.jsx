import React from "react";

import "./portfolio.scss";

const Portfolio = () => {
	return (
		<article className="portfolio_container">
			<section>
				Here are a couple of personal projects I have worked on:
			</section>

			<section>
				<div>
					<a
						href="https://daystohalloween.com"
						target="_blank"
						rel="noreferrer"
					>
						Days to Halloween
					</a>
				</div>
				<div>
					<p>
						Here I made a basic webpage where it count downs the
						days to halloween. I streamed building this webpage for
						others to gain learn something regarding the date
						javascript object.
					</p>
				</div>
			</section>
		</article>
	);
};

export default Portfolio;
