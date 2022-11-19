import React, { useEffect, useState } from 'react';
import useServices from '../Hooks/useServices';
import Tool from './Tool';

const Tools = () => {
const [services, setServices] = useServices()
  return (
    <div className='my-10 px-12 py-10 shadow rounded' style={{background: '#f7f6fc'}}>
      <div className='grid grid:cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {
          services.slice(0, 6).map(service => <Tool
          key={service._id}
          service={service}
          ></Tool>)
        }
      </div>
    </div>
  );
};

export default Tools;