import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./MyWebsite.css";
import Home from "../Home";
import AboutMe from "../AboutMe";
import ContactMe from "../ContactMe";
import Projects from "../Projects";
import NoPath from "../NoPath";

import Nav from "../Nav";
import Footer from "../Footer";

import { MenuContext } from "../../Context/MenuContext";

const MyWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Router>
      <div className="background"></div>
      <MenuContext.Provider value={{ isMenuOpen, setIsMenuOpen }}>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/About" exact component={AboutMe} />
          <Route path="/Projects" exact component={Projects} />
          <Route path="/ContactMe" exact component={ContactMe} />
          <Route path="*" component={NoPath} />
        </Switch>
        <Footer />
      </MenuContext.Provider>
    </Router>
  );
};

export default MyWebsite;
