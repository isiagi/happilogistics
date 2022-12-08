import React from "react";
import AboutSection from "../../components/about_section/AboutSection";
import Banner from "../../components/banner/Banner";
import Client from "../../components/client/Client";
import Last from "../../components/last/Last";
import Why from "../../components/why/Why";
import "./about.css";

const About = () => {
  let loc = window.location.pathname;

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="about__head">
        <div className="about__flap">
          <h1>About Maritime</h1>
          <p>you're on {loc}</p>
        </div>
      </div>
      <div>
        <div className="about__container">
          <AboutSection />
        </div>
        <Why />
        <Client />
        <div className="about__contain">
          <div className="about__wrapper">
            <Banner />
          </div>
        </div>
        <Last />
      </div>
    </>
  );
};

export default About;
