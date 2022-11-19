import React from 'react';
import {VscFeedback} from 'react-icons/vsc'
import {MdOutlineRateReview} from 'react-icons/md'
import {AiOutlineFundProjectionScreen} from 'react-icons/ai'
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { Link } from 'react-router-dom';
import { motion } from "framer-motion"


const Businessmen = () => {

 

  return (
 <div className=''>
  <div className='text-center my-10'>
   <h2 className='text-accent font-bold text-xl'>Our Customers Review And Website Analytics</h2>
  </div>
  <div className='grid grid:cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
      <div className='text-start w-50 mx-auto '>
      <h4><span><VscFeedback className='text-8xl'></VscFeedback></span> <h2 className='font-bold text-secondary text-xl pt-2'>CLIENTS</h2><p className='font-bold text-5xl text-accent'>

      <CountUp start={0} end={320} duration={2}>
    {({ countUpRef, start }) => (
        <VisibilitySensor onChange={start}>
            <span ref={countUpRef} />
        </VisibilitySensor>
    )}
 </CountUp>

         <span className='font-bold text-secondary text-4xl'>+</span></p></h4>

      </div>
      <div className='text-start w-50 mx-auto'>
       <h4><span><MdOutlineRateReview className='text-8xl'></MdOutlineRateReview></span> <h2 className='font-bold text-secondary text-xl pt-2'>CUSTOMER REVIEWS</h2><p className='font-bold text-5xl text-accent'>   

        <CountUp start={0} end={7000} duration={2}>
    {({ countUpRef, start }) => (
        <VisibilitySensor onChange={start}>
            <span ref={countUpRef} />
        </VisibilitySensor>
    )}
 </CountUp>

  <span className='font-bold text-secondary text-4xl'>+</span></p></h4>
      </div>
      <div className='text-start w-50 mx-auto'>
       <h4><span><AiOutlineFundProjectionScreen className='text-8xl'></AiOutlineFundProjectionScreen></span> <h2 className='font-bold text-secondary text-xl pt-2'>COMPLITE PROJECT</h2><p className='font-bold text-5xl text-accent'> 
       
       <CountUp start={0} end={560} duration={2}>
    {({ countUpRef, start }) => (
        <VisibilitySensor onChange={start}>
            <span ref={countUpRef} />
        </VisibilitySensor>
    )}
 </CountUp>

       <span className='font-bold text-secondary text-4xl'>+</span></p></h4>
      </div>
    </div>
    <motion.div
      whileHover={{x: 0, y: 25}}

     className="card bg-base-200 shadow-xl my-10 flex p-5">
  <div 

  className="">
    <h2 className="font-bold text-secondary text-4xl">Need help?</h2>
    <p className='text-accent font-bold text-xl pt-2'>clear your Any  questions.....</p>
    <div className="flex justify-end">
    <Link to="emailjs" className="btn bg-gradient-to-r from-primary to-secondary bg-gradient-to-r hover:from-secondary hover:to-primary">contact us</Link>
    </div>
  </div>
</motion.div>
 </div>
  );
};

export default Businessmen;