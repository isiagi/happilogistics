import React from "react";
import { GiCargoCrate } from "react-icons/gi";
import { BsTruck } from "react-icons/bs";
import "./detail.css";


const Dynamic = ({title, head}) => {
    React.useEffect(() => {
        window.scrollTo(0, 0);
      }, []);


  return (
    <div style={{ maxWidth: "700px" }}>
      <div className="detail__img">
        <img src={title} alt="truck" />
      </div>
      <h1>{head}</h1>
      <p>
        Mlkshk quinoa ethical vegan polaroid, 8-bit meggings paleo Bushwick Blue
        Bottle beard cred distillery. Post-ironic Shoreditch typewriter kogi
        church-key squid, umami semiotics. Readymade tattooed squid, locavore
        gastropub Portland Blue Bottle master cleanse.
      </p>
      <p>
        Mlkshk quinoa ethical vegan polaroid, 8-bit meggings paleo Bushwick Blue
        Bottle beard cred distillery. Post-ironic Shoreditch typewriter kogi
        church-key squid, umami semiotics. Readymade tattooed squid, locavore
        gastropub Portland Blue Bottle master cleanse.
      </p>
      <p>
        Mlkshk quinoa ethical vegan polaroid, 8-bit meggings paleo Bushwick Blue
        Bottle beard cred distillery. Post-ironic Shoreditch typewriter kogi
        church-key squid, umami semiotics. Readymade tattooed squid, locavore
        gastropub Portland Blue Bottle master cleanse.
      </p>
      <div className="header__icons">
        <div>
          <GiCargoCrate style={{ fontSize: "4rem", color: "#0693e3" }} />
          <p>inter modal trucking</p>
        </div>
        <div>
          <BsTruck style={{ fontSize: "4rem", color: "#0693e3" }} />
          <p>domestic modal trucking</p>
        </div>
      </div>
    </div>
  );
};

export default Dynamic;
