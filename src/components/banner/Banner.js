import './banner.css';
import { GrMapLocation } from "react-icons/gr";
import { AiOutlineMail } from "react-icons/ai";
import { CgPhone } from "react-icons/cg";

const Banner = () => {
  return (
    <div className="contact__info">
      <div>
        <CgPhone className="icon" />
        <p>+256200906877</p>
        <p>+256706316189</p>
      </div>
      <div>
        <GrMapLocation className="icon" />
        <p>
          Plot 56-60 Kampala road/Entrance D-2nd floor (Room 7), Ambassador
          house
        </p>
      </div>
      <div>
        <AiOutlineMail className="icon" />
        <p>info@maritimeshippingcs.com</p>
        <p>www.maritimeshiooingcs.com</p>
      </div>
    </div>
  );
};

export default Banner;
