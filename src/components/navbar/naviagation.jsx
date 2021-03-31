import React, {useState} from "react";
import {Navbar, Nav} from "react-bootstrap";
import {Link} from "react-router-dom";

const Naviagation = () => {
	const tabs = [
		{href: "/", display: "Home"},
		{href: "/blog", display: "Blog"},
		{href: "/about", display: "About Me"},
		//{href: "/tools", display: "Tools"},
	];
	const [activeTab, setActiveTab] = useState(0);

	return (
		<Navbar bg="dark" variant="dark" id="mainNav" expand={"sm"}>
			<Navbar.Brand>D Nicholas</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav>
					{tabs.map((t, index) => (
						<Nav.Item key={index + "nav"}>
							<Nav.Link
								active={activeTab === index}
								as={Link}
								to={t.href}
								onClick={() => setActiveTab(index)}
							>
								{t.display}
							</Nav.Link>
						</Nav.Item>
					))}
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default Naviagation;
