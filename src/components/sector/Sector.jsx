import img from "../../assets/images/1.jpg";
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
      <div className="sector__wrapper sector__flex">
        <div className="sector__content1">
          <h2>INDUSTRY SECTORS COVERAGE</h2>
          <p style={{ color: "#abb8c3", width: '550px' }}>
            A specialized service in handing and management of import cargo such
            as;
          </p>
          <p className="sector">
            <GiCargoCrate className="sector__icons" /> General cargo
          </p>
          <p className="sector">
            <AiOutlineProject className="sector__icons" />
            Project cargo
          </p>
          <p className="sector">
            <AiOutlineCar className="sector__icons" /> Vehicles
          </p>
          <p className="sector">
            <GiMetalPlate className="sector__icons" />
            Plastics, steel & machinery
          </p>
          <p className="sector">
            <GiMinerals className="sector__icons" />
            Oil, extractives & minerals
          </p>
          <p className="sector">
            <BsBoxSeam className="sector__icons" />
            Specialized equipment
          </p>
          <p className="sector">
            <SiXdadevelopers className="sector__icons" />
            Consumables (electronics, clothing, etc.)
          </p>
        </div>
        <div className="sector__img">
          <img src={img} alt="sector" />
        </div>
      </div>
    </div>
  );
};

export default Sector;
