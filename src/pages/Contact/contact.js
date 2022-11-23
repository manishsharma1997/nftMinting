import React from "react";
import { useState } from 'react';
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import ReCAPTCHA from "react-google-recaptcha";

import "./contact.css";
import {
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";


 


function Contact() {
  
  const SERVICE_ID = "service_f77heti";
    const TEMPLATE_ID = "template_tpn1y8r";
    const USER_ID = "pZCibbDYFnuFsq-iT";


  const [msg, setmsg] = useState("");

  const validEmail = (e) => {
    if (/^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/i.test(e.target.value)) {
      setmsg("");
    } else if (e.target.value == "") {
      setmsg("");
    } else {
      setmsg("Please enter a valid email");
    }
  };


  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
      .then((result) => {
        console.log(result.text);
        Swal.fire({
          icon: 'success',
          title: 'Message Sent'
        })
      }, (error) => {
        console.log(error.text);
        Swal.fire({
          icon: 'error',
          title: "Oops, Something went wrong",
          text: error.text,
        })
      });
    e.target.reset()
  };


  return (
    <section id="contact" className="contact_section">
      <div className="container">
      <h1 id="contact-title">Contact</h1>
      <div id="contact-container">
        <div className="row gy-5 gy-lg-0">
          <div className="col-lg-8">
            <form id="contact-form" onSubmit={handleOnSubmit}>
              <div id="name-container">
                <input
                  id="first-name-input"
                  type="text"
                  name="first-name"
                  placeholder="First name"
                  required
                ></input>
                <input
                  id="last-name-input"
                  type="text"
                  name="last-name"
                  placeholder="Last name"
                  required
                ></input>
              </div>

              <input
                id="mail-input"
                type="mail"
                name="mail"
                placeholder="Email"
                onChange={validEmail}
                required
              ></input>
              {msg && <p>{msg}</p>}

              <textarea
                id="subject-input"
                name="subject"
                placeholder="Type your message here"
                required
              ></textarea>

              <ReCAPTCHA className="cap my-3" sitekey="6LeBUiYjAAAAAPqB09Wm5copcQvPyzleUHkoN7gw" />

              <input id="submit-button" type="submit" value="Submit" />
            </form>
          </div>
          <div className="col-lg-4">
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
