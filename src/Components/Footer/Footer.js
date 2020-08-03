import React from 'react'
import github from '../../assets/github.png'
import linkedin from '../../assets/linkedin.png'
import './Footer.css'

const footer = () => {
    return (
        <div className="footerStyle">
            <div>Always stay conected</div>
            <img className="icon" src={github} onClick = {() => 
                                    window.open("https://github.com/kaymerchant", "_blank")}></img>
            <img className="icon" src={linkedin} onClick = {() => 
                                    window.open("https://www.linkedin.com/in/kanwalmerchant", "_blank")}></img>
        </div>
    )
}

export default footer