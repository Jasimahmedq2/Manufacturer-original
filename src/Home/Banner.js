import React from 'react';

const Banner = () => {
  return (
  <div className="hero  
  ">
  <div className="hero-content flex-col lg:flex-row-reverse  bg-gradient-to-r from-green-400 to-blue-500 hover:from-secondary hover:to-primary">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold text-secondary">WELCOM TO  NAME!</h1>
      <p className="py-6 text-white text-xl">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
     <img src='https://i.ibb.co/FmngGct/pc.jpg
' alt="" />
    </div>
  </div>
</div>  
  );
};

export default Banner;