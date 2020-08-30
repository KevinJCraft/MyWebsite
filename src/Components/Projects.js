import React from "react";
import { Box, Grid, Divider, Fade } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import projectHeader from "../Images/projectsHeader2.png";

import ProjectCard from "./ProjectCard.js";
import projectData from "../Data/ProjectData";

const useStyles = makeStyles((theme) => ({
  headerContainer: {
    textAlign: "center",
    padding: "3rem 0",
  },
  headerImg: {
    width: "80%",
    [theme.breakpoints.up("md")]: {
      width: "35%",
    },
  },
  container: {
    marginTop: "3rem",
  },
}));

const Projects = () => {
  const classes = useStyles();
  return (
    <Fade in={true} timeout={1000}>
      <Box>
        <Grid
          className={classes.headerContainer}
          container
          alignItems="center"
          justify="center"
        >
          <img
            src={projectHeader}
            alt="projects"
            className={classes.headerImg}
          />
        </Grid>

        <Divider variant="middle" />
        <>
          <Grid
            className={classes.container}
            spacing={3}
            justify="center"
            container
          >
            {projectData.map((project, index) => {
              return (
                <Grid item key={index}>
                  <ProjectCard
                    index={index}
                    key={project.name}
                    data={project}
                  />
                </Grid>
              );
            })}
          </Grid>
        </>
      </Box>
    </Fade>
  );
};

export default Projects;
