import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import "./contact.css";

function Form() {
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
          console.log("sent", result.text);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div>
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
