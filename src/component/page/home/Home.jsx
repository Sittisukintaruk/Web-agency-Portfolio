import React from "react";
import Client from "./Client";
import Hero from "./Hero";
import Services from "./Services";
import Team from "./Team";
import Works from "./Works";
import Testmonail from "../../Testmonail";
const Home = () => {
  return (
    <>
      <Hero />
      <Client />
      <Services />
      <Team />
      <Works />
      <Testmonail />
    </>
  );
};

export default Home;
