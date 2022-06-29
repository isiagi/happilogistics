import Header1 from "../../components/header1/Header1";
import Services from "../../components/service/Services";
import Partner from "../../components/patner/Partner";
import Sector from "../../components/sector/Sector";
import "./Home.css";
import Why from "../../components/why/Why";
import React from "react";
import Banner from '../../components/banner/Banner'

const Home = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div>
      <Header1 />
      <Why />
      <Services />
      <Sector />
      <Partner />
      <Banner />
    </div>
  );
};

export default Home;
