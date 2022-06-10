import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer__container">
      <div className="footer__wrapper footer__flex">
        <div>
          <h2>Contact us</h2>
          <ul>
            <li>
              Plot 56-60 Kampala road/Entrance
              <br /> D-2nd floor (Room 7), Ambassador house,
            </li>
            <li>
              TEL:+256200906877 /<br /> mob: +256706316189/+256785339997
            </li>
            <li>Customer care: +256200906877</li>
          </ul>
        </div>
        <div>
          <h2>Quick Links</h2>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/detail/about">About</Link>
            </li>
          </ul>
        </div>
        <div>
          <h2>Company Solutions</h2>
          <ul>
            <li>
              <Link to="/">GENERAL CARGO</Link>
            </li>
            <li>
              <Link to="/detail/water">SEA FREIGT</Link>
            </li>
            <li>
              <Link to="/detail/air">AIR FREIGT</Link>
            </li>
            <li>
              <Link to="/detail/ware">WARE HOUSING</Link>
            </li>
            <li>
              <Link to="/">DISTRIBUTION &DELIVERY</Link>
            </li>
            <li>
              <Link to="/">CONTAINER LOAD & SHIPPING LINE</Link>
            </li>
            <li>
              <Link to="/">INSURANCE</Link>
            </li>
            <li>
              <Link to="/detail/land">INLAND TRANSPORT</Link>
            </li>
            <li>
              <Link to="/">OIL, DANGEROUS CARGO & RELIEF LOGISTICS</Link>
            </li>
          </ul>
        </div>
        <div style={{ textAlign: "center" }}>
          <h2>Maritime Shipping Company</h2>
          {/* <p>
            We are shipping, logistics company located in uganda.We offer custom
            brokerage services.
          </p> */}
          <p>All Rights Reserved @ 2022</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
