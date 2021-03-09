import React from "react";
import { makeStyles} from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Gabe from "../images/Gabe.jpg"
import Grid from "@material-ui/core/Grid";
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
    }
}));  

const About = () => {
    const classes = useStyles();

    return(

        <Box component="div" className={classes.aboutPage}>
        <Grid container alignItems="center" justify="center" style={{ minHeight: '90vh' }}>
          <div className="row">
            <Box component="div" className={classes.aboutMe} width={1100} height={100}>
            <div className="col l4">
            <h1 className="title center-align">What Gabriel Go is About</h1>
            <div className="about">
            As a driven Software Engineer, I’m constantly looking for innovative ways to expand my knowledge of 
            programming techniques. My calling lies in front end development as I have a unique vision for aesthetic, 
            and conveying my product vision through my work. A keen eye for originality is what makes me an asset as a 
            developer and team member.
            <div className="about">I'm in search of a collaborative team that is in the
              business of pushing boundaries with code.
            </div>
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