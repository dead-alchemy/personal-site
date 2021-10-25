import React, {Component} from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Nav} from "react-bootstrap";
import {Link} from "react-router-dom";

import {getEntries} from "service/service";
import "./blog.scss";

class Blog extends Component {
	state = {entries: []};

	componentDidMount() {
		let entries = getEntries();
		this.setState({entries});
	}

	render() {
		let {entries} = this.state;
		return (
			<div className="blog_container">
				<Container className="pt-3">
					<Row>
						<Col md="auto">
							Welcome to the Blog. Please select a entry you would
							like to read.
						</Col>
						<Col>
							<Nav>
								<ul>
									{entries.map((e, i) => (
										<li key={i + "nav"}>
											<Nav.Item>
												<Nav.Link
													as={Link}
													to={`/blog/${e.date}`}
													//onClick={() => setActiveTab(index)}
												>
													{e.display}
												</Nav.Link>
											</Nav.Item>
										</li>
									))}
								</ul>
							</Nav>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

export default Blog;
