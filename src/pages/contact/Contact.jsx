import "./contact.css";
import Map from "./Map";
// import emailjs from "@emailjs/browser";
import { GrMapLocation } from "react-icons/gr";
import { AiOutlineMail } from "react-icons/ai";
import { CgPhone } from "react-icons/cg";
import React from "react";
import Form from "./Form";
import Begin from "../../components/begin/Begin";
import Banner from "../../components/banner/Banner";

const Contact = () => {
  let loc = window.location.pathname;

  // const form = useRef();

  // const handleSubmit = (event) => {
  //   event.preventDefault();

  //   emailjs
  //     .sendForm(
  //       "service_nx7edai",
  //       "template_5sgzq3q",
  //       form.current,
  //       "pjiNHTJo84E9K5tuy"
  //     )
  //     .then(
  //       (result) => {
  //         console.log("sent", result.text);
  //         form.current.reset();
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       }
  //     );
  // };

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="contact__head">
        <div className="contact__flap">
          <h2>Contact</h2>
          <p>you're on {loc}</p>
        </div>
      </div>
      <div className="contact__container">
        <div className="contact__wrapper">
         
            <div className="contact__lead">
              <div>
                <Begin head="Contact" para="Fil the Form" />
                <h2
                  style={{
                    marginTop: "-40px",
                    marginBottom: "2rem",
                    fontSize: "3rem",
                  }}
                >
                  Get In Touch
                </h2>
              </div>
            </div>
          
          <div className="contact__form">
            <div>
              <Map />
            </div>
            <Form />
          </div>
          <Banner />
        </div>
      </div>
    </>
  );
};

export default Contact;
