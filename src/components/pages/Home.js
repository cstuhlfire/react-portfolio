import React from "react";
import TheRaven from "../../images/TheRaven.PNG";

function Home() {
  return (
    
    <div className="my-feature-container">
      <div className="work-feature-block row my-feature">
        <h3>My Work</h3>
      </div>

      <div className="grid-x">
        <div className="cell">full width cell</div>
        <div className="cell">full width cell</div>
      </div>

    </div>

  );

    // <div className="my-feature-container grid-container">
    //     <div className="work-feature-block my-feature cell medium-6 grid-padding-x">
    //       <h3>My Work</h3>
    //     </div>

    //     <div className="work-feature-block grid-x my-feature">
    //       <div className="cell medium-6">
    //         <a href="https://cstuhlfire.github.io/PoetryProject/" target="_blank" rel="noreferrer">
    //           <img className="work-feature-block-image my-feature-img" src={TheRaven} alt="Raven"/></a>
    //       </div>
    //       <div className="cell medium-6">
    //         <h4 className="work-feature-block-header">Poetry Dashboard</h4>
    //         <p>This application presents users with a dashboard in which they can search for poetry by author or title. They can then select words within the poem to get definitions. Definitions are displayed at the bottom of the screen and searched words are maintained in a list to act as a vocabulary builder.</p>

    //         <h4>Technology</h4>
    //         <p>Javascript, HTML, CSS/Bulma framework, RESTful Web API</p>
    //         <h4>Github</h4>
    //         <p><a className="my-links" href="https://github.com/cstuhlfire/PoetryProject" target="_blank" rel="noreferrer">Poetry Dashboard Repository</a></p>
            
    //       </div>
    //     </div>
    // </div>
  
}

export default Home;
