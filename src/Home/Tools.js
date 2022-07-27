import React, { useEffect, useState } from 'react';
import Tool from './Tool';

const Tools = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/service')
    .then(res => res.json())
    .then(data => setServices(data))
  } , [])
  return (
    <div className='my-10'>
      <h2 className='font-bold text-secondary text-xl'>all tools Number is {services.length}</h2>
      <div className='grid grid:cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {
          services.map(service => <Tool
          key={service._id}
          service={service}
          ></Tool>)
        }
      </div>
    </div>
  );
};

export default Tools;