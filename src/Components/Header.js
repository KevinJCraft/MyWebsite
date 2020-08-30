import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import bannerImage from "../Images/banner.jpg";

const useStyles = makeStyles((theme) => ({
  header: {
    width: "100vw",
    height: "200px",
    background: `url(${bannerImage})`,
    [theme.breakpoints.up("md")]: {
      height: "400px",
    },
  },
}));
const Header = () => {
  const classes = useStyles();
  return <div className={classes.header}></div>;
};

export default Header;
