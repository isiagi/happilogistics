import "./contact.css";
import Map from "./Map";
import { GrMapLocation } from "react-icons/gr";
import { AiOutlineMail } from "react-icons/ai";
import { CgPhone } from "react-icons/cg";

const Contact = () => {
  let loc = window.location.pathname;

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
            <h2>Contact Us</h2>
            <p>We look forward to hearing from you.</p>
          </div>
          <div className="contact__form">
            <div>
              <Map />
            </div>
            <div>
              <form>
                <input type="text" className="form__input" placeholder="Name" />
                <br />
                <input
                  type="email"
                  className="form__input"
                  placeholder="Email"
                />
                <br />
                <textarea placeholder="message" rows="6" />
                <br />
                <button className="form__button">Send</button>
              </form>
            </div>
          </div>
          <div className="contact__info">
            <div>
              <CgPhone className="icon" />
              <p>+256200906877</p>
              <p>+256706316189</p>
            </div>
            <div>
              <GrMapLocation className="icon" />
              <p>
                Plot 56-60 Kampala road/Entrance D-2nd floor (Room 7),
                Ambassador house
              </p>
            </div>
            <div>
              <AiOutlineMail className="icon" />
              <p>info@maritimeshippingcs.com</p>
              <p>www.maritimeshiooingcs.com</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
