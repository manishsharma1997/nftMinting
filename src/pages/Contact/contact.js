import React from "react";
import "./contact.css";
import {FaFacebook,FaTwitter,FaYoutube,FaLinkedin,FaInstagram} from 'react-icons/fa'

function Contact() {
  return (
    <div id='contact' className="body">
      <h1 id="contact-title">Contact</h1>
      <div id="contact-container">
        <form id="contact-form">
          <div id="name-container">
            <input
              id="first-name-input"
              type="text"
              name="first-name"
              placeholder="First name"
            ></input>
            <input
              id="last-name-input"
              type="text"
              name="last-name"
              placeholder="Last name"
            ></input>
          </div>

          <input
            id="mail-input"
            type="mail"
            name="mail"
            placeholder="Email"
          ></input>

          <textarea
            id="subject-input"
            name="subject"
            placeholder="Type your message here"
          ></textarea>

          <input id="submit-button" type="submit" value="Submit" />
        </form>
        <div id="traditional-contact">
          <h2>Contact me through:</h2>
          <a href="mailto:mail@example.com" id="contact-link">
            mail@example.com
          </a>
          <hr />
          <h2>Find me on</h2>
          <FaFacebook/>{" "}
          <FaInstagram/>{" "}
          <FaYoutube/>{" "}
          <FaTwitter/>{" "}
          <FaLinkedin/>
        </div>
      </div>
    </div>
  );
}
export default Contact;
