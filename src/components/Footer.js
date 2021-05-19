import React from "react";
import "../styles/styles.css";

function Footer() {
  return (
    <footer>
        <div className="my-social">
          
          <a className="my-contact-text" href="https://github.com/cstuhlfire" target="_blank" rel="noreferrer"><i className="fab fa-github" aria-hidden="true"></i></a>
          <a className="my-contact-text" href="https://www.linkedin.com/in/coleen-stuhlfire-46b990207/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin" aria-hidden="true"></i></a>
          <a className="my-contact-text" href="mailto: cstuhlfire@gmail.com" target="_blank" rel="noreferrer"><i className="fas fa-envelope-square fa" aria-hidden="true"></i></a>
          <a className="my-contact-text" href=""><i className="fas fa-phone-square fa" aria-hidden="true"></i> </a>
          <p><a className="my-contact-text" href="mailto: cstuhlfire@gmail.com" target="_blank" rel="noreferrer">cstuhlfire@gmail.com</a> | 972-638-7055</p>
      </div>

    </footer>
    );
}

export default Footer;