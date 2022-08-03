import React from 'react';
import {Link} from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='flex justify-center items-center h-screen '>
    <div>
    <h2 className='font-bold text-secondary text-4xl mb-2'>OoPS!!</h2>
      <h2 className='text-accent font-bold text-2xl mt-2'>404-page Not Found</h2>
      <h2 className='text-black text-xl font-bold mt-2'>the page you are looking for might have removed</h2>
      <h2 className='text-black text-xl font-bold'>had its name changed or is temporarily unavailable or path not match</h2>
      <button className='text-primary font-boold btn btn-ghost mt-2'> <Link to='/'>go to home</Link> </button>
    </div>
    </div>
  );
};

export default NotFound;