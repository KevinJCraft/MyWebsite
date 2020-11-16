import React from "react";
import { NavLink } from "react-router-dom";

import logo from "../Images/blue-gray-logo2.png";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Divider, Grid, Fade, Box } from "@material-ui/core";
import TextLoop from "react-text-loop";
import FormatQuoteIcon from "@material-ui/icons/FormatQuote";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGitAlt,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  pageContainer: {
    paddingBottom: "3rem",
  },
  logoContainer: {
    width: "95%",
    height: "auto",
    margin: "auto",
    padding: "3rem 1rem 3rem 1rem",
  },
  lazyContainer: {
    position: "relative",
    height: 0,
    paddingBottom: "71%",
  },
  logo: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
  title: {
    padding: "3rem 0",
    height: "2.668rem",
  },
  scrollText: {
    color: "#28208C",
    fontWeight: "bolder",
  },
  Container: {
    padding: "1rem 1rem",
    position: "relative",
  },
  gridItem: {
    [theme.breakpoints.up("md")]: {
      padding: "4rem",
    },
  },
  aboutMeTitle: {
    padding: "1rem 0",
    textTransform: "uppercase",
    color: "#28208C",
    textDecoration: "underline",
  },
  aboutMeText: {},
  quoteBox: {
    padding: "1.5rem 0",
  },
  quoteTextContainer: {
    padding: "1rem 0",
  },
  quoteText: {
    fontSize: "2rem",
    fontStyle: "italic",
    opacity: "0.7",
  },
  openQuoteIcon: {
    opacity: "0.3",
    fontSize: "3rem",
    transform: "scale(-1, 1)",
  },
  closeQuoteIcon: {
    opacity: "0.3",
    fontSize: "3rem",
    position: "absolute",
  },

  skillsIconContainer: {
    fontSize: "3rem",
    marginTop: "3rem",
  },
  mainIcon: {
    fontSize: "6rem",
  },
  skillsText: {
    margin: "2rem auto .5rem ",
    width: "90%",
    minHeight: "3rem",
  },
  actionLink: {
    textDecoration: "none",
  },
  linkText: {
    padding: "1rem",
    fontWeight: "bolder",
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <Fade in={true} timeout={1000}>
      <Grid container className={classes.pageContainer}>
        <Grid
          item
          xs={12}
          container
          justify="center"
          className={classes.logoContainer}
        >
          <Grid xs={12} md={6} item>
            <Box className={classes.lazyContainer}>
              <img src={logo} alt="logo" className={classes.logo} />
            </Box>
            <Typography variant="h5" align="center" className={classes.title}>
              Creating{" "}
              <TextLoop interval={2000}>
                <span className={classes.scrollText}>Easy to Use</span>
                <span className={classes.scrollText}>Bug Free</span>
                <span className={classes.scrollText}>Stylish</span>
              </TextLoop>{" "}
              Web Apps
            </Typography>
          </Grid>
          <Divider variant="middle" />
        </Grid>
        <Grid
          item
          xs={12}
          container
          alignItems="flex-end"
          className={classes.Container}
        >
          <Grid className={classes.gridItem} item xs={12} md={6}>
            <Typography variant="h6" className={classes.aboutMeTitle}>
              A little about me..
            </Typography>
            <Typography className={classes.aboutMeText}>
              I am a Web App Developer for {" "}
              <a href="https://carkeysexpress.com/">Car Keys Express</a> {" "} located in Louisville, Ky. My
              journey towards this career path began with{" "}
              <a href="https://codelouisville.org" target="_bland">
                Code Louisvile
              </a>{" "}
              in August of 2019 and I absolutely love it. With an outgoing and
              dedicated personality, I believe that a person should work on
              developing their professional skills and learn new things all the
              time. My ideal work environment would be a place where I can
              contribute on day one and continue to learn and grow from the
              talented people around me.
            </Typography>
            <Typography className={classes.linkText} align="right">
              <NavLink to="./about" className={classes.actionNavLink}>
                {">>learn more here"}
              </NavLink>
            </Typography>
            <Divider variant="middle" />
          </Grid>
          <Grid className={classes.gridItem} item xs={12} md={6} container>
            <Grid item className={classes.quoteBox}>
              <Box className={classes.quoteTextContainer}>
                <FormatQuoteIcon className={classes.openQuoteIcon} />
                <Typography
                  className={classes.quoteText}
                  variant="body2"
                  display="inline"
                >
                  {"  "}The Web as I envisaged it, we have not seen it yet. The
                  future is still so much bigger than the past.
                </Typography>
                <FormatQuoteIcon className={classes.closeQuoteIcon} />
              </Box>
              <Typography variant="caption" display="block" align="right">
                -
                <a
                  href="https://en.wikipedia.org/wiki/Tim_Berners-Lee"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Tim Berners-Lee
                </a>
              </Typography>

              <Typography
                style={{ paddingBottom: "1rem" }}
                variant="caption"
                display="block"
                align="right"
              >
                <small>Inventor of the World Wide Web</small>
              </Typography>
              <Divider variant="middle" className={classes.divider} />
            </Grid>
          </Grid>
        </Grid>
        <Grid container alignItems="flex-end" className={classes.Container}>
          <Grid item xs={12} md={4}>
            <Grid
              container
              justify="center"
              alignItems="flex-end"
              className={classes.skillsIconContainer}
            >
              <FaHtml5 />
              <DiJavascript1 className={classes.mainIcon} />
              <FaCss3Alt />
            </Grid>
            <Typography align="center" className={classes.skillsText}>
              Firm understanding of HTML5, CSS, CSS variables, and Javascript
              including ES6.
            </Typography>
            <Typography className={classes.linkText} align="right">
              <Link to={"./projects"} className={classes.actionLink}>
                {">>projects"}
              </Link>
            </Typography>
            <Divider variant="middle" />
          </Grid>
          <Grid item xs={12} md={4}>
            <Grid
              container
              justify="center"
              className={classes.skillsIconContainer}
            >
              <FaReact className={classes.mainIcon} />
            </Grid>
            <Typography align="center" className={classes.skillsText}>
              Strong grasp of React, React Router, Functional Components, and
              Hooks.
            </Typography>
            <Typography className={classes.linkText} align="right">
              <Link to={"./projects"} className={classes.actionLink}>
                {">>projects"}
              </Link>
            </Typography>
            <Divider variant="middle" />
          </Grid>
          <Grid item xs={12} md={4}>
            <Grid
              container
              justify="center"
              alignItems="flex-end"
              className={classes.skillsIconContainer}
            >
              <FaGitAlt />
              <FaNodeJs className={classes.mainIcon} />
              <FaGithub />
            </Grid>
            <Typography align="center" className={classes.skillsText}>
              Excellent working knowledge of Nodejs, Git, and Github.
            </Typography>
            <Typography className={classes.linkText} align="right">
              <Link to={"./projects"} className={classes.actionLink}>
                {">>projects"}
              </Link>
            </Typography>
            <Divider variant="middle" />
          </Grid>
        </Grid>
      </Grid>
    </Fade>
  );
};

export default Home;
