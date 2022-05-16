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
          <p style={{color:'#abb8c3'}}>
            A specialized service in handing and management of import cargo such
            as;
          </p>
          <p style={{ fontSize: "1.2rem",fontWeight: "light", color: 'rgb(210, 53, 53)'}}>
            <GiCargoCrate style={{ fontSize: "2.5rem", color: '#0693e3' }}/> General cargo
          </p>
          <p style={{ fontSize: "1.2rem",fontWeight: "light", color: 'rgb(210, 53, 53)' }}>
            <AiOutlineProject style={{ fontSize: "2.5rem", color: '#0693e3'  }}/> 
            Project cargo
          </p>
          <p style={{ fontSize: "1.2rem",fontWeight: "light", color: 'rgb(210, 53, 53)' }}>
            <AiOutlineCar style={{ fontSize: "2.5rem", color: '#0693e3'  }}/> Vehicles
          </p>
          <p style={{ fontSize: "1.2rem",fontWeight: "light", color: 'rgb(210, 53, 53)' }}>
            <GiMetalPlate style={{ fontSize: "2.5rem", color: '#0693e3'  }}/>
            Plastics, steel & machinery
          </p>
          <p style={{ fontSize: "1.2rem",fontWeight: "light", color: 'rgb(210, 53, 53)' }}>
            <GiMinerals style={{ fontSize: "2.5rem", color: '#0693e3'  }}/>
            Oil, extractives & minerals
          </p>
          <p style={{ fontSize: "1.2rem",fontWeight: "light", color: 'rgb(210, 53, 53)' }}>
            <BsBoxSeam style={{ fontSize: "2.5rem", color: '#0693e3'  }}/>
            Specialized equipment
          </p>
          <p style={{ fontSize: "1.2rem",fontWeight: "light", color: 'rgb(210, 53, 53)' }}>
            <SiXdadevelopers style={{ fontSize: "2.5rem", color: '#0693e3'  }}/>
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
