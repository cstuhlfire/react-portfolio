import React from "react";
import "../../styles/styles.css";
import WeatherDash from "./images/WeatherDash.PNG";

function Weather () {
    
  return (
    <tr>
        <td>
            <a href="https://cstuhlfire.github.io/WeatherDash/" target="_blank" rel="noreferrer"><img class="work-feature-block-image my-feature-img" src={WeatherDash} alt="Weather Dash"/></a>
        </td>
        <td>
            <div>
                <br></br>
                <h4>Weather Dashboard</h4>
                <p>This application presents users with a weather dashboard. They can search by city and the current weather and a five day forecast is displayed. A list of recently searched cities is stored so that users can easily retrieve their recent searches</p>

                <h4>Technology</h4>
                <p>Javascript, HTML, CSS/Bootstrap framework</p>
                <h4>Github</h4>
                <p><a class="my-links" href="https://github.com/cstuhlfire/WeatherDash" target="_blank" rel="noreferrer">Weather Dashboard Repository</a></p>

                <br></br>
                <br></br>
            </div>
            
        </td>
    </tr>
    );
}

export default Weather;