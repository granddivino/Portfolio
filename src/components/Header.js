import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typed from "react-typed";
import Typography from "@material-ui/core/Typography";

import avatar from "../avatar.png";


const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(25),
    height: theme.spacing(25),
    margin: theme.spacing(5),
  },
  title: {
    color: "DarkOrange",
  },
  subtitle: {
    color: "Snow",
    textTransform: "uppercase",
  },
  copyright: {
    color: "Gold",
  },
  typedContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    width: "100vw",
    textAlign: "center",
    zIndex: 1,
  },

}));

const Header = () => {
  const classes = useStyles();

  return (
    <Box className={classes.typedContainer}>
      <Grid container justify="center">
        <Avatar className={classes.avatar} src={avatar} alt="Gabriel Go" />
      </Grid>
      <Typography className={classes.title} variant="h1">
        <Typed strings={["Gabriel Go"]} typeSpeed={40} />
      </Typography>

      <Typography className={classes.subtitle} variant="h5">
        <Typed
          strings={[
            "Software Engineer",

          ]}
          typeSpeed={80}
          backSpeed={80}
          loop
        />
      </Typography>
      <Typography className={classes.copyright} variant="h6" fontWeight={500}>
      © Gabriel Go 2021
      </Typography>
    
    </Box>
    
  );
};

export default Header;
