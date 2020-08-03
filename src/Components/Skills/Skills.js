import React from "react"
import resumeData from '../../resumeData'
import classes from './Skills.module.css'

const skills = () => {
    let interpersonalSkills = Object.keys(resumeData.interpersonalSkills).map(skills => {
        return (
            <div className={classes.skill}>
            <img src= {resumeData.interpersonalSkills[skills].img}></img>
            <h6>{resumeData.interpersonalSkills[skills].name}</h6>
        </div>
        )
       
    })
    return (
       <div className={classes.main}>
           <div className={classes.title}>About</div>
           <div>
            {interpersonalSkills}
           </div>
       </div>
      
    )
}

export default skills;