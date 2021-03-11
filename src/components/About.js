import React from "react";
import { makeStyles} from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Gabe from "../images/Gabe.jpg";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { FaHtml5, FaReact, FaNodeJs, FaCss3Alt, FaPython, FaGithub, FaDatabase, FaFlask } from "react-icons/fa";
import { SiJavascript, SiMongodb, SiPostgresql, SiMaterialUi } from "react-icons/si";


const useStyles = makeStyles((theme) => ({
    aboutPage: {
      background: "DimGray", 
      height: "150vh",
      color: "DarkOrange",
    },
    aboutMe: {
      // backgroundColor:"Gold"  
    },
    paragraph: {
      fontSize: '1rem'
    }
}));  

const About = () => {
    const classes = useStyles();

    return(

        <Box component="div" className={classes.aboutPage}>
        <Grid container alignItems="center" justify="center" style={{ minHeight: '90vh' }}>
          <div className="row">
            <Box component="div" className={classes.aboutMe} width={1100} height={100}>
            <div className="col l5">
            <h1 className="title center-align">Who is Gabriel Go?</h1>
            <div className="about">
            <Typography className={classes.paragraph}>
            <p>As a growing Software Engineer with over 10 years of previous client facing relations, thinking
            of ways to exercise my creativity has become second nature. I believe that I have a unique vision for
            aesthetic; how I believe what the person on the other side of the screen should see. I'm always 
            wondering how to translate what I see in my head translate into code.</p>
            <div className="about">
            <p>I'm looking for opportunities that will challenge me and teach me to become a better developer, all
            while being able to share that vision. </p>
            </div>
            </Typography>
            </div>
          </div>
          

            <div className="col l6 right-align" >
            <img src={Gabe} alt="Gabe" width="400" height="400" />
            </div>
            </Box>
          </div>
        </Grid> 
       
            <div class="row center-align">
            <h2>Skills</h2>
            </div>

          <div className="skills center-align">
            <div className="row center-align">
            <div className="col s4 m2 l2">
              <FaHtml5 size="4em" /> 
              <div>HTML5</div>
            </div>
            <div className="col s4 m2 l2">
              <FaCss3Alt size="4em" />
              <div>CSS</div>
            </div>
            <div className="col s4 m2 l2">
              <SiJavascript  size="4em" />
              <div>Javascript</div>
            </div>
            <div className="col s4 m2 l2">
              <FaReact size="4em" />
              <div>React</div>
            </div>
            <div className="col s4 m2 l2">
              <FaNodeJs  size="4em" />
              <div>Node JS</div>
            </div>
            <div className="col s4 m2 l2">
              <SiMongodb size="4em" />
            <div>MongoDB</div>
            </div>
            </div>

            <div className="row center-align">
            <div className="col s4 m2 l2">
              <FaDatabase size="4em" />
              <div>SQL</div>
            </div>
            <div className="col s4 m2 l2">
              <SiPostgresql size="4em" />
              <div>PostgreSQL</div>
            </div>
            <div className="col s4 m2 l2">
              <FaPython size="4em" />
              <div>Python</div>
            </div>
            <div className="col s4 m2 l2">
              <FaFlask size="4em" />
              <div>Flask</div>
            </div>
            <div className="col s4 m2 l2">
              <SiMaterialUi size="4em" />
              <div>MaterialUI</div>
            </div>
            <div className="col s4 m2 l2">
              <FaGithub size="4em" />
              <div>Github</div>
            </div>
            </div>
          </div>  
        </Box>

        
    );

}

export default About;