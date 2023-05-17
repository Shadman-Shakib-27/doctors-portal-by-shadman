import React from "react";
import Info from "./Info";
import Services from "./Services";
import MoreCard from "./MoreCard";
import MakeAppoinment from "./MakeAppoinment";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import Banner from "./Banner";
import Footer from "../Shared/Footer";

const Home = () => {
  return (
    <div className="lg:px-12">
      <Banner></Banner>
      <Info></Info>
      <Services></Services>
      <MoreCard></MoreCard>
      <MakeAppoinment></MakeAppoinment>
      <Testimonials></Testimonials>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Home;
