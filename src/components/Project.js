import React from "react";
import Poetry from "./projects/Poetry";
import Weather from "./projects/Weather";
import Quiz from "./projects/Quiz";
import Planner from "./projects/Planner";

function Project (props) {
    
  return (
    <tbody>
        {(props.project === "poetry") ? 
            <Poetry />
        : (props.project) === "weather" ?
            <Weather />
        : (props.project) === "quiz" ?
            <Quiz />
        : (props.project) === "planner" ?
            <Planner />
        : <p>No project</p>}
    </tbody>
    );
}

export default Project;