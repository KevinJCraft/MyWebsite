import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import ContactMe from "./ContactMe";
import Projects from "./Projects";
import Resume from "./Resume";
import Nav from "./Nav";

import { MenuContext } from "../Context/MenuContext";

const MyWebsite = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<Router>
			<MenuContext.Provider value={{ isMenuOpen, setIsMenuOpen }}>
				<Nav />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/About" exact component={About} />
					<Route path="/Projects" exact component={Projects} />
					<Route path="/Resume" exact component={Resume} />
					<Route path="/ContactMe" exact component={ContactMe} />
				</Switch>
			</MenuContext.Provider>
		</Router>
	);
};

export default MyWebsite;
