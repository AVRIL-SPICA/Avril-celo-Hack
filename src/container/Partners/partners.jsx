import React from 'react'

import team1pic from "../../assets/InjXBNx9_400x400 1.png";
import team2pic from "../../assets/Group 27178.png";
import team3pic from "../../assets/JnUbndzX_400x400 1.png";
import team4pic from "../../assets/Logo-1 1.png"
import "./partner.css"
function patners() {
    return (
        <div className='background'>
            <center> let's make your hiring process seamless by joinung our memebership with just $100 annually </center>

            <div className="flex">
                <img src={team1pic} alt="" />
                <img src={team2pic} alt="" />
                <img src={team3pic} alt="" />
                <img src={team4pic} alt="" />

            </div>

            <button className='teambtn'>Pay here</button>
        </div>
    )
}

export default patners