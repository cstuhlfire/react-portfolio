import React from "react";
import Title from "../Title";
import "../../styles/styles.css";

// Show contact details
function Contact(props) {
  return (
    <div>
      <Title title="Contact Me"/>

      <table className="my-about-table my-feature">
        <thead>
          <tr>
            <th width="1170"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="my-td"> 
              <h5>Availability</h5>
              <p>I am available to work remotely and onsite across the DFW area.</p>
            </td>
          </tr>
          <tr>
            <td className="my-td"> 
              <h5>Email</h5>
              <a className="my-contact-text" href="mailto: cstuhlfire@gmail.com" target="_blank" rel="noreferrer">cstuhlfire@gmail.com</a>
            </td>
          </tr>
          <tr>
            <td className="my-td"> 
              <h5>Phone</h5>
              <p>972-638-7055</p>
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

export default Contact;
