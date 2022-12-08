import "./service.css";
import { RiShipLine } from "react-icons/ri";
import { IoAirplaneOutline } from "react-icons/io5";
import { GiRoad } from "react-icons/gi";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { CgBox } from "react-icons/cg";
import { AiOutlineContainer } from "react-icons/ai";
import { MdOutlineDangerous } from "react-icons/md";
import { MdOutlineDeliveryDining } from "react-icons/md";
import { GiCargoCrate } from "react-icons/gi";
import { Link } from "react-router-dom";

import img1 from "../../assets/images/car.jpg";
import img2 from "../../assets/images/land.jpg";
import img3 from "../../assets/images/sea.jpg";
import img4 from "../../assets/images/ware.jpeg";
import img5 from "../../assets/images/in.jpg";
import img6 from "../../assets/images/fg.jpg";
import Begin from "../begin/Begin";
import Begi from "../../assets/images/luck.jpg";

const data = [
  {
    id: 3,
    icon: <IoAirplaneOutline />,
    head: "AIR FREIGT",
    para: `We provide airline dealings, storage, VAT and import duty,
    postponement`,
    route: "/detail/air",
    img: img1,
  },
  {
    id: 2,
    icon: <RiShipLine />,
    head: "SEA FREIGT",
    para: `We handle sea freight (general cargo, specialized cargo and
      heavy equipment. Clients gets maximum value for their money.`,
    route: "/detail/water",
    img: img3,
  },
  {
    id: 8,
    icon: <GiRoad />,
    head: "INLAND TRANSPORT",
    para: ` We offer domestic & inter modal trucking e.g. motor ,ocean and
    air carriers`,
    route: "/detail/land",
    img: img2,
  },
  {
    id: 4,
    icon: <CgBox />,
    head: "WARE HOUSING",
    para: `We offer warehousing service & prepare documentation ,
    verification and exiting goods to your premises`,
    route: "/detail/ware",
    img: img4,
  },
  {
    id: 5,
    icon: <MdOutlineDeliveryDining />,
    head: "DISTRIBUTION & DELIVERY",
    para: `We offer Distribution & delivery services (door to door). we
    integrate ship ,air, rail and road transport for you to get the
    best`,
    route: "/detail/ware",
    img: Begi,
  },
  {
    id: 7,
    icon: <MdOutlineVerifiedUser />,
    head: "INSURANCE",
    para: `We have clients get customs & freight insurance , financial
    guarantee & insurance bonds`,
    route: "/detail/insurance",
    img: img5,
  },
  {
    id: 1,
    icon: <GiCargoCrate />,
    head: "General Cargo",
    para: `We handle all IMPORT & EXPORT goods from all destinations in
    Europe, USA, UK, China ,Japan, UAE Dubai, SADC, EAC countries`,
    route: "/",
    img: img6,
  },
  {
    id: 6,
    icon: <AiOutlineContainer />,
    head: "CONTAINER LOAD & SHIPPING LINE",
    para: `We handle various group page cargo, part & full container loads,
    all documentation. We offer incentives`,
    route: "/detail/container",
    img: img4,
  },
  {
    id: 9,
    icon: <MdOutlineDangerous />,
    head: "OIL,DANGEROUS CARGO & RELIEF LOGISTICS",
    para: ` We handle oil, other dangerous cargo, aids and relief cargo
    logistics`,
    route: "/",
    img: img6,
  },
];

const Services = () => {
  return (
    <div style={{ background: "#1F425D", paddingBlock: "4rem" }}>
      <div
        style={{
          maxWidth: "1020px",
          width: "100%",
          margin: "0 auto",
        }}
      >
        <div>
          <div>
            <Begin head="Services" para="All Services" />
          </div>
          <h2
            style={{
              color: "#fff",
              marginTop: "-40px",
              marginBottom: "2rem",
              fontSize: "3rem",
            }}
          >
            What <span style={{ color: "#0693e3" }}>We Do</span>
          </h2>
        </div>
        <div className="services-grid">
          {data.map(({ id, icon, head, para, route, img }) => (
            <div className="hello" key={id}>
              <div className="services-col-grid">
                <div className="service__content">
                  {/* 077114475 */}
                  <div className="service__image">
                    <img src={img} alt="" />
                  </div>
                  <div className="service__textz">
                    <h2 style={{ marginBlock: "1rem" }}>{head}</h2>
                    <div className="service__content1">
                      <p>{para}</p>
                    </div>
                    {head === "OIL,DANGEROUS CARGO & RELIEF LOGISTICS" ||
                    head === "General Cargo" ? (
                      ""
                    ) : (
                      <p className="part">
                        <Link to={route}>Read More</Link>
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
