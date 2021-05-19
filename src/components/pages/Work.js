import React from "react";
import Title from "../Title";
import Project from "../Project";
import TheRaven from "../../images/TheRaven.PNG";

function Work() {
  return (
    <div>
    <Title title="My Work"/>

      <table className="">
        <thead>
          <tr>
            <th width="500"></th>
            <th width="400"></th>
          </tr>
        </thead>
        <Project />
     </table>

    </div>

  );
}

export default Work;
