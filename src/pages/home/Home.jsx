import Header1 from "../../components/header1/Header1";
import Services from "../../components/service/Services";
import Sector from "../../components/sector/Sector";
import "./Home.css";
import Why from "../../components/why/Why";
import React from "react";
import Banner from '../../components/banner/Banner'
import Client from '../../components/client/Client'
import AboutSection from "../../components/about_section/AboutSection";
import Last from "../../components/last/Last";

const Home = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div>
      <Header1 />
      <AboutSection />
      {/* <Why /> */}
      <Services />
      <Sector />
      <Client />
      <Banner />
      <Last />
    </div>
  );
};

export default Home;
