import React, { useContext } from "react";
import { MenuContext } from "../Context/MenuContext";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  menuButtonContainer: {
    width: "100%",
    textAlign: "right",
    background: "none",
    position: "absolute",
    top: 0,
  },

  button: {
    color: "transparent",
    textShadow: "0 0 0 white",
    fontWeight: "bolder",
    cursor: "pointer",
    outline: "none",
    border: "none",
    fontSize: "50px",
    backgroundColor: "transparent",
  },

  [theme.breakpoints.up("md")]: {
    menuButtonContainer: {
      display: "none",
    },
  },
}));

const MenuButton = () => {
  const { setIsMenuOpen } = useContext(MenuContext);
  const classes = useStyles();

  const handleClick = () => {
    setIsMenuOpen((prev) => !prev);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={classes.menuButtonContainer}>
      <button onClick={handleClick} className={classes.button}>
        &#9776;
      </button>
    </div>
  );
};

export default MenuButton;
