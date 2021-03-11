import React, { useState } from "react";
import { Link } from "react-router-dom";
// import avatar from "../avatar2.png";
import Footer from "../components/Footer";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Apps from "@material-ui/icons/Apps";
import FolderSpecial from "@material-ui/icons/FolderSpecial";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import ContactMail from "@material-ui/icons/ContactMail";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import EmojiPeople from "@material-ui/icons/EmojiPeople";
// import Grade from "@material-ui/icons/Grade";
import Home from "@material-ui/icons/Home";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Menu from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";



const useStyles = makeStyles((theme) => ({
  appbar: {
    background: "#222",
    margin: 1,
  },
  menu: {
    color: "Snow",
    "&:hover": {
      backgroundColor: "#222"
  }
  },
  title: {
    color: "Snow",
    "&:hover": {
      backgroundColor: "#222"
  }
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

  btn: {
    display: "none",
    }

}));

const menuItems = [
  { listIcon: <Home />, listText: "Home", listPath: "/" },
  //{ listIcon: <AssignmentInd />, listText: "Resume", listPath: "/resume" },
  { listIcon: <Apps />, listText: "Projects", listPath: "/portfolio" },
  { listIcon: <EmojiPeople />, listText: "About Me", listPath: "/about" },
  // { listIcon: <Grade />, listText: "Skills"},
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
            <Typography variant="h6" className={classes.title}>
              Menu
            </Typography>
            <IconButton disabled="true">
              <FolderSpecial className={classes.menu} />
            </IconButton>
            <Typography variant="h5" className={classes.title}>
            <Button className={classes.title}
            href="https://drive.google.com/file/d/1qYwQH3zvVgcroFkgjblsBlg6D6NfJwUH/view?usp=sharing" >
            Resume
            </Button>
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
