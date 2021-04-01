import React from "react";
import {Container} from "react-bootstrap";
import Initial from "./posts/intial";
import HelloPets from "./posts/hello_pets";

const Entries = (props) => {
	let {id} = props.match.params;
	return (
		<div className="blog_container">
			<Container className="pt-3">
				{id === "2021-03-27" && <Initial />}
				{id === "hello_pets" && <HelloPets />}
				<h4>Have a great day!</h4>
			</Container>
		</div>
	);
};

export default Entries;
