import "./why.css";
import { IoIosBasketball } from "react-icons/io";
import { GrUserExpert } from "react-icons/gr";
import { BiTime } from "react-icons/bi";
import { MdOutlineGppGood } from "react-icons/md";

const data = [
  {
    id: 1,
    icon: <IoIosBasketball />,
    head: "World Wide",
    para: `We provide our services to all countries in the world in a
    performance level`,
  },
  {
    id: 2,
    icon: <GrUserExpert className="look" />,
    head: "Experts And profession",
    para: `We provide our services to all countries in the world in a
    performance level`,
  },
  {
    id: 3,
    icon: <BiTime />,
    head: "Friendly And Timely",
    para: `We provide our services to all countries in the world in a
    performance level`,
  },
  {
    id: 4,
    icon: <MdOutlineGppGood />,
    head: "Long Experience",
    para: `We provide our services to all countries in the world in a
    performance level`,
  },
];

const Why = () => {
  return (
    <div className="why__container">
      <div className="why__wrapper">
        <div className="why__content">
          <h2>Why Choose Us</h2>
          <p>This is why you shold choose us</p>
        </div>
        <div className="why__grid">
          {data.map(({ id, icon, para,head }) => (
            <div className="why__flex" key={id}>
              <p className="icon">{icon}</p>
              <div>
                <h3>{head}</h3>
                <p>{para}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Why;
