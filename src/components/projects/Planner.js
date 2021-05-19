import React from "react";
import "../../styles/styles.css";
import Coffee from "../../images/coffee.PNG";

function Planner () {
    
  return (
    <tr>
        <td>
            <a href="https://cstuhlfire.github.io/DayPlanner/" target="_blank" rel="noreferrer"><img class="work-feature-block-image my-feature-img" src={Coffee} alt="Day Planner"/></a>
       </td>
        <td>
            <div>
                <br></br>
                <h4 class="work-feature-block-header">Day Planner</h4>
                <p>This application is provides a view into a user's daily schedule. The days events are entered and displayed in one hour time blocks. The current hour is highlighted red, past hours are grey, and future time blocks are green.</p>
                
                
                <h4>Technology</h4>
                <p>Javascript, HTML, CSS/Bootstrap framework</p>
                <h4>Github</h4>
                <p><a class="my-links" href="https://github.com/cstuhlfire/DayPlanner" target="_blank" rel="noreferrer">Day Planner Repository</a></p>

                <br></br>
                <br></br>
            </div>
            
        </td>
    </tr>
    );
}

export default Planner;