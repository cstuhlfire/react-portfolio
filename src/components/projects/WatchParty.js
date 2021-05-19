import React from "react";
import "../../styles/styles.css";
import WatchImg from "./images/WatchParty.PNG";

function WatchParty () {
    
  return (
    <tr>
        <td>
            <a href="https://watchparties.herokuapp.com/" target="_blank" rel="noreferrer"><img className="work-feature-block-image my-feature-img" src={WatchImg} alt="Watch Party"/></a>
        </td>
        <td>
            <div>
                <br></br>
                <h4>Watch Party</h4>
                <p>This application allows users to create Watch Parties listing shows, dates, and times with streaming links so that friends can join. This allows people to connect and watch programs together even when they are apart.</p>

                <h4>Technology</h4>
                <p>Javascript, HTML, CSS/Foundation framework, RESTful Web API, mySQL, Heroku, MVC</p>
                <h4>Github</h4>
                <p><a className="my-links" href="https://github.com/cstuhlfire/WatchParty" target="_blank" rel="noreferrer">Watch Party Repository</a></p>
                <br></br>
                <br></br>
            </div>
            
        </td>
    </tr>
    );
}

export default WatchParty;