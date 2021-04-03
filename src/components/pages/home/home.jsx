import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import "./home.scss";

const Home = () => {
	return (
		<div className="home_container">
			<Container>
				<Row className="m-2">
					<h1>Hello!</h1>
				</Row>
				<Row className="main_home_row"></Row>
				<Row className="m-2">
					<p>
						Welcome to my little site. Here is a collection of my
						blog and writings.
					</p>
				</Row>
			</Container>
		</div>
	);
};

export default Home;
