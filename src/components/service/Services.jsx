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

const data = [
  {
    id: 1,
    icon: <GiCargoCrate />,
    head: "General Cargo",
    para: `We handle all IMPORT & EXPORT goods from all destinations in
    Europe, USA, UK, China ,Japan, UAE Dubai, SADC, EAC countries`,
    route: "/detail/air",
  },
  {
    id: 2,
    icon: <RiShipLine />,
    head: "SEA FREIGT",
    para: `We handle sea freight (general cargo, specialized cargo and
      heavy equipment. Clients gets maximum value for their money.`,
    route: "/detail/water",
  },
  {
    id: 3,
    icon: <IoAirplaneOutline />,
    head: "AIR FREIGT",
    para: `We provide airline dealings, storage, VAT and import duty,
    postponement`,
    route: "/detail/air",
  },
  {
    id: 4,
    icon: <CgBox />,
    head: "WARE HOUSING",
    para: `We offer warehousing service & prepare documentation ,
    verification and exiting goods to your premises`,
    route: "/detail/ware",
  },
  {
    id: 7,
    icon: <MdOutlineVerifiedUser />,
    head: "INSURANCE",
    para: `We have clients get customs & freight insurance , financial
    guarantee & insurance bonds`,
    route: "/detail/insurance",
  },
  {
    id: 8,
    icon: <GiRoad />,
    head: "INLAND TRANSPORT",
    para: ` We offer domestic & inter modal trucking e.g. motor ,ocean and
    air carriers`,
    route: "/detail/land",
  },
  {
    id: 5,
    icon: <MdOutlineDeliveryDining />,
    head: "DISTRIBUTION & DELIVERY",
    para: `We offer Distribution & delivery services (door to door). we
    integrate ship ,air, rail and road transport for you to get the
    best`,
    route: "/detail/water",
  },
  {
    id: 6,
    icon: <AiOutlineContainer />,
    head: "CONTAINER LOAD & SHIPPING LINE",
    para: `We handle various group page cargo, part & full container loads,
    all documentation. We offer incentives`,
    route: "/detail/water",
  },
  {
    id: 9,
    icon: <MdOutlineDangerous />,
    head: "OIL,DANGEROUS CARGO & RELIEF LOGISTICS",
    para: ` We handle oil, other dangerous cargo, aids and relief cargo
    logistics`,
    route: "/detail/water",
  },
];

const Services = () => {
  return (
    <div
      style={{
        maxWidth: "1020px",
        width: "100%",
        margin: "5rem auto",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          color: "rgb(210, 53, 53)",
          marginBottom: "2rem",
          fontSize: "2rem",
        }}
      >
        Our Services
      </h2>
      <div className="services-grid">
        {data.map(({ id, icon, head, para, route }) => (
          <div className="hello" key={id}>
            <div className="services-col-grid">
              <div className="service__content">
                <h3>{icon}</h3>
                <h2>{head}</h2>
                <div className="service__content1">
                  <p>{para}</p>
                </div>
                <p className="part">
                  <Link to={route}>Read More</Link>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
