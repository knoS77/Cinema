import React from "react";
import "./Hero.css";
import star from "./star.svg";

const Hero = () => {
return(
    <div className="Hero">
        <div className="Hero__container">
           <div className="Hero__block">
            <div className="Hero__title">
            승리호 Space Sweepers
            </div>
            <div className="Hero__subTitle">
            In the year 2092, space is full of dangerous floating garbage like discarded satellites and deserted spaceships. The crew of a space junk collector ship called The Victory discovers a humanoid robot that`s known to be a weapon of mass destruction. They get involved in a risky business deal and travel through space looking for garbage they can make money off of while also competing with rival junk collectors.
            </div>
            <div className="Hero__review">
                <img src={star} alt="" />
                <span>7.0</span>
           </div>
          </div>
        </div>
    </div>
)
}

export default Hero;