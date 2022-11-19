import React from 'react';
import { Link,  useNavigate, useParams, } from 'react-router-dom';
import './Tool.css'
import {motion} from 'framer-motion'
const Tool = ({service}) => {
  const {id} = useParams()
  const {_id, name, image, menimum, available, description, price} = service;
  const navigate = useNavigate()
  const handlePurchase = (id) => {
    navigate(`/purchase/${id}`)
  }
  return (
    <motion.div
    whileHover={{
      y: -12,
      transition: { duration: 0.5 },
    }}
    className="card hover-body lg:max-w-lg bg-accent text-white shadow-xl relative">
  <figure className="px-5  relative overflow-hidden bg-no-repeat bg-cover max-w-xs">
    <img src={image} alt="Shoes" className="rounded-xl image-style max-w-xs hover:scale-110 transition duration-300 ease-in-out" />
  </figure>
  <div className="card-body items-start mb-4">
    <h2>{_id}</h2>
    <h2 className="font-bold text-2xl">Name: <span className='font-bold text-1xl text-primary'>{name}</span></h2>
    <h2 className="font-bold text-xl">minimum quantity: <span className='font-bold text-1xl text-primary'>
     </span></h2>
    <h2 className="font-bold text-xl">available product: <span className='font-bold text-1xl text-primary'>{available}</span></h2>
    <h2 className="font-bold text-xl text-primary ">price: <span className='font-bold text-2xl text-white'>{price}</span></h2>

    <h2 className='font-bold text-xl text-primary text-start'>description: <span className='font-bold text-xl text-white'>{description}</span></h2>
        <div>
        <button
        onClick={() => handlePurchase(_id)}
        className="btn bg-gradient-to-r from-primary to-secondary bg-gradient-to-r hover:from-secondary hover:to-primary absolute bottom-0 right-0">purchase</button>
        </div>
  
  </div>
</motion.div>
  );
};

export default Tool;