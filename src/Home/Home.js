import React from 'react';
import Footer from '../Page/Share/Footer';
import Banner from './Banner';
import Businessmen from './Businessmen';
import Reviews from './Reviews';
import Ticker from './SampleSummary';
import Tools from './Tools';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Tools></Tools>

     <Businessmen />
      <Reviews></Reviews>
      <Footer></Footer>
    </div>
  );
};

export default Home;