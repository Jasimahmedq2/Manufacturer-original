import React from 'react';
import Banner from './Banner';
import Businessmen from './Businessmen';
import Reviews from './Reviews';
import Tools from './Tools';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Tools></Tools>
      <Businessmen></Businessmen>
      <Reviews></Reviews>
    </div>
  );
};

export default Home;