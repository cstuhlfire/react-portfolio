import React from "react";
import Title from "../Title";
import "../../styles/styles.css";
import ResumePDF from "../../links/Resume-ColeenStuhlfire.pdf";

// Details of about me 
function About() {
  return ( 
    <div>
      <Title title="About Me"/>

      <table className="my-about-table my-feature">
        <thead>
          <tr>
            <th width="375"></th>
            <th width="375"></th>
            <th width="375"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="my-td"> 
            <h5>Experience</h5>
              <ul>
                <li>Javascript, jQuery, SQL, C, C++</li>
                <li>HTML, CSS, Handlebars</li>
                <li>React, Bootstrap, Bulma, Foundation</li>
                <li>Node.js, Express, Heroku</li>
                <li>mySQL, NoSQL, Mongo DB, AtlasDB</li>
                <li>Sequelize, SQL Server, JawsDB</li>
                <li>Oracle, Sybase, Sybase IQ</li>
                <li>Oracle Financials, PeopleSoft, SAP</li>
                <li>Agile, Scrum, Kanban</li>
                <li>MVC, RESTful, JSON</li>
                <li>Data Warehousing, Change Control Management, git</li>
              </ul>
              <p><a className="my-links" href= {ResumePDF} target="_blank">Resume</a></p>
            </td>

            <td className="my-td">
              <h5>Employers</h5>
              <ul>
                <li>Self Employeed Real Estate Investor</li>
                <li>Price Waterhouse Coopers</li>
                <li>NRG Barriers</li>
                <li>Actium Consulting</li>
                <li>Verizon</li>
              </ul>

              <h5>Clients</h5>
              <ul>
                <li>Fairchild Semiconductor</li>
                <li>The State of Maine</li>
                <li>North Eastern Log Homes</li>
                <li>John's Manville Corporation</li>
                <li>Mine Safety Appliances</li>
                <li>University of Pittsburgh Medical Center</li>
                <li>US Steel</li>
              </ul>

            </td>

            <td className="my-td">
                <h5>Education</h5>
                <p>BS Information and Decision Systems, Carnegie Mellon Univeristy</p>
                <p>Certified Full Stack Developer, Southern Methodist University</p>

            </td>
          </tr>
        </tbody>
      </table>
      <hr></hr>
      <hr></hr>
      <hr></hr>

    </div>
  );
}

export default About;
