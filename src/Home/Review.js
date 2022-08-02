import React from 'react';

const Review = ({ review }) => {
  const { name, picture, description, email } = review;
  return (
    <div className="card lg:mag-w-lg bg-base-200 text-primary-content">
      <div>
        <h2 className="font-bold text-accent text-xl">{description}</h2>
      </div>
      <div className="avatar my-5 justify-center items-center">
        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <img src={picture}  alt="images"/>
        </div>
      </div>
      <div className="">


        <h2 className="font-bold text-2xl text-secondary">{name}</h2>
        <h2 className="text-xl font-bold text-accent">{email}</h2>



      </div>
    </div>
  );
};

export default Review;