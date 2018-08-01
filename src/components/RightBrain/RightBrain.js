import React from "react";
import "./RightBrain.css";
import RBrain from "./right-brain.png";

function RightBrain (){
    return <div className = "container"> 
    
    <img src = {RBrain} className ="rbrain-img"/>
        <div className = "middle">
            <div className = "explanation">
                <h4>Creativity:</h4>
                    The right side of the brain is known to be the "creative" side.  As a developer, I find myself wanting to create dynamic
                    websites and applications that exhibit my creativity
            </div>
        </div>

    </div>
}

export default RightBrain;