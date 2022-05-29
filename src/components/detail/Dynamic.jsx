import React from "react";
import { GiCargoCrate } from "react-icons/gi";
import { BsTruck } from "react-icons/bs";
import { HiOutlineBadgeCheck } from "react-icons/hi";
import "./detail.css";

const Dynamic = ({ title, head, word, word1, services, word2 }) => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ maxWidth: "700px", lineHeight: "2.5rem", color: '#433b6d '}}>
      <div className="detail__img">
        <img src={title} alt="truck" />
      </div>
      <h1 style={{color: 'rgb(210, 53, 53)'}}>{head}</h1>
      {word && <p>{word}</p>}
      {word1 && <p>{word1}</p>}
      {services && (
        <div>
          <h2 style={{color: 'rgb(210, 53, 53)'}}>What We Offer</h2>
          <ul>
            {services.map((data, index) => (
              <li key={index}>
                <HiOutlineBadgeCheck /> {data}
              </li>
            ))}
          </ul>
        </div>
      )}
      {word2 && <p>{word2}</p>}
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
