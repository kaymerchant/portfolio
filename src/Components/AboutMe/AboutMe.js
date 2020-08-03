import React from "react";
import resumeData from "../../resumeData"
import classes from './AboutMe.module.css'
import {Progress} from 'reactstrap'


const aboutMe = () => {

    let progressBar = Object.keys(resumeData.skills).map (skills => {
        return (
            <div className={classes.progressBar}>
            <div>{skills}</div>
            <Progress animated value={resumeData.skills[skills]} />
            </div>
        )
    })

	return ( 
        <div className={classes.mainClass}>
            <div className = {classes.leftBox}>
            <img className={classes.profileImage} src={resumeData.profileImage}></img>
            <p>{resumeData.aboutMe}</p>
           </div>
		   <div className= {classes.rightBox}>
			   <div className={classes.progressBar}>
               {progressBar}
           </div>
		   </div>
        </div>
    )
     
}
	
export default aboutMe;