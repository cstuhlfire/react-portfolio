import React from "react";
import "../../styles/styles.css";
import TheRaven from "./images/TheRaven.PNG";

function Poetry () {
    
  return (
    <tr>
        <td>
            <a href="https://cstuhlfire.github.io/PoetryProject/" target="_blank" rel="noreferrer"><img className="work-feature-block-image my-feature-img" src={TheRaven} alt="Poetry"/></a>
        </td>
        <td>
            <div>
                <br></br>
                <h4>Poetry Dashboard</h4>
                <p>This application presents users with a dashboard in which they can search for poetry by author or title. They can then select words within the poem to get definitions. Definitions are displayed at the bottom of the screen and searched words are maintained in a list to act as a vocabulary builder.</p>

                <h4>Technology</h4>
                <p>Javascript, HTML, CSS/Bulma framework, RESTful Web API</p>
                <h4>Github</h4>
                <p><a className="my-links" href="https://github.com/cstuhlfire/PoetryProject" target="_blank" rel="noreferrer">Poetry Dashboard Repository</a></p>
                <br></br>
                <br></br>
            </div>
            
        </td>
    </tr>
    );
}

export default Poetry;