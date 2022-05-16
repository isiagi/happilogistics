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
          <p>
            A specialized service in handing and management of import cargo such
            as;
          </p>
          <p style={{ fontSize: "1.2rem",fontWeight: "light" }}>
            <GiCargoCrate style={{ fontSize: "2.5rem" }}/> General cargo
          </p>
          <p style={{ fontSize: "1.2rem",fontWeight: "light" }}>
            <AiOutlineProject style={{ fontSize: "2.5rem" }}/> 
            Project cargo
          </p>
          <p style={{ fontSize: "1.2rem",fontWeight: "light" }}>
            <AiOutlineCar style={{ fontSize: "2.5rem" }}/> Vehicles
          </p>
          <p style={{ fontSize: "1.2rem",fontWeight: "light" }}>
            <GiMetalPlate style={{ fontSize: "2.5rem" }}/>
            Plastics, steel & machinery
          </p>
          <p style={{ fontSize: "1.2rem",fontWeight: "light" }}>
            <GiMinerals style={{ fontSize: "2.5rem" }}/>
            Oil, extractives & minerals
          </p>
          <p style={{ fontSize: "1.2rem",fontWeight: "light" }}>
            <BsBoxSeam style={{ fontSize: "2.5rem" }}/>
            Specialized equipment
          </p>
          <p style={{ fontSize: "1.2rem",fontWeight: "light" }}>
            <SiXdadevelopers style={{ fontSize: "2.5rem" }}/>
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
