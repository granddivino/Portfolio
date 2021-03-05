import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Button from "@material-ui/core/Button";
// import Facebook from "@material-ui/icons/Facebook";
import GitHub from "@material-ui/icons/GitHub";
import LinkedIn from "@material-ui/icons/LinkedIn";

const useStyles = makeStyles({
  bottomNavContainer: {
    background: "#222",
  },
  root: {
    "& .MuiSvgIcon-root": {
      fill: "Snow",
      "&:hover": {
        fill: "DarkOrange",
        fontSize: "1.8rem",
      },
    },
  },
});

const Footer = () => {
  const classes = useStyles();

  return (
    <BottomNavigation className={classes.bottomNavContainer}>
      {/* <BottomNavigationAction icon={<Facebook />} className={classes.root} /> */}
      <Button target="_blank" href="https://github.com/granddivino">
        <BottomNavigationAction icon={<GitHub />} className={classes.root} />
      </Button>
      <Button target="_blank" href="https://www.linkedin.com/in/gabriel-go-10192bb3/">
        <BottomNavigationAction icon={<LinkedIn />} className={classes.root} />
      </Button>
    </BottomNavigation>
  );
};
export default Footer;
