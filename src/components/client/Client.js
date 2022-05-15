import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

import "./client.css";

const Client = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="client__container">
      <div className="client__wrapper1">
        <div className="client__wrapper">
          <p
            style={{ marginBlock: "2rem", fontWeight: "bold", fontSize: "1em" }}
          >
            TESTIMONIALS
          </p>
          <h3
            style={{ marginBlock: "2rem", fontWeight: "bold", fontSize: "1.8em" }}
          >
            What Our Clients Say
          </h3>
        </div>

        <Slider {...settings} className="slider">
          <div>
            <p>
              At star times Uganda, we have worked with maritime shipping
              company since 2011. We really appreciate them. Their service is
              very affordable and effective.
            </p>
            <p>
              They have a high degree of convenience and flexibility. They have
              good customer care based on very good mutual under- standing. In
              short I would say maritime is a good clearing com- pany.
            </p>
            <h2>NSUBUGA JAMES, </h2>
            <h3>Commercial coordinator</h3>
            <h4>Star Times Uganda </h4>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Client;
