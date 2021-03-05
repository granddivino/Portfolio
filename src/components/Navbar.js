import React, { useState } from "react";
import { Link } from "react-router-dom";
import Drawer from "@material-ui/core/Drawer";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import Menu from "@material-ui/icons/Menu";
import Home from "@material-ui/icons/Home";
import AssignmentInd from "@material-ui/icons/AssignmentInd";
import Apps from "@material-ui/icons/Apps";
import ContactMail from "@material-ui/icons/ContactMail";
import EmojiPeople from "@material-ui/icons/EmojiPeople";
import Grade from "@material-ui/icons/Grade";
import { makeStyles } from "@material-ui/core/styles";
// import avatar from "../avatar2.png";
import Footer from "../components/Footer";

const useStyles = makeStyles((theme) => ({
  appbar: {
    background: "#222",
    margin: 1,
  },
  menu: {
    color: "Snow",
  },
  title: {
    color: "Snow",
  },
  menuSliderContainer: {
    width: 250,
    background: "DarkOrange",
    height: "100%",
  },
  // avatar: {
  //   display: "block",
  //   margin: "0.5rem auto",
  //   width: theme.spacing(13),
  //   height: theme.spacing(13),
  // },
  listItem: {
    color: "Snow",
  },
  resume: {
    color: "Snow",
  }
}));

const menuItems = [
  { listIcon: <Home />, listText: "Home", listPath: "/" },
  // { listIcon: <AssignmentInd />, listText: "Resume", listPath: "/resume" },
  { listIcon: <Apps />, listText: "Projects", listPath: "/portfolio" },
  { listIcon: <EmojiPeople />, listText: "About Me"},
  { listIcon: <Grade />, listText: "Skills"},
  { listIcon: <ContactMail />, listText: "Contact", listPath: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const classes = useStyles();

  const sideList = () => (
    <Box className={classes.menuSliderContainer} component="div">
      {/* <Avatar className={classes.avatar} src={avatar} alt="Gabriel Go" /> */}
      <Divider />
      <List>
        {menuItems.map((item, i) => (
          <ListItem
            button
            key={i}
            className={classes.listItem}
            onClick={() => setOpen(false)}
            component={Link}
            to={item.listPath}
          >
            <ListItemIcon className={classes.listItem}>
              {item.listIcon}
            </ListItemIcon>
            <ListItemText primary={item.listText} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <React.Fragment>
      <Box component="nav">
        <AppBar position="static" className={classes.appbar}>
          <Toolbar>
            <IconButton onClick={() => setOpen(true)}>
              <Menu className={classes.menu} />
            </IconButton>
            <Typography variant="h5" className={classes.title}>
              Menu
            </Typography>
            <IconButton>
              <AssignmentInd />
            </IconButton>
            <Typography variant="button" className="resume">
            <a className="btn" 
              href="https://drive.google.com/file/d/1qYwQH3zvVgcroFkgjblsBlg6D6NfJwUH/view?usp=sharing">
             My Resume
            </a>
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Drawer open={open} anchor="right" onClose={() => setOpen(false)}>
        {sideList()}
        <Footer />
      </Drawer>
    </React.Fragment>
  );
};

export default Navbar;
