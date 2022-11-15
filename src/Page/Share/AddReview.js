import { async } from '@firebase/util';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { FaStar } from "react-icons/fa";
import { Container, Radio, Rating } from "../DashBoard/user/RatingStyles";
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';


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

    fetch('http://localhost:5000/review', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(userReview)
    })
      .then(res => res.json())
      .then(result => {
        if(result.insertedId){
          toast.success('Thanks for your valueAble Review')
          setRate(0)
        }
      })

    reset()
  }



  return (
    <div>
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
        <input className="btn btn-outline w-ful max-w-xs" type="submit" value="Add Review" />

      </form>

    </div>
  );
};

export default AddReview;