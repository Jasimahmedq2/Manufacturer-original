import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { FaStar } from "react-icons/fa";
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import { Container, Radio, Rating } from "../DashBoard/user/RatingStyles";


const AddReview = () => {
  const [user] = useAuthState(auth)
  const [rate, setRate] = useState(0);

  const { register, formState: { errors }, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {

    const userReview = {
      name: user.displayName,
      email: user.email,
      description: data.description,
      rate: rate
    }

    fetch('https://dull-puce-basket-clam-sari.cyclic.app/review/', {
      method: 'POST',
      headers: {

        authorization: `Bearer ${localStorage.getItem('accessToken')}`,

        'content-type': 'application/json'
      },
      body: JSON.stringify(userReview)
    })
      .then(res => res.json())
      .then(result => {
        if (result
          ) {
          toast.success('Thanks for your valueAble Review')
          setRate(0)
        }
      })

    reset()
  }


  return (
    <div>
      <h2 className='text-xl font-bold text-success my-2'>Review us</h2>
      <Container>
        {[...Array(5)].map((item, index) => {
          const givenRating = index + 1;
          return (
            <label>
              <Radio
                type="radio"
                value={givenRating}
                onClick={() => {
                  setRate(givenRating);
                }}
              />
              <Rating>
                <FaStar
                  color={
                    givenRating < rate || givenRating === rate
                      ? "daa520"
                      : "rgb(192,192,192)"
                  }
                />
              </Rating>
            </label>
          );
        })}
      </Container>

      <form onSubmit={handleSubmit(onSubmit)} className='mt-5 space-y-4'>

        <input className="input input-bordered shadow-xl rounded-lg  w-11/12 p-6" readOnly type="text" value={user?.displayName} {...register('name', { required: true })} />
        {errors.name?.type === 'required' && <p className='text-sm text-red-400 font-sans' role="alert"> name is required</p>}

        <input className="input input-bordered  shadow-xl rounded-lg w-11/12 p-6 " readOnly type="email" value={user?.email} {...register('email', { required: true })} />

        {errors.email?.type === 'required' && <p className='text-sm text-red-400 font-sans' role="alert">email is required</p>}

        <textarea className="textarea textarea-bordered w-11/12 p-6 resize-none shadow-xl rounded-lg" placeholder="review description" {...register('description', { required: true })}></textarea>
        {errors.description?.type === 'required' && <p
          className='text-sm text-red-400 font-sans'
          role="alert">descrition is required</p>}
        <input className="btn btn-outline w-1/2" type="submit" value="Send" />

      </form>

    </div>
  );
};

export default AddReview;