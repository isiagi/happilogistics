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
                return <Dynamic title={img1} head="Air Frieght" />;
              case "water":
                return <Dynamic title={img3} head="Water Frieght" />;
              case "land":
                return <Dynamic title={img2} head="Land Transport" />;
              case "ware":
                return (
                  <Dynamic title={img4} head="Warehousing & Distribution" />
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
