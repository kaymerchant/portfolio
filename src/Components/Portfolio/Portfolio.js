import React from "react"
import resumeData from '../../resumeData'
import classes from '../Portfolio/Portfolio.module.css'
import {Button}  from 'reactstrap'

const portfolio = () => {
   
    return (
        <div className={classes.main}>
        {Object.keys(resumeData.portfolio).map (skills => {
            return (
                <div className={classes.container}>
                    <img className={classes.image} src={resumeData.portfolio[skills].image}></img>
                    <div class={classes.overlay}>
                            <div class={classes.text}>
                                <div><b>{resumeData.portfolio[skills].name}</b></div>
                                <div>{resumeData.portfolio[skills].technologies}</div>
                                <div>{resumeData.portfolio[skills].description}</div>
                                <Button color="warning" onClick = {() => 
                                    window.open(resumeData.portfolio[skills].link, "_blank")}>Visit Page</Button>
                            </div>
                    </div>
                </div>
            )
        })}
        </div>
    )
}
export default portfolio