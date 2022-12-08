import React from "react";
import { GiCargoCrate } from "react-icons/gi";
import { BsTruck } from "react-icons/bs";
import { HiOutlineBadgeCheck } from "react-icons/hi";
import "./detail.css";
import Form from "../../pages/contact/Form";

const Dynamic = ({ title, head, word, word1, services, word2 }) => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ maxWidth: "700px", lineHeight: "2.5rem", color: "#433b6d " }}>
      <div className="detail__img">
        <img src={title} alt={head} />
      </div>
      <h1 style={{ color: "#1F425D", paddingBlock: "2rem" }}>{head}</h1>
      {word && <p style={{ color: "#555758" }}>{word}</p>}
      {word1 && <p style={{ color: "#555758" }}>{word1}</p>}
      {services && (
        <div>
          <h2 style={{ color: "#1F425D" }}>What We Offer</h2>
          <ul>
            {services.map((data, index) => (
              <li key={index} style={{ color: "#555758" }}>
                <HiOutlineBadgeCheck className="service__icon" /> {data}
              </li>
            ))}
          </ul>
        </div>
      )}
      {word2 && <p style={{ color: "#555758" }}>{word2}</p>}
      <div className="header__icons">
        <div className="header__divz">
          <GiCargoCrate style={{ fontSize: "4rem", color: "#0693e3" }} />
          <p>inter modal trucking</p>
        </div>
        <div className="header__divz">
          <BsTruck style={{ fontSize: "4rem", color: "#0693e3" }} />
          <p style={{ color: "#555758" }}>domestic modal trucking</p>
        </div>
      </div>
      <div className="detail__sec">
        <h2>Security from Start to Finish</h2>
        <p style={{ color: "#555758" }}>
          Every supply chain is unique, and so are your business requirements.
          We understand it, which is why we are committed to being an integrator
          of end-to-end logistics services. This implies offering different
          solutions that can cater to your every individual supply chain need.
          Experience the comfort of end-to-end deliveries with just a single
          partner, and make your supply chain work to your competitive
          advantage.
        </p>
      </div>
      <div className="detail__contact">
        <h2>Contact Us</h2>
        <Form />
      </div>
    </div>
  );
};

export default Dynamic;
