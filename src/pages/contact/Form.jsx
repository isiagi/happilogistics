import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import "./contact.css";

// info@maritimeshippingcompany.com

function Form() {
  const[sent, setSent] = useState("")
  const form = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    emailjs
      .sendForm(
        "service_nx7edai",
        "template_5sgzq3q",
        form.current,
        "pjiNHTJo84E9K5tuy"
      )
      .then(
        (result) => {
          console.log("sent", result);
          if(result.status === 200) {
            setSent("Your Quote has been sent successfully")
          } else {
            setSent("Error Occured: " + result.text)
          }
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div>
    <div className={sent ? 'form__message' : 'show__none'}>
      <h2>Your Quote has been sent successfully</h2>
      <h3 className="letter__x" onClick={() => setSent("")}>X</h3>
    </div>
      <form ref={form} onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          className="form__input"
          placeholder="Name"
        />
        <br />
        <input
          type="email"
          name="email"
          className="form__input"
          placeholder="Email"
        />
        <br />
        <input
          type="text"
          name="subject"
          className="form__input"
          placeholder="Subject"
        />
        <br />
        <input
          type="text"
          name="number"
          className="form__input"
          placeholder="Tel Number"
        />
        <br />
        <textarea name="message" placeholder="message" rows="6" />
        <br />
        <button className="form__button" type="submit">
          Get A Quote
        </button>
      </form>
    </div>
  );
}

export default Form;
