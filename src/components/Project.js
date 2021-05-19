import React from "react";
import "../styles/styles.css";
import TheRaven from "../images/TheRaven.PNG";

function Project (props) {
  return (
    <tbody>
        <tr>
            <td>
                <a href="https://cstuhlfire.github.io/PoetryProject/" target="_blank" rel="noreferrer"><img className="work-feature-block-image my-feature-img" src={TheRaven}/></a>
            </td>
            <td>
                <div>
                    <h4>Poetry Dashboard</h4>
                    <p>This application presents users with a dashboard in which they can search for poetry by author or title. They can then select words within the poem to get definitions. Definitions are displayed at the bottom of the screen and searched words are maintained in a list to act as a vocabulary builder.</p>

                    <h4>Technology</h4>
                    <p>Javascript, HTML, CSS/Bulma framework, RESTful Web API</p>
                    <h4>Github</h4>
                    <p><a className="my-links" href="https://github.com/cstuhlfire/PoetryProject" target="_blank" rel="noreferrer">Poetry Dashboard Repository</a></p>
                
                </div>
                
            </td>
        </tr>
    </tbody>
    );
}

export default Project;