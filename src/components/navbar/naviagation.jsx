import React, {useState} from "react";
import {Navbar, Nav} from "react-bootstrap";
import {NavLink} from "react-router-dom";

const Naviagation = () => {
	const tabs = [
		{href: "/", display: "Home"},
		{href: "/blog", display: "Blog"},
		{href: "/about", display: "About Me"},
		//{href: "/tools", display: "Tools"},
	];

	return (
		<Navbar bg="dark" variant="dark" id="mainNav" expand={"sm"}>
			<Navbar.Brand>D Nicholas</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav>
					{tabs.map((t, index) => (
						<Nav.Item key={index}>
							<Nav.Link
								as={NavLink}
								exact={t.display === "Blog" ? false : true}
								to={t.href}
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
