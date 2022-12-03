import React from "react";
import aboutImg from "../../assets/images/about-air.jpg";
import Begin from "../begin/Begin";

import "./AboutSection.css";

const AboutSection = () => {
  return (
    <div>
      <div>
        <div className="about_section">
          <div>
            <img src={aboutImg} alt="" />
          </div>
          <div>
            <div>
              <Begin head="About" para="With decade’s long experience" />
              <h1 style={{ maxWidth: "100px", color: "#1F425D", fontSize: "3em", marginTop: "0px"}}>Company <span style={{color: "#2A94E3"}}>Overview</span></h1>
            </div>
            <div
              style={{
                maxWidth: "500px",
                lineHeight: "2.5rem",
                fontSize: "1.05em",
                background: "#F7F7F7",
                padding: "16px",
                color: "#555758",
              }}
            >
              <p>
                We offer custom brokerage services. We are friendly and reliable
                With decade’s long experience, our team is ready to serve you in
                a timely and friendly manner. We are competent, dedicated and
                professional. We are experienced providers of aclearing &
                forwarding services. We cover all destinations
              </p>
              <p>
                Uganda, Kenya, Rwanda, DRC Congo, South Sudan, Worldwide
                (Europe, China, USA, UK, Japan, South America, UAE Dubai).
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
