import { Link } from "react-router-dom";
import "./last.css";

const Last = () => {
  return (
    <div className="last__container">
      <div>
        <div>
          <h1 className="btn__head">
            Maritime <span style={{ color: "#2A94E3" }}>Shipping</span>
          </h1>
          <h1 className="btn__head1">
            World’s Leading Contract Logistics Provider
          </h1>
          <button className="btn__last">
            <Link to="/detail/contact">Make Custom Request</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Last;
