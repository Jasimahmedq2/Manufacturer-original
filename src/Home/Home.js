import React from "react";
import Footer from "../Page/Share/Footer";
import ScrollButton from "../Page/Share/ScrollButton";
import Banner from "./Banner";
import Businessmen from "./Businessmen";
import Reviews from "./Reviews";
import Tools from "./Tools";

const Home = () => {
  return (
    <div>
      <Banner />
      <Tools />
      <Businessmen />
      <Reviews />
      <Footer />
      <ScrollButton />
    </div>
  );
};

export default Home;
