import React from "react";
import "./LeftBrain.css";
import LBrain from "./left-brain.png";

function LeftBrain (){
    return <div className = "container"> 
    
    <img src = {LBrain} className ="lbrain-img"/>
        <div className = "middle">
            <div className = "explanation">
                <h4>Logic:</h4>
                    The left side of the brain is known to be the "logical" side.  As a developer, I find myself often pondering the solutions
                    to the problems that coding provides.
            </div>
        </div>

    </div>
}

export default LeftBrain;