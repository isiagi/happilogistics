import img from "../../assets/images/new.jpg";
import "./sector.css";

import { AiOutlineCar } from "react-icons/ai";
import { GiMetalPlate } from "react-icons/gi";
import { GiCargoCrate } from "react-icons/gi";
import { AiOutlineProject } from "react-icons/ai";
import { BsBoxSeam } from "react-icons/bs";
import { GiMinerals } from "react-icons/gi";
import { SiXdadevelopers } from "react-icons/si";

const Sector = () => {
  return (
    <div className="sector__container">
      <div></div>
      <div className="sector__wrapper sector__flex">
        <div className="sector__content1">
          <div style={{ maxWidth: "300px" }}>
          <div style={{ background: "#2A94E3", height: '5px', width: "15% "}}/>
            <h2 style={{ color: "#1F425D" }}>INDUSTRY SECTORS COVERAGE</h2>
            <p style={{ color: "#abb8c3",fontSize: "1.1em" }}>
              A specialized service in handing and management of import cargo
              such as;
            </p>
          </div>
          <div className="sector__iconz">
            <p>
              <GiCargoCrate className="sector__icons" />
            </p>
            <p style={{ color: "#1F425D", fontSize: "1.3rem", }}>General cargo</p>
          </div>
          <div className="sector__iconz">
            <p>
              <AiOutlineProject className="sector__icons" />
            </p>
            <p style={{ color: "#1F425D", fontSize: "1.3rem", }}>Project cargo</p>
          </div>
          <div className="sector__iconz">
            <p>
              <AiOutlineCar className="sector__icons" />
            </p>
            <p style={{ color: "#1F425D", fontSize: "1.3rem", }}>Vehicles</p>
          </div>
          <div className="sector__iconz">
            <p>
              <GiMetalPlate className="sector__icons" />
            </p>
            <p style={{ color: "#1F425D", fontSize: "1.3rem", }}>Plastics, steel & machinery</p>
          </div>
          <div className="sector__iconz">
            <p>
              <GiMinerals className="sector__icons" />
            </p>
            <p style={{ color: "#1F425D", fontSize: "1.3rem", }}>Oil, extractives & minerals</p>
          </div>

          <div className="sector__iconz">
            <p>
              <BsBoxSeam className="sector__icons" />
            </p>
            <p style={{ color: "#1F425D", fontSize: "1.3rem", }}>Specialized equipment</p>
          </div>

          <div className="sector__iconz">
            <p>
              <SiXdadevelopers className="sector__icons" />
            </p>
            <p style={{ color: "#1F425D", fontSize: "1.3rem", }}>Consumables (electronics, clothing, etc.)</p>
          </div>
        </div>
        <div className="sector__img">
          <img src={img} alt="sector" />
        </div>
      </div>
    </div>
  );
};

export default Sector;
