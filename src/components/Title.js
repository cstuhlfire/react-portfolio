import React from "react";

function Title (props) {
  return (
    <div className="my-feature-container">
        <div className="work-feature-block row my-feature">
        <h3>{props.title}</h3>
        </div>
    </div>
    );
}

export default Title;