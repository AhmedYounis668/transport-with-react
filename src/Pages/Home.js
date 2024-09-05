import React from "react";
import Slider from "../Component/home/Slider";
import DriverCards from "../Component/home/DriverCards";
import OurCars from "../Component/home/OurCars";
import WhyUs from "../Component/home/WhyUs";
import CustomersOpinion from "../Component/home/CustomersOpinion";
import Navbasr from "../Component/home/Navbasr";
import Footer from "../Component/Footer/Footer";
import FooterForMe from "../Component/Footer/FooterForMe";

const Home = () => {
  return (
    <div>
      <Navbasr />
      <Slider />
      <DriverCards />
      <OurCars />
      <WhyUs />
      <CustomersOpinion />
      <Footer />
    </div>
  );
};

export default Home;
