import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "components/pages/home/home";
import Blog from "components/pages/blog/blog";
import Naviagation from "components/navbar/naviagation";

const Routes = (props) => {
	return (
		<Router>
			<Naviagation />
			<Route exact path="/" component={Home}></Route>
			<Route exact path="/blog" component={Blog}></Route>
		</Router>
	);
};

export default Routes;
