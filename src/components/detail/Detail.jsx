import React from "react";
import { Link, useParams } from "react-router-dom";
import "./detail.css";
import Dynamic from "./Dynamic";

import img1 from "../../assets/images/car.jpg";
import img2 from "../../assets/images/land.jpg";
import img3 from "../../assets/images/sea.jpg";
import img4 from "../../assets/images/ware.jpeg";

const Detail = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let loc = window.location.pathname;

  const para = useParams();

  const heading = () => {
    switch (para.page) {
      case "air":
        return "Air Frieght";
      case "water":
        return "Water Frieght";
      case "land":
        return "Land Transport";
      case "ware":
        return "Warehousing & Distribution";
      default:
        return null;
    }
  };

  return (
    <>
      <div className="detail__head">
        <div className="detail__flap">
          <h2>{heading()}</h2>
          <p>you're on {loc}</p>
        </div>
      </div>
      <div className="detail__container">
        <div className="detail__wrapper detail__flex">
          {(() => {
            switch (para.page) {
              case "air":
                return (
                  <Dynamic
                    title={img1}
                    head="Air Frieght"
                    word="We offer airport-to-airport Air Freight Services worldwide to any airport worldwide with customs clearance services available anywhere."
                    word1="We have excellent relationship with all major shipping lines and enjoy. Need it urgent, need it to be delivered within a limited time. Air freight is the ideal option for time constraint shipments"
                    services={[
                      "Pickup of cargo from your Door step",
                      "Flight booking to match your requirements",
                      "Flight booking to match your requirements",
                    ]}
                  />
                );
              case "water":
                return (
                  <Dynamic
                    title={img3}
                    head="Water Frieght"
                    word="Maritime Logistics offers a robust and efficient Sea freight service from the UK. With over 20 years’ experience in the Industry we pride ourselves on achieving results above expectations."
                    word1="Our worldwide network covering over 140 countries enables us to handle all our clients Import, Export and Cross trade Sea Cargo movements of all types globally door to door while providing them with the technical expertise related to the proper documents needed for various banks and LC’s"
                    services={[
                      "Full container (FCL) of all sizes",
                      "Partial Shipment (LCL – Less Container Load)",
                      "Full and Part Charter services",
                      "Project Sea Freight Cargo",
                      "Cross & Exhibition shipments",
                      "Break Bulk and RORO cargo",
                      "Global Groupage/ Consolidation service",
                      "Flexible freight options (Direct / Transshipment)",
                      "Trans-shipment Cargo (Multimodal Sea – Air/Land)",
                    ]}
                  />
                );
              case "land":
                return (
                  <Dynamic
                    title={img2}
                    head="Land Transport"
                    word="As part of our commitment to comprehensive door to door service to our clients, Maritime utilizes its years of freight experience in offering its clients the highest level of land transport service to:"
                    services={[
                      "Door pick and door deliveries",
                      "Transportation of standard containers",
                      "Providing assistance in obtaining road permissions and escort movement",
                      "Movement of smaller cargo via 3 ton, 7 ton an 10 ton picks up",
                    ]}
                    word2="In East Africa, we connect the coastal regions with the inland markets in the hinterland with our own vehicles and use a GPS-controlled monitoring system and checkpoints along the transit route to ensure that vehicles and cargo arrive on time at their destination."
                  />
                );
              case "ware":
                return (
                  <Dynamic
                    title={img4}
                    head="Warehousing & Distribution"
                    word="We offer a variety of storage and distribution solutions through a network of local and regional warehouses. Our agent warehouses are equipped to handle just about any scale of commercial storage needs."
                    services={[
                      "Pick and pack",
                      "Special handling",
                      "Repacking",
                      "Bonded warehousing",
                      "Warehouse and inventory management",
                    ]}
                  />
                );
              case "insurane":
                return (
                  <Dynamic title={img1} head="CONTAINER LOAD & SHIPPING LINE" />
                );
              case "work":
                return <Dynamic title={img1} head="Work Abroad" />;
              default:
                return <Dynamic title={img1} head="Air Frieght" />;
            }
          })()}

          <div className="detail__container2">
            <div className="detail__content">
              <h3 style={{ fontWeight: "500", color: "#0693e3" }}>Services</h3>
              <ul>
                <li>
                  <Link to="/detail/land">Road transport</Link>
                </li>
                <li>
                  <Link to="/detail/air">Air frieght</Link>
                </li>
                <li>
                  <Link to="/detail/water">Water frieght</Link>
                </li>
                <li>
                  <Link to="/detail/distribution">Distribution & Delivery</Link>
                </li>
                <li>
                  <Link to="/detail/ware">Ware housing</Link>
                </li>
                <li>
                  <Link to="/detail/insurance">Cargo insurance</Link>
                </li>
                <li>
                  <Link to="/detail/shipping">
                    Container Load & Shipping line
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
