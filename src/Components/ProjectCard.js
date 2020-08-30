import React, { useEffect } from "react";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
  CardActions,
} from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { makeStyles } from "@material-ui/core/styles";

import Aos from "aos";
import "aos/dist/aos.css";

const useStyles = makeStyles({
  card: {
    width: "97%",
    maxWidth: "400px",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "3em",
    position: "relative",
    borderRadius: "5px",
    boxShadow: "-7px 9px 20px 0px rgba(0, 0, 0, 0.3)",
    alignSelf: "flex-start",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  actions: {
    justifyContent: "flex-end",
  },
});
const ProjectCard = ({ data, index }) => {
  const { name, description, gitLink, demoLink, imgPath } = data;
  const classes = useStyles();

  useEffect(() => {
    Aos.init({ duration: 500 });
  }, [index]);

  return (
    <Card data-aos="fade-up" className={classes.card}>
      <CardHeader title={name} />
      <a href={demoLink} target="_blank" rel="noopener noreferrer">
        <CardMedia
          className={classes.media}
          image={imgPath}
          alt={`screenshot of ${name}`}
        />
      </a>

      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {description}
        </Typography>
      </CardContent>
      <CardActions className={classes.actions}>
        <IconButton aria-label="add to favorites">
          <a href={gitLink} target="_blank" rel="noopener noreferrer">
            <GitHubIcon />
          </a>
        </IconButton>
        <IconButton aria-label="share">
          <a href={demoLink} target="_blank" rel="noopener noreferrer">
            <VisibilityIcon />
          </a>
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default ProjectCard;
