import React from "react";
import "./contact.css";
import {
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="contact_section">
      <div className="container">
      <h1 id="contact-title">Contact</h1>
      <div id="contact-container">
        <div className="row">
          <div className="col-6">
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
          </div>
          <div className="col-6">
            <div id="traditional-contact">
              <h2>Contact me through:</h2>
              <a href="mailto:mail@example.com" id="contact-link">
                mail@example.com
              </a>
              <hr />
              <h2>Find me on</h2>
              <FaFacebook /> <FaInstagram /> <FaYoutube /> <FaTwitter />{" "}
              <FaLinkedin />
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
export default Contact;
