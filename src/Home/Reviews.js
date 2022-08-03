import React, { useEffect, useState } from 'react';
import Review from './Review';

const Reviews = () => {
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    fetch('https://morning-dusk-58052.herokuapp.com/review')
    .then(res => res.json())
    .then(data => setReviews(data))
  },[])
  return (
    <div className='my-10 grid grid:cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
      {
        reviews.map(review => <Review
        review={review}
        ></Review>)
      }
    </div>
  );
};

export default Reviews;