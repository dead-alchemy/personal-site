import React from "react";
import {Container} from "react-bootstrap";
import Initial from "./posts/intial";

const Entries = (props) => {
	let {id} = props.match.params;
	return (
		<div className="blog_container">
			<Container className="pt-3">
				{id === "2021-03-27" && <Initial />}
			</Container>
		</div>
	);
};

export default Entries;
