import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import Home from "./home/Home";
import Detail from '../components/detail/Detail'
import Contact from "./contact/Contact";
import About from "./about/About";

const index = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/detail/:page' element={<Detail />} />
        <Route path='/detail/contact' element={<Contact />} />
        <Route path='/detail/about' element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default index;
