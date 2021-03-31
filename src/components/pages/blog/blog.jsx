import React, {Component} from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Nav} from "react-bootstrap";
import {Link} from "react-router-dom";

import {getEntries} from "service/service";

class Blog extends Component {
	state = {entries: []};

	componentDidMount() {
		let entries = getEntries();
		this.setState({entries});
	}
	render() {
		let {entries} = this.state;
		return (
			<div>
				<Container>
					<Row>
						<Col md="auto">
							Welcome to the Blog. Please select a entry you would
							like to read.
						</Col>
						<Col>
							<Nav>
								{entries.map((e, i) => (
									<Nav.Item key={i + "nav"}>
										<Nav.Link
											as={Link}
											to={`/blog/${e.date}`}
											//onClick={() => setActiveTab(index)}
										>
											{e.display}
										</Nav.Link>
									</Nav.Item>
								))}
							</Nav>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

export default Blog;
