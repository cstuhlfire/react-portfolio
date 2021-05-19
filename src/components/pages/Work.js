import React from "react";
import Title from "../Title";
import Project from "../Project";

function Work() {
  return (
    <div>
    <Title title="My Work"/>

      <table className="my-table">
        <thead>
          <tr>
            <th width="500"></th>
            <th width="400"></th>
          </tr>
        </thead>
        <Project project="poetry"/>
        <Project project="watch"/>
        <Project project="fitness"/>
        <Project project="budget"/>
        <Project project="weather"/>
        <Project project="quiz"/>
        <Project project="planner"/>
     </table>
    <hr></hr>
    <hr></hr>
    <hr></hr>
    </div>

  );
}

export default Work;
