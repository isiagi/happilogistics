import Marquee from "react-fast-marquee";
import './partner.css'

const Partner = () => {
  return (
    <div className="partner__container">
    <h2 style={{marginBottom: '2em'}}>OUR CLIENTELE </h2>
        <div className="partner__wrapper">
        <Marquee >
            <h4 className="partner__mar">STAR DIGITAL TEVELVISION </h4>
            <h4 className="partner__mar">YIDING INVESTMENT </h4>
            <h4 className="partner__mar">CABLE CORPORATION </h4>
            <h4 className="partner__mar">JUAN JUAN LTD</h4>
            <h4 className="partner__mar">C POWER </h4>
            <h4 className="partner__mar">RAPID SHIPPING FREIGHT</h4>
            <h4 className="partner__mar">YASINCO TRADING CO. LTD </h4>
            <h4 className="partner__mar">ALITRACO INVESTMENT LTD</h4>
            <h4 className="partner__mar">HOMART INDUSTRIES </h4>
            <h4 className="partner__mar">D & A INTERNATIONAL LTD</h4>
            <h4 className="partner__mar">GENERAL JAPAN </h4>
            <h4 className="partner__mar">MEK ENTERPRISES</h4>
            <h4 className="partner__mar">BLAZER TRADING</h4>
            <h4 className="partner__mar">MARIYAMUNGU AUTO SUPPLIES</h4>
            <h4 className="partner__mar">EAST CONSTRUCTION INVESTMENT LTD</h4>
            <h4 className="partner__mar">HUING TAO INVESTMENT CO. LTD</h4>
        </Marquee>
        </div>
    </div>
  )
}

export default Partner