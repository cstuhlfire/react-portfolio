import React from "react";
import "../../styles/styles.css";
import UltimateImg from "./images/UltimateBookList.PNG";

function WatchParty () {
    
  return (
    <tr>
        <td>
            <a href="https://ultimate-book-list.herokuapp.com/" target="_blank" rel="noreferrer"><img className="work-feature-block-image my-feature-img" src={UltimateImg} alt="Ultimate Book List"/></a>
        </td>
        <td>
            <div>
                <br></br>
                <h4>Ultimate Book List</h4>
                <p>This application allows users to create book lists from book queries against the Google Books API. This allows users to create personal repositories of books stored in MongoDB/Atlas DB with links directly to those books in Google.</p>

                <h4>Technology</h4>
                <p>Javascript, HTML, CSS/Bootstrap framework, RESTful Web API (Google Books API), mongoose deployed to MongoDB/Atlas, Heroku, MVC</p>
                <h4>Github</h4>
                <p><a className="my-links" href="https://github.com/cstuhlfire/book-list" target="_blank" rel="noreferrer">Ultimate Book List Repository</a></p>
                <br></br>
                <br></br>
            </div>
            
        </td>
    </tr>
    );
}

export default WatchParty;