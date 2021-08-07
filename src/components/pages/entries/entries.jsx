import React from "react";
import {Container} from "react-bootstrap";
import Initial from "./posts/intial";
import HelloPets from "./posts/hello_pets";
import OutridersImpressions from "./posts/outriders_impressions";
import FlowersForMAchines from "./posts/flowers_for_machines";
import OrNotToBe from "./posts/or_not_to_be";

const Entries = (props) => {
	let {id} = props.match.params;
	function blogPost(id) {
		switch (id) {
			case "2021-03-27":
				return <Initial />;
			case "hello_pets":
				return <HelloPets />;
			case "outriders_early":
				return <OutridersImpressions />;
			case "flowers_for_m[A]chines":
				return <FlowersForMAchines />;
			case "or_not_to_[B]e":
				return <OrNotToBe />;
			default:
				return;
		}
	}
	return (
		<div className="blog_container">
			<Container className="pt-3">
				{blogPost(id)}
				<h4>Have a great day!</h4>
			</Container>
		</div>
	);
};

export default Entries;
