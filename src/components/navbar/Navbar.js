import React from "react";
import { Link } from "react-router-dom";
import { MdTableRows } from "react-icons/md";
import { GiCancel } from "react-icons/gi";
import "./navbar.css";

const Navbar = () => {
  const [offSet, setOffset] = React.useState(0);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset);
    };
  }, []);

  let loc = window.location.pathname.includes("/detail/");

  return (
    <div className="navbar">
      <div
        className={offSet > 40 || loc ? "navbarContainer1" : "navbarContainer"}
      >
        <h1 style={{ marginLeft: "2rem", fontSize: "3rem" }}>Maritime</h1>
        <div className={`${'navbarLinks'} ${open ? 'active' : '' }`}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <div className="nav__drop">
                <button className="nav__btn">Services</button>
                <div className="dropdown__menu">
                  <div>
                    <div class="dropdown-links">
                      <p>
                        <Link to="/detail/clear">Clearing and Forwarding</Link>
                      </p>
                      <p>
                        <Link to="/detail/ware">
                          Warehousing / Distribution
                        </Link>
                      </p>
                      <p>
                        <Link to="/detail/land">Land Transport</Link>
                      </p>
                      <p>
                        <Link to="/detail/water">Ocean Freight</Link>
                      </p>
                      <p>
                        <Link to="/detail/air">Air Freight</Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/detail/contact">Contact</Link>
            </li>
          </ul>
        </div>
        {open ? (
          <div className="iconContainer" onClick={() => setOpen(false)}>
          <GiCancel className='toggleIcon'  />
          </div>
        ) : (
          <div className="iconContainer" onClick={() => setOpen(true)}>
          <MdTableRows className='toggleIcon'  />
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
