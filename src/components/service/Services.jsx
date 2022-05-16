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

const Services = () => {
  return (
    <div
      style={{
        maxWidth: "1020px",
        width: "100%",
        margin: "0 auto",
      }}
    >
      <div className="services-grid">
        <div className="services-col-grid">
          <div style={{ maxWidth: "300px", marginLeft: "30px" }}>
            <h3 style={{ marginBlock: "2rem", fontSize: "3rem" }}>
              <GiCargoCrate />
            </h3>
            <h2 style={{ marginBlock: "1rem" }}>General cargo</h2>
            <div style={{ height: "90px" }}>
              <p>
                We handle all IMPORT & EXPORT goods from all destinations in
                Europe, USA, UK, China ,Japan, UAE Dubai, SADC, EAC countries
              </p>
            </div>
            <p style={{ marginBlock: "2rem" }}>Read More</p>
          </div>
        </div>
        <div className="services-col-grid">
          <div style={{ maxWidth: "300px", marginLeft: "30px" }}>
            <h3 style={{ marginBlock: "2rem", fontSize: "3rem" }}>
              <RiShipLine />
            </h3>
            <h2 style={{ marginBlock: "1rem" }}>SEA FREIGT</h2>
            <div style={{ height: "90px" }}>
              <p>
                We handle sea freight (general cargo, specialized cargo and
                heavy equipment. Clients gets maximum value for their money.
              </p>
            </div>
            <p style={{ marginBlock: "2rem" }}>Read More</p>
          </div>
        </div>
        <div className="services-col-grid">
          <div style={{ maxWidth: "300px", marginLeft: "30px" }}>
            <h3 style={{ marginBlock: "2rem", fontSize: "3rem" }}>
              <IoAirplaneOutline />
            </h3>
            <h2 style={{ marginBlock: "1rem" }}>AIR FREIGT</h2>
            <div style={{ height: "90px" }}>
              <p>
                We provide airline dealings, storage, VAT and import duty,
                postponement
              </p>
            </div>
            <p style={{ marginBlock: "2rem", cursor: "pointer" }}>Read More</p>
          </div>
        </div>
        <div className="services-col-grid">
          <div style={{ maxWidth: "300px", marginLeft: "30px" }}>
            <h3 style={{ marginBlock: "2rem", fontSize: "3rem" }}>
              <CgBox />
            </h3>
            <h2>WARE HOUSING</h2>
            <div style={{ height: "90px" }}>
              <p>
                We offer warehousing service & prepare documentation ,
                verification and exiting goods to your premises
              </p>
            </div>
            <p style={{ marginBlock: "2rem", cursor: "pointer" }}>Read More</p>
          </div>
        </div>
        <div className="services-col-grid">
          <div style={{ maxWidth: "300px", marginLeft: "30px" }}>
            <h3 style={{ marginBlock: "2rem", fontSize: "3rem" }}>
              <MdOutlineDeliveryDining />
            </h3>
            <h2>DISTRIBUTION & DELIVERY</h2>
            <div style={{ height: "90px" }}>
              <p>
                We offer Distribution & delivery services (door to door). we
                integrate ship ,air, rail and road transport for you to get the
                best
              </p>
            </div>
            <p style={{ marginBlock: "2rem", cursor: "pointer" }}>Read More</p>
          </div>
        </div>
        <div className="services-col-grid">
          <div style={{ maxWidth: "300px", marginLeft: "30px" }}>
            <h3 style={{ marginBlock: "2rem", fontSize: "3rem" }}>
              <AiOutlineContainer />
            </h3>
            <h2>CONTAINER LOAD & SHIPPING LINE</h2>
            <div style={{ height: "90px" }}>
              <p>
                We handle various group page cargo, part & full container loads,
                all documentation. We offer incentives
              </p>
            </div>
            <p style={{ marginBlock: "2rem", cursor: "pointer" }}>Read More</p>
          </div>
        </div>
        <div className="services-col-grid">
          <div style={{ maxWidth: "300px", marginLeft: "30px" }}>
            <h3 style={{ marginBlock: "2rem", fontSize: "3rem" }}>
              <MdOutlineVerifiedUser />
            </h3>
            <h2>INSURANCE</h2>
            <div style={{ height: "90px" }}>
              <p>
                We have clients get customs & freight insurance , financial
                guarantee & insurance bonds
              </p>
            </div>
            <p style={{ marginBlock: "2rem", cursor: "pointer" }}>Read More</p>
          </div>
        </div>
        <div className="services-col-grid">
          <div style={{ maxWidth: "300px", marginLeft: "30px" }}>
            <h3>
              <GiRoad style={{ marginBlock: "2rem", fontSize: "3rem" }} />
            </h3>
            <h2>INLAND TRANSPORT</h2>
            <div style={{ height: "90px" }}>
              <p>
                We offer domestic & inter modal trucking e.g. motor ,ocean and
                air carriers
              </p>
            </div>
            <p style={{ marginBlock: "2rem", cursor: "pointer" }}>Read More</p>
          </div>
        </div>
        <div className="services-col-grid">
          <div style={{ maxWidth: "300px", marginLeft: "30px" }}>
            <h3>
              <MdOutlineDangerous
                style={{ marginBlock: "2rem", fontSize: "3rem" }}
              />
            </h3>
            <h2>OIL, DANGEROUS CARGO & RELIEF LOGISTICS</h2>
            <div style={{ height: "90px" }}>
              <p>
                We handle oil, other dangerous cargo, aids and relief cargo
                logistics
              </p>
            </div>
            <p style={{ marginBlock: "2rem", cursor: "pointer" }}>Read More</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
