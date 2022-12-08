import './banner.css';
import { GrMapLocation } from "react-icons/gr";
import { AiOutlineMail } from "react-icons/ai";
import { CgPhone } from "react-icons/cg";

const Banner = () => {
  return (
    <div className="contact__info">
      <div>
        <CgPhone className="icon" />
        <p style={{color: "#1F425D", fontSize:"1.1em"}}>+256200906877</p>
        <p style={{color: "#1F425D", fontSize:"1.1em"}}>+256706316189</p>
      </div>
      <div>
        <GrMapLocation className="icon" />
        <p style={{color: "#1F425D", fontSize:"1.1em"}}>
          Plot 56-60 Kampala road/Entrance D-2nd floor (Room 7), Ambassador
          house
        </p>
      </div>
      <div>
        <AiOutlineMail className="icon" />
        <p style={{color: "#1F425D", fontSize:"1.1em"}}>info@maritimeshippingcs.com</p>
        <p style={{color: "#1F425D", fontSize:"1.1em"}}>www.maritimeshiooingcs.com</p>
      </div>
    </div>
  );
};

export default Banner;
