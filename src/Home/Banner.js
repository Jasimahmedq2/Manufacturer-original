import React, { useEffect } from 'react';

import 'aos/dist/aos.css';
import {motion} from 'framer-motion'
import Aos from 'aos';
import manufacturer from '../image/manufacturer.png'


const Banner = () => {

  useEffect(() => {
    Aos.init()
  }, [])
  return (
    <div>
   <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row space-x-6">
    <div
    data-aos="flip-down"
    data-aos-delay="50"
    data-aos-duration="2000"

    className='lg:w-1/2'>
    <img src={manufacturer} className=" rounded-lg shadow-2xl" />
    </div>
    <div
        data-aos="zoom-in"
        data-aos-offset="200"
        data-aos-delay="500"
        data-aos-duration="2000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
    className='text-start lg:w-1/2'>
      <h1 className="text-5xl font-bold">Bits Computer</h1>
      <p className="py-6 text-2xl font-mono">here is an available lot of computer parts for you. its tools Manufacturers store where you can purchase PC parts. SSD, Ram, Processor, power supply, cooling fan, motherboard, and casing</p>
  
    </div>
  </div>
</div>
    </div>
  );
};

export default Banner;