import React, { useState } from "react";
import useFormValidation from "../Hooks/useFormValidation/useFormValidation";
import axios from "axios";
import { MdSend } from "react-icons/md";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Button,
  TextField,
  FormControl,
  Grid,
  Modal,
  Divider,
  Box,
  Fade,
} from "@material-ui/core";
import messageImage from "../Images/message.jpg";
import DoneAllIcon from "@material-ui/icons/DoneAll";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";

const INITIAL_STATE = {
  name: "",
  email: "",
  message: "",
};

const useStyles = makeStyles((theme) => ({
  header: {
    textAlign: "center",
    paddingTop: "4rem",
    paddingBottom: "4rem",
  },
  container: {
    marginTop: "3rem",
    paddingBottom: "100px",
  },
  form: {
    width: "95%",
    padding: "1em",
    margin: "auto",
    borderRadius: "5px",

    [theme.breakpoints.up("md")]: {},
  },
  gridGrow: {
    flexGrow: "1",
  },

  img: {
    width: "80%",
    borderRadius: "5px",
    marginBottom: "1rem",
    [theme.breakpoints.up("md")]: {
      marginBottom: 0,
    },
  },
  submitButton: {
    fontSize: "1.5rem",
    padding: "1rem",
    marginTop: "1rem",
    width: "100%",
  },
  modal: {
    width: "80%",
    maxWidth: "400px",
    height: "200px",
    position: "absolute",
    top: "50%",
    left: "50%",
    backgroundColor: theme.palette.background.paper,
    transform: "translate(-50%, -50%)",
  },
  errorIcon: {
    fontSize: "4rem",
    color: "red",
  },
  successIcon: {
    fontSize: "4rem",
    color: "green",
  },
  errorMessage: {
    color: "#f44336",
    minHeight: "1.5rem",
    marginTop: 0,
  },
}));

const ContactMe = () => {
  const [formCompletion, setFormCompletion] = useState({
    wasCompleted: false,
    errorMessage: "",
    respond: false,
  });
  const classes = useStyles();

  function sendMail() {
    axios
      .post("/.netlify/functions/sendgrid", {
        name: values.name,
        email: values.email,
        message: values.message,
      })
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          setFormCompletion({
            wasCompleted: true,
            errorMessage: "",
            respond: true,
          });
          setValues(INITIAL_STATE);
          setSubmitting(false);
        }
      })
      .catch((err) => {
        console.log("Error: ", err);
        setFormCompletion({
          wasCompleted: false,
          errorMessage: "Email not sent. Server Error",
          respond: true,
        });
        setSubmitting(false);
      });
  }

  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    setValues,
    errors,
    isSubmitting,
    setSubmitting,
  } = useFormValidation(INITIAL_STATE, sendMail);

  const handleCloseModal = () => {
    setFormCompletion({
      wasCompleted: false,
      errorMessage: "",
      respond: false,
    });
  };

  return (
    <Fade in={true} timeout={1000}>
      <Box>
        <Typography className={classes.header} variant="h2">
          Contact
        </Typography>

        <Divider variant="middle" />

        <Grid container className={classes.container} alignItems="stretch">
          <Grid
            item
            xs={12}
            md={6}
            container
            justify="center"
            alignItems="center"
          >
            <img
              className={classes.img}
              src={messageImage}
              alt="message in a bottle"
            />
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            container
            justify="center"
            alignItems="center"
          >
            <FormControl className={classes.form} onSubmit={handleSubmit}>
              <TextField
                variant="outlined"
                label="Name"
                error={errors.name}
                fullWidth
                name="name"
                type=""
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                className={classes.input}
              />
              <p className={classes.errorMessage}>
                {errors.name ? errors.name : " "}
              </p>

              <TextField
                variant="outlined"
                label="Email"
                error={errors.email}
                fullWidth
                name="email"
                type=""
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={classes.input}
              />
              <p className={classes.errorMessage}>
                {errors.email ? errors.email : " "}
              </p>
              <TextField
                variant="outlined"
                label="Message"
                error={errors.message}
                fullWidth
                multiline
                rows="4"
                name="message"
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
                className={classes.input}
              />
              <p className={classes.errorMessage}>
                {errors.message ? errors.message : " "}
              </p>
              <Modal open={formCompletion.respond} onClose={handleCloseModal}>
                <Grid
                  className={classes.modal}
                  container
                  justify="space-evenly"
                  alignItems="center"
                >
                  {formCompletion.errorMessage ? (
                    <>
                      <ErrorOutlineIcon className={classes.errorIcon} />
                      <Typography variant="h3">
                        {formCompletion.errorMessage}
                      </Typography>
                    </>
                  ) : (
                    <>
                      <DoneAllIcon className={classes.successIcon} />
                      <Typography variant="h3">Email Sent</Typography>
                    </>
                  )}
                </Grid>
              </Modal>
              <Button
                variant="contained"
                color="primary"
                name="submit"
                disabled={isSubmitting}
                className={classes.submitButton}
                type="submit"
                onClick={handleSubmit}
              >
                <MdSend fill="white" />
              </Button>
            </FormControl>
          </Grid>
        </Grid>
      </Box>
    </Fade>
  );
};

export default ContactMe;
