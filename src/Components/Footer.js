import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  footer: {
    backgroundColor: "black",
    textAlign: "left",
    width: "100%",
  },

  footerSpan: {
    color: "grey",
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <span className={classes.footerSpan}>all rights reserved &copy;2020</span>
    </footer>
  );
};

export default Footer;
