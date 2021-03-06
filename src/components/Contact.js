import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Send from "@material-ui/icons/Send";
import emailjs from 'emailjs-com';

const useStyles = makeStyles((theme) => ({
  contactContainer: {
    background: "DimGray",
    height: "100vh",

  },
  heading: {
    color: "DarkOrange",
    textAlign: "center",
    // textTransform: "uppercase",
    marginBottom: "1rem",
  },
  form: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    position: "absolute",
  },
  input: {
    textAlign: "center",
    color: "Snow",
  },
  button: {
    marginTop: "1rem",
    color: "DarkOrange",
    borderColor: "DarkOrange",
  },
  field: {
    margin: "1rem 0rem",
  },
}));

const InputField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "DarkOrange",
    },
    "& label": {
      color: "DarkOrange",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "DarkOrange",
      },
      "&:hover fieldset": {
        borderColor: "DarkOrange",
      },
      "&.Mui-focused fieldset": {
        color: "#fff",
        borderColor: "DarkOrange",
      },
    },
  },
})(TextField);


function sendEmail(e) {
  e.preventDefault();

  emailjs.sendForm('service_l9uxeyl', 'template_s9vu955', e.target, 'user_VJA80iUmRaHlZlcM0kLLh')
    .then((result) => {
        // window.location.reload();
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
}

const Contact = () => {
  const classes = useStyles();



  return (
    <Box component="div" className={classes.contactContainer}>
      <Grid container justify="center">
      <form className="contact-form" onSubmit={sendEmail}>
        <Box component="form" className={classes.form} >
          <Typography variant="h4" className={classes.heading}>
            Contact Gabriel
          </Typography>
          <InputField
            type="text"
            name="user_name"
            fullWidth={true}
            label="Name"
            variant="outlined"
            inputProps={{ className: classes.input }}
          />
          <InputField
            type="Email"
            name="user_email"
            fullWidth={true}
            label="Email"
            variant="outlined"
            inputProps={{ className: classes.input }}
            className={classes.field}
          />
          <InputField
            name="Message"
            fullWidth={true}
            label="Message"
            variant="outlined"
            multiline
            rows={4}
            inputProps={{ className: classes.input }}
          />
          <Button
            type="Submit"
            value="Send"
            variant="outlined"
            fullWidth={true}
            endIcon={<Send />}
            className={classes.button}
          >
            Send
          </Button>
        </Box>
        </form>
      </Grid>
    </Box>
  );
};

export default Contact;
