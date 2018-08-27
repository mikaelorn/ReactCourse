import "babel-polyfill";
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { routes } from "./routes";

import RouteWithSubRoutes from "./config/RouteWithSubRoutes";

// Stylesheets
require("../style/index.scss");

const Routes = ({ routes }) => {
	return (
		<div>
			{routes.map((route, i) => (
				<RouteWithSubRoutes key={i} {...route} />
			))}
		</div>
	);
};

const Root = () => (
	<Router>
		<Routes routes={routes} />
	</Router>
);

export default Root;
