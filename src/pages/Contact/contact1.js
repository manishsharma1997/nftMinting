import React, { useRef,useEffect, useState } from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import ReCAPTCHA from "react-google-recaptcha";
import { useFormik } from "formik";
import * as yup from "yup";
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
  const Ref = useRef();
  const cpRef = useRef();
  const [msg,setMsg] = useState('');
  
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      mail: "",
      subject: "",
    },
    validationSchema: yup.object({
      firstname: yup.string().required("*Firstname is required"),
      lastname: yup.string().required("*Lastname is required"),
      mail: yup.string().email().required("*Email is required"),
      subject: yup.string().required("*Message is required"),
    }),
    onSubmit: (values) => {
      console.log(values);
      if (cpRef.current.getValue()){
        setMsg('')
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, Ref.current, USER_ID).then(
          (result) => {
            console.log(result.text);
            Swal.fire({
              icon: "success",
              title: "Message Sent",
            });
            formik.resetForm();
            cpRef.current.reset()
          },
          (error) => {
            console.log(error.text);
            Swal.fire({
              icon: "error",
              title: "Oops, Something went wrong",
              text: error.text,
            });
          }
        );
      }
      else if(!cpRef.current.getValue()){
        setMsg(("Plz verify you are human!"))
      }
  
    },
  });

  return (
    <section id="contact" className="contact_section">
      <div className="container">
        <h1 id="contact-title">Contact</h1>
        <div id="contact-container">
          <div className="row gy-5 gy-lg-0">
            <div className="col-lg-8">
              <form ref={Ref} id="contact-form" onSubmit={formik.handleSubmit}>
                <div id="name-container">
                  <div className="col">
                    <input
                      id="first-name-input"
                      type="text"
                      name="firstname"
                      className="name"
                      value={formik.values.firstname}
                      onChange={formik.handleChange}
                      placeholder="First name"
                    ></input>
                    {formik.touched.firstname && formik.errors.firstname && (
                      <p className="error">{formik.errors.firstname}</p>
                    )}
                  </div>
                  <div className="col">
                    <input
                      id="last-name-input"
                      type="text"
                      name="lastname"
                      className="name"
                      value={formik.values.lastname}
                      onChange={formik.handleChange}
                      placeholder="Last name"
                    ></input>
                    {formik.touched.lastname && formik.errors.lastname && (
                      <p className="error">{formik.errors.lastname}</p>
                    )}
                  </div>
                </div>
                <input
                  id="mail-input"
                  type="mail"
                  name="mail"
                  placeholder="Email"
                  value={formik.values.mail}
                  onChange={formik.handleChange}
                  
                ></input>
                {formik.touched.mail && formik.errors.mail && (
                  <p className="error">{formik.errors.mail}</p>
                )}
                <textarea
                  id="subject-input"
                  name="subject"
                  placeholder="Type your message here"
                  value={formik.values.subject}
                  onChange={formik.handleChange}
                  
                ></textarea>
                {formik.touched.subject && formik.errors.subject && (
                  <p className="error">{formik.errors.subject}</p>
                )}
                <ReCAPTCHA
                  ref={cpRef}
                  className="cap my-3"
                  sitekey="6LcXOy4jAAAAAHz2PxEBbL91suKKUz5KoZlJdQ_z"
                  type="image"
                />
                  <p className="error">{msg}</p>
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
