import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import project1 from "../images/KarenFam.jpg";
import project2 from "../images/FiveSomewhere.jpg";
import project3 from "../images/Petflix.jpg";
import project4 from "../images/LGBTQ.jpg";
// import project5 from "../images/react-redux.jpg";
// import project6 from "../images/react.png";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
    height: "100vw",
  },
  cardContainer: {
    maxWidth: 375,
    margin: "3rem auto",
  },
}));

const projects = [
  {
    name: "Unhinged",
    description: `A short comedic text-based adventure game inspired by "Choose Your Own Adventure",\
    and the modern day "Karen".`,
    image: project1,
    href: "https://granddivino.github.io/Unhinged/",
    href2: "https://github.com/granddivino/Unhinged"
  },
  {
    name: "Five O' Somewhere",
    description: `An alcoholic cookbook that tells you exactly what ingredients you need, and directions\
    to make the perfect drink!`,
    image: project2,
    href: "https://five-o-somewhere.herokuapp.com/auth/login",
    href2: "https://github.com/granddivino/Five-Somewhere"
  },
  {
    name: "Petflix",
    description: `Collaboration project with former colleagues to make an Instagram inspired timeline\
    made for uploading pictures of your pets!`,
    image: project3,
    href: "http://petflix.surge.sh/",
    href2: "https://github.com/granddivino/Team-4-frontend"
  },
  {
    name: "Asylum",
    description: `Passion project dedicated to posting LGBTQ events in your area, or anything related\
    to the community that is inspiring, or can a helpful resource.`,
    image: project4,
    href: "",
    href2: "https://github.com/granddivino/Asylum"
  },
  // {
  //   name: "Project 5",
  //   description: ``,
  //   image: project5,
  // },
  // {
  //   name: "Project 6",
  //   description: ``,
  //   image: project6,
  // },
];

const Portfolio = () => {
  const classes = useStyles();
  return (
    
    <Box component="div" className={classes.mainContainer}>
      <Grid container justify="center">
      {/* <h1>Projects</h1> */}
        {projects.map((project, i) => (
          <Grid item xs={12} sm={8} md={4} key={i}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Project 1"
                  height="140"
                  image={project.image}
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {project.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {project.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary" href={project.href}>
                  Open App
                </Button>
                <Button size="small" color="primary" href={project.href2}>
                  View Code
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Portfolio;
