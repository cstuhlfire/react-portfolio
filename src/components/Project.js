import React from "react";
import Poetry from "./projects/Poetry";
import Weather from "./projects/Weather";
import Quiz from "./projects/Quiz";
import Planner from "./projects/Planner";
import WatchParty from "./projects/WatchParty";
import FitnessTracker from "./projects/FitnessTracker";
import BudgetTracker from "./projects/BudgetTracker";

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
        : (props.project) === "watch" ?
            <WatchParty />
        : (props.project) === "fitness" ?
            <FitnessTracker />
        : (props.project) === "budget" ?
            <BudgetTracker />
        : <p>No project loaded</p>}
    </tbody>
    );
}

export default Project;