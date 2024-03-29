import React from "react";
import { Link } from "react-router-dom";
import { MdTableRows } from "react-icons/md";
import { GiCancel } from "react-icons/gi";
import "./navbar.css";

const Navbar = () => {
  const [offSet, setOffset] = React.useState(0);
  const [open, setOpen] = React.useState(false);

  // const location = useLocation();

  React.useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset);
    };
  }, []);

  // React.useEffect(() => {

  // }, [location]);

  // let loc = window.location.pathname.includes("/detail/");

  return (
    <div className="navbar">
      <div
        className={offSet > 40 ? "navbarContainer1" : "navbarContainer"}
      >
        <h1 style={{ marginLeft: "2rem", fontSize: "3rem" }}>
          <Link to="/" onClick={() => setOpen(false)}>
            Maritime
          </Link>
        </h1>
        <div className={`${"navbarLinks"} ${open ? "active" : ""}`}>
          <ul>
            <li>
              <Link to="/" onClick={() => setOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <div className="nav__drop">
                <button className="nav__btn">Services</button>
                <div className="dropdown__menu">
                  <div>
                    <div className="dropdown-links">
                      <p>
                        <Link
                          to="/detail/insurance"
                          onClick={() => setOpen(false)}
                        >
                          Insurance
                        </Link>
                      </p>
                      <p>
                        <Link to="/detail/ware" onClick={() => setOpen(false)}>
                          Warehousing / Distribution
                        </Link>
                      </p>
                      <p>
                        <Link to="/detail/land" onClick={() => setOpen(false)}>
                          Land Transport
                        </Link>
                      </p>
                      <p>
                        <Link to="/detail/water" onClick={() => setOpen(false)}>
                          Ocean Freight
                        </Link>
                      </p>
                      <p>
                        <Link to="/detail/air" onClick={() => setOpen(false)}>
                          Air Freight
                        </Link>
                      </p>
                      <p>
                        <Link
                          to="/detail/container"
                          onClick={() => setOpen(false)}
                        >
                          Container Load & Shipping line
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <Link to="/detail/about" onClick={() => setOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <Link to="/detail/contact" onClick={() => setOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="quote">
          <Link to="/detail/contact" onClick={() => setOpen(false)}>
            Get A Quote
          </Link>
        </div>
        {open ? (
          <div className="iconContainer" onClick={() => setOpen(false)}>
            <GiCancel className="toggleIcon" />
          </div>
        ) : (
          <div className="iconContainer" onClick={() => setOpen(true)}>
            <MdTableRows className="toggleIcon" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
