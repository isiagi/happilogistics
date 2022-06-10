import React from "react";
import Banner from "../../components/banner/Banner";
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
          <div className="about__wrapper">
            <h1>About Us</h1>
            <p>
              We are shipping, logistics company located in uganda.We offer
              custom brokerage services. We are friendly and reliable With
              decade’s long experience, our team is ready to serve you in a
              timely and friendly manner. We are competent, dedicated and
              professional. We are experienced providers of aclearing &
              forwarding services.
            </p>
            <div className="about__mission">
              <h2>Our Mission</h2>
              <p>
                Services quality and innovation to create sustainable growth for
                business and society
              </p>
            </div>
            <div className="about__value">
              <h2>Our Values</h2>
              <div className="about__grid">
                <div>
                  <h3>1. Connected</h3>
                  <ul>
                    <li>
                      we invest in insight to get the heart of our cus- tomer’s
                      challenges. We are open and transparent in the way we work
                    </li>
                    <li>
                      Deeply involved in building relationships— everything we
                      do is with the long term in mind. Our dedication to
                      quality is the cornerstone of our success – we get every
                      detail right
                    </li>
                  </ul>
                </div>
                <div>
                  <h3>2. Creative</h3>
                  <ul>
                    <li>
                      We are constantly developing better ways of working. If we
                      find a better way, we act upon it and share it.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Why />
        <div className="about__contain">
          <div className="about__wrapper">
            <Banner />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
