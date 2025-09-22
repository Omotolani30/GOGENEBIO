import Hero from "../Components/Hero";
import Features from "../Components/Features";
import ProgramBenefits from "../Components/ProgramBenefits";
import Details from "../Components/Details";
import SectionTwo from "../Components/SectionTwo";

const Home = () => {
  return (
    <div>
      <Hero/>
      <SectionTwo />
      <ProgramBenefits />
      <Details />
      <Features />
    </div>
  );
};

export default Home;
