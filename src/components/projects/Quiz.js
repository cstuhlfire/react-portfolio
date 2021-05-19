import React from "react";
import "../../styles/styles.css";
import CodeAQuiz from "./images/CodeAQuiz.PNG";

function Quiz () {
    
  return (
    <tr>
        <td>
            <a href="https://cstuhlfire.github.io/CodeAQuiz/" target="_blank" rel="noreferrer"><img class="work-feature-block-image my-feature-img" src={CodeAQuiz} alt="Code a Quiz"/></a>
        </td>
        <td>
            <div>
                <br></br>
                <h4 class="work-feature-block-header">Trivia Quiz</h4>
                <p>This application is a Seinfeld trivia quiz. Users are give 60 seconds and are challenged to answer trivia questions before time runs out. Ten seconds are lost for each incorrect answer. Users can save their high score.</p>
                
                
                <h4>Technology</h4>
                <p>Javascript, HTML, CSS</p>
                <h4>Github</h4>
                <p><a class="my-links" href="https://github.com/cstuhlfire/CodeAQuiz" target="_blank" rel="noreferrer">Trivia Quiz Repository</a></p>

                <br></br>
                <br></br>
            </div>
            
        </td>
    </tr>
    );
}

export default Quiz;