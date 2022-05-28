import TypeAnimation from "react-type-animation";
import "./header1.css";
import {BsFillArrowDownCircleFill} from 'react-icons/bs'

const Header1 = () => {
  return (
    <div className="headerContainer">
      <div className="header__wrapper center">
      <div className="header__div"/>
        <h1>MARITIME SHIPPING COMPANY</h1>
        <TypeAnimation
          className="animation"
          cursor={true}
          sequence={[
            "SEA FREIGT",
            2000,
            "AIR FREIGT",
            2000,
            "WARE HOUSING",
            2000,
            "DISTRIBUTION & DELIVERY",
            2000,
            "CONTAINER LOAD & SHIPPING LINE",
            2000,
            "INLAND TRANSPORT",
            2000,
            "OIL, DANGEROUS CARGO & RELIEF LOGISTICS",
            2000
          ]}
          wrapper="h4"
          repeat={Infinity}
        />
      </div>
        <BsFillArrowDownCircleFill className="header__icon"/>
    </div>
  );
};

export default Header1;
