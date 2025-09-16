import React from "react";
import Hero from "../Components/Hero";
import About from "../Components/About";
import Features from "../Components/Features";
import ProgramBenefits from "../Components/ProgramBenefits";
import Details from "../Components/Details";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <ProgramBenefits />
      <Details />
      <Features />
    </div>
  );
};

export default Home;
