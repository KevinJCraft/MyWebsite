import React from "react";
import { Typography, Box, Grid, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import ProjectCard from "./ProjectCard.js";
import projectData from "../Data/ProjectData";

const useStyles = makeStyles({
  header: {
    textAlign: "center",
    paddingTop: "4rem",
    paddingBottom: "4rem",
  },
  container: {
    marginTop: "3rem",
  },
});

const Projects = () => {
  const classes = useStyles();
  return (
    <Box>
      <Typography className={classes.header} variant="h2">
        Projects
      </Typography>

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
                <ProjectCard index={index} key={project.name} data={project} />
              </Grid>
            );
          })}
        </Grid>
      </>
    </Box>
  );
};

export default Projects;
