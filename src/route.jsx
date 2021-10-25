import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "components/pages/home/home";
import About from "components/pages/about/about";
import Blog from "components/pages/blog/blog";
import Naviagation from "components/navbar/naviagation";
import Entries from "components/pages/entries/entries";
import Portfolio from "components/pages/portfolio/portfolio";

const Routes = (props) => {
	return (
		<Router>
			<Naviagation />
			<Route exact path="/" component={Home} />
			<Route exact path="/about" component={About} />
			<Route exact path="/portfolio" component={Portfolio} />
			<Route exact path="/blog/:id" component={Entries} />
			<Route exact path="/blog/" component={Blog} />
		</Router>
	);
};

export default Routes;
