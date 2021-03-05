import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
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
      <BottomNavigationAction icon={<GitHub href="https://github.com/granddivino" />} className={classes.root} />
      <BottomNavigationAction icon={<LinkedIn />} className={classes.root} />
    </BottomNavigation>
  );
};
export default Footer;
