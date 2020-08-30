import React from "react";
import { Link } from "react-router-dom";
import aboutMeHeader from "../Images/aboutMeHeader.png";

import {
  Typography,
  Button,
  Grid,
  Box,
  Divider,
  Fade,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import timeline from "../Data/timelineData";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import GetAppIcon from "@material-ui/icons/GetApp";

const useStyles = makeStyles((theme) => ({
  headerContainer: {
    textAlign: "center",
    padding: "3rem 0",
  },
  headerImg: {
    width: "80%",
    [theme.breakpoints.up("md")]: {
      width: "50%",
    },
  },
  resumeButton: {
    position: "absolute",
    top: "15px",
    right: "15px",
  },
  resumeButtonText: {
    textTransform: "none",
    textDecoration: "underline",
  },
  timeline: {
    marginTop: "3rem",
    paddingBottom: "100px",
  },
}));

const About = () => {
  const classes = useStyles();

  const getIconStyle = (type) => {
    if (type === "school") {
      return {
        background: "rgb(233, 30, 99)",
        color: "#fff",
      };
    } else if (type === "work") {
      return {
        background: "rgb(33, 150, 243)",
        color: "#fff",
      };
    }
  };
  const getIcon = (type) => {
    if (type === "school") {
      return <SchoolIcon />;
    } else if (type === "work") {
      return <WorkIcon />;
    }
  };

  return (
    <Fade in={true} timeout={1000}>
      <Box>
        <Grid
          container
          className={classes.resumeButton}
          justify="flex-end"
          alignItems="center"
        >
          <Link
            to="/resources/resume.docx"
            target="_blank"
            rel="noopener noreferrer"
            download
          >
            <Button
              variant="contained"
              color="primary"
              endIcon={<GetAppIcon />}
            >
              <Typography className={classes.resumeButtonText}>
                Resume
              </Typography>
            </Button>
          </Link>
        </Grid>

        <Grid
          className={classes.headerContainer}
          container
          alignItems="center"
          justify="center"
        >
          <img
            src={aboutMeHeader}
            alt="projects"
            className={classes.headerImg}
          />
        </Grid>
        <Divider variant="middle" />

        <VerticalTimeline
          animate={window.innerWidth > 1170}
          className={classes.timeline}
        >
          {timeline.map((event, index) => (
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date={event.date}
              iconStyle={getIconStyle(event.type)}
              icon={getIcon(event.type)}
              key={index}
            >
              <h3 className="vertical-timeline-element-title">{event.name}</h3>
              <h4 className="vertical-timeline-element-subtitle">
                {event.location}
              </h4>
              <p>{event.description}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </Box>
    </Fade>
  );
};

export default About;
