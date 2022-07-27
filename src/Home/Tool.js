import React from 'react';
import './Tool.css'
const Tool = ({service}) => {
  const {_id, name, image, menimum, available, description, price} = service;
  return (
    <div class="card lg:max-w-lg bg-accent text-white shadow-xl">
  <figure class="px-5 pt-5">
    <img src={image} alt="Shoes" className="rounded-xl image-style" />
  </figure>
  <div class="card-body items-start ">
    <h2 class="font-bold text-2xl">Name: <span className='font-bold text-1xl text-primary'>{name}</span></h2>
    <h2 class="font-bold text-xl">minimum quantity: <span className='font-bold text-1xl text-primary'>
    {menimum} </span></h2>
    <h2 class="font-bold text-xl">available product: <span className='font-bold text-1xl text-primary'>{available}</span></h2>
    <h2 class="font-bold text-xl text-primary ">price: <span className='font-bold text-2xl text-white'>{price}</span></h2>

    <h2 className='font-bold text-xl text-primary text-start'>description: <span className='font-bold text-xl text-white'>{description}</span></h2>
        <div>
        <button class="btn bg-gradient-to-r from-primary to-secondary bg-gradient-to-r hover:from-secondary hover:to-primary">purchase</button>
        </div>
  
  </div>
</div>
  );
};

export default Tool;