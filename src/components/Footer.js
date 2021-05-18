import React from "react";
import "../styles/styles.css";

function Footer() {
  return (
    <footer>
        <div className="my-social">
          <a className="my-contact-text" href="https://github.com/cstuhlfire" target="_blank" rel="noreferrer"><i className="fab fa-github fa-2x" aria-hidden="true"></i>  My Github</a>
          <a className="my-contact-text" href="https://www.linkedin.com/in/coleen-stuhlfire-46b990207/" target="_blank" rel="noreferrer"> <i className="fab fa-linkedin fa-2x" aria-hidden="true"></i> My LinkedIn </a>
          <a className="my-contact-text" href="mailto: cstuhlfire@gmail.com" target="_blank" rel="noreferrer"><i className="fas fa-envelope-square fa-2x" aria-hidden="true"></i>  cstuhlfire@gmail.com</a>
          <a className="my-contact-text" href=""><i className="fas fa-phone-square fa-2x" aria-hidden="true"></i>  972-638-7055</a>
      </div>
    </footer>
    )
}

export default Footer;