import Header1 from "../../components/header1/Header1";
import Services from "../../components/service/Services";
import Client from "../../components/client/Client";
import Partner from "../../components/patner/Partner";
import Sector from "../../components/sector/Sector";
import "./Home.css";
import Why from "../../components/why/Why";
import React from "react";

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
      <Client />
      <Partner />
    </div>
  );
};

export default Home;
