import React from "react";
import "../../styles/styles.css";
import FitnessImg from "./images/FitnessTracker.PNG";

function FitnessTracker () {
    
  return (
    <tr>
        <td>
            <a href="https://todayirun.herokuapp.com/" target="_blank" rel="noreferrer"><img className="work-feature-block-image my-feature-img" src={FitnessImg} alt="Fitness Tracker"/></a>
        </td>
        <td>
            <div>
                <br></br>
                <h4>Fitness Tracker</h4>
                <p>Workout Tracker allows users to create workouts and add exercises to them. The Workout Tracker Dashboard displays the most recent seven workouts and graphs the total time per workout and total weight lifted.The specific type of exercise is also graphed by percent of total workouts.</p>

                <h4>Technology</h4>
                <p>Javascript, HTML, CSS/Bootstrap framework, express, node.js, RESTful Web API, MongoDB/Mongoose, AtlasDB, Heroku, MVC</p>
                <h4>Github</h4>
                <p><a className="my-links" href="https://github.com/cstuhlfire/FitnessTracker" target="_blank" rel="noreferrer">Fitness Tracker Repository</a></p>
                <br></br>
                <br></br>
            </div>
            
        </td>
    </tr>
    );
}

export default FitnessTracker;