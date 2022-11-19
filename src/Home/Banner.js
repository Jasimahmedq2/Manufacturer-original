import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import pc from '../image/pc.jpg'
import processor from '../image/processor.jpg'
import ssd from '../image/ssd.jpg'

import { Carousel } from 'react-responsive-carousel';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import {motion} from 'framer-motion'
import Aos from 'aos';


const Banner = () => {

  useEffect(() => {
    Aos.init()
  }, [])
  return (
    <Carousel
      autoPlay={true}
    >
      <div className="hero
  ">
        <div className="hero-content md:h-screen flex-col lg:flex-row-reverse  bg-gradient-to-r from-green-400 to-blue-500">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-secondary">WELCOM TO  Bits Computer</h1>
            <p className="py-6 text-white text-xl">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
            <img src={pc} alt="" />
          </div>
        </div>
      </div>

      <div className="hero  
  ">
        <div className="hero-content md:h-screen flex-col lg:flex-row-reverse  bg-gradient-to-r from-green-400 to-blue-500">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-secondary">Best Budget M.2 Drive for PCI Express 4.0 Upgrades</h1>
            <p className="py-6 text-white text-xl">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"

            className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
            <img src={ssd} alt="" />

          </div>
        </div>
      </div>

      <div className="hero  
  ">
        <div className="hero-content md:h-screen flex-col lg:flex-row-reverse  bg-gradient-to-r from-green-400 to-blue-500">
          <div
          className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-secondary">AMD Ryzen 3 4100 Processor</h1>
            <p className="py-6 text-white text-xl">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          <div 
          className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
            <img src={processor} alt="" />
          </div>
        </div>
      </div>
    </Carousel >
  );
};

export default Banner;