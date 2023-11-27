import React, { useEffect, useState } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { Autoplay } from 'swiper';
import 'swiper/css/autoplay';
import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css";

// SwiperCore.use([Autoplay]);


const Reviews = () => {
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    fetch('https://dull-puce-basket-clam-sari.cyclic.app/review/',{
      method: 'GET',
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`
      }
    })
      .then(res => res.json())
      .then(data => setReviews(data))
  }, [])
  return (
    <div className='mt-16 py-12 px-6'>
      <Swiper

        modules={[Autoplay]}
        autoplay={{
          delay: 2000,
          pauseOnMouseEnter: true,
          disableOnInteraction: false
        }}
        spaceBetween={50}
        breakpoints={{
          340: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
        }}
        onSwiper={(swiper) => console.log(swiper)}

      >


        {
          reviews.map(review => {
            return (
              <SwiperSlide>


                <div className="card lg:max-w-lg bg-base-200 p-6 h-52">

                  <div className='flex w-50 mx-auto'>
                    <span>
                      {
                        review?.rate >= 1 ? < AiFillStar className='text-orange-400' />
                          : <AiFillStar className='text-gray-400' />

                      }
                    </span>

                    <span>
                      {
                        review?.rate >= 2 ? < AiFillStar className='text-orange-400' />
                          : <AiFillStar className='text-gray-400' />

                      }
                    </span>
                    <span>
                      {
                        review?.rate >= 3 ? < AiFillStar className='text-orange-400' />
                          : <AiFillStar className='text-gray-400' />

                      }
                    </span>
                    <span>
                      {
                        review?.rate >= 4 ? < AiFillStar className='text-orange-400' />
                          : <AiFillStar className='text-gray-400' />

                      }
                    </span>
                    <span>
                      {
                        review?.rate > 4 ? < AiFillStar className='text-orange-400' />
                          : <AiFillStar className='text-gray-400' />

                      }
                    </span>

                  </div>

                  <div>
                    <div>
                      <h2 className="font-bold text-accent text-xl">{review.description.substring(0, 60)}</h2>
                    </div>

                    <div className="">
                      <h2 className="font-bold text-2xl text-secondary">{review.name}</h2>
                      <h2 className="text-xl font-bold text-accent">{review.email}</h2>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

            )
          })

        }


      </Swiper>
    </div>

  );
};

export default Reviews;