import React from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Button, Typography } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  container: {
    padding: "3rem",
  },
  containerText: {
    marginBottom: "2rem",
  },
}));

const NoPath = () => {
  const history = useHistory();
  const classes = useStyles();
  return (
    <>
      <Grid container className={classes.container}>
        <Grid
          item
          container
          justify="center"
          alignItems="center"
          className={classes.containerText}
        >
          <Typography variant="h4" align="center">
            Did I miss a semi-colon? Either way, back to HOME with ya!
          </Typography>
        </Grid>
        <Grid item container justify="center" alignItems="center">
          <Button
            variant="contained"
            color="primary"
            onClick={() => history.push("/")}
          >
            Back to Home
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default NoPath;
