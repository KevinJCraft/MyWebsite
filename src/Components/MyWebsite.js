import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home.js";
import AboutMe from "./AboutMe.js";
import ContactMe from "./ContactMe.js";
import Projects from "./Projects.js";
import NoPath from "./NoPath.js";
import { Box, CssBaseline } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Nav from "./Nav";

import { MenuContext } from "../Context/MenuContext";
import Header from "./Header.js";
import MenuButton from "./MenuButton.js";

const useStyles = makeStyles((theme) => ({
  layoutContainer: {
    position: "relative",
    top: "-100px",
    width: "95%",
    maxWidth: "1400px",
    minHeight: "100%",
    margin: "auto",
    backgroundColor: "rgb(227,227,227)",
    [theme.breakpoints.up("md")]: {
      top: "-200px",
    },
  },
}));

const MyWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const classes = useStyles();

  return (
    <Router>
      <CssBaseline />
      <MenuContext.Provider value={{ isMenuOpen, setIsMenuOpen }}>
        <Header />
        <MenuButton />
        <Nav />
        <div className="layoutContainer">
          <Box
            className={classes.layoutContainer}
            boxShadow={15}
            borderRadius={5}
          >
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/About" exact component={AboutMe} />
              <Route path="/Projects" exact component={Projects} />
              <Route path="/ContactMe" exact component={ContactMe} />
              <Route path="*" component={NoPath} />
            </Switch>
          </Box>
        </div>
      </MenuContext.Provider>
    </Router>
  );
};

export default MyWebsite;
