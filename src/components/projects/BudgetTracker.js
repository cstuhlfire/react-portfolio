import React from "react";
import "../../styles/styles.css";
import BudgetImg from "./images/BudgetTracker.PNG";

function BudgetTracker () {
    
  return (
    <tr>
        <td>
            <a href="https://budgets-all-the-time.herokuapp.com/" target="_blank" rel="noreferrer"><img className="work-feature-block-image my-feature-img" src={BudgetImg} alt="Budget Tracker"/></a>
        </td>
        <td>
            <div>
                <br></br>
                <h4>Budget Tracker</h4>
                <p>The Budget Tracker app enables users to enter debits and credits to an account. The app tracks and graphs the transactions. The app allows for online work with storage in Mongo/Atlas DB and offline work through the use of indexedDB and cache. The app can be installed as a PWA (progressive web app) through the use of a service worker and web manifest.</p>

                <h4>Technology</h4>
                <p>Javascript, HTML, CSS/Bootstrap framework, express, node.js, RESTful Web API, MongoDB deployed to AtlasDB, IndexedDB for offline continuity, Heroku, MVC</p>
                <h4>Github</h4>
                <p><a className="my-links" href="https://github.com/cstuhlfire/BudgetTracker" target="_blank" rel="noreferrer">Budget Tracker Repository</a></p>
                <br></br>
                <br></br>
            </div>
            
        </td>
    </tr>
    );
}

export default BudgetTracker;