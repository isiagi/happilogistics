import React from "react";
import "./navbar.css";

const Navbar = () => {
  const [offSet, setOffset] = React.useState(0);

  React.useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset);
    };
  }, []);

  return (
    <div className="navbar">
      <div className={offSet > 40 ? "navbarContainer1" : "navbarContainer"}>
        <h1 style={{marginLeft: '2rem', fontSize: '3rem'}}>Maritime</h1>
        <div className="navbarLinks">
          <ul>
            <li>Home</li>
            <li>
              <div className="nav__drop">
                <button className="nav__btn">Services</button>
                <div className="dropdown__menu">
                  <div>
                    <div class="dropdown-links">
                      <p>Clearing and Forwarding</p>
                      <p>Warehousing and Distribution</p>
                      <p>Land Transport</p>
                      <p>Ocean Freight</p>
                      <p>Land Freight</p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
