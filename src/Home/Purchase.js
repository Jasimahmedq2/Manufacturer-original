import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../firebase.init';
import { toast } from 'react-toastify';


const Purchase = () => {
  const { id } = useParams()
  const [user] = useAuthState(auth)
  const [service, setService] = useState({})
  console.log(service)
  const [updatedQuantity, setUpdatedQuantity] = useState(1)

  const { register, formState: { errors }, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    const purchase = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      quantity: updatedQuantity,
      address: data.address,
      price: service?.price,
    }
    fetch('http://localhost:5000/purchase', {
      method: 'POST',
      headers: {
        "content-type" : "application/json"
      },
      body: JSON.stringify(purchase)
    })
    .then(res => res.json())
    .then(result => {
      if(result.insertedId){
        toast.success('successfully place an order')
      }
      console.log(result)
    })
    console.log(data)
    reset()
  };


  useEffect(() => {
    fetch(`http://localhost:5000/service/${id}`)
      .then(res => res.json())
      .then(data => setService(data))
  }, [])



  // const handleDecrease = () => {
  //   const { menimum, ...rest } = service;
  //   const previousQuantity = menimum;
  //   console.log("previousQuantity,", previousQuantity)
  //   const updatedProduct = { updatedQuantity: previousQuantity - 1, ...rest };
  //   setUpdatedQuantity(previousQuantity - 1);

  //   fetch(`http://localhost:5000/purchase/${_id}`, {
  //     method: 'PUT',
  //     headers: {
  //       "content-type": "application/json"
  //     },
  //     body: JSON.stringify(updatedProduct)
  //   })
  //     .then(res => res.json())
  //     .then(data => {
  //       console.log(data)
  //     })
  //   console.log(updatedQuantity);
  // }

  const handleDecrease = () => {
    setUpdatedQuantity(pre => pre - 1)
  }
  const handleIncrease = () => {
    setUpdatedQuantity(pre => pre + 1)
  }



  return (
    <div className='text-center w-1/2 mx-auto'>
      <h2 className='text-center text-xl font-bold text-secondary'>Hello  {user?.displayName}  welcome </h2>

      <div className="btn-group w-1/2 mx-auto">
        <button disabled={updatedQuantity <= 1} className="btn"
          onClick={handleDecrease}
        >«</button>
        <span className='p-4'>{updatedQuantity}</span>
        <button disabled={updatedQuantity >= parseInt(service?.available)} className="btn" onClick={handleIncrease}>»</button>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} >

        <input className="input input-bordered input-primary  w-full max-w-xs mt-3" readOnly type="text" {...register('name')} value={user.displayName} />

        <input className="input input-bordered input-primary  w-full max-w-xs mt-3" readOnly type="email" {...register('email')} value={user.email} />

        <input type="text" {...register('phone', { required: "phone number is required" })} placeholder="enter your phone" className="input input-bordered input-primary mt-3 w-full max-w-xs" />

        {errors?.phone?.type === 'required' && <p className='text-sm text-red-400 '>{errors.phone?.message}</p>}
        <input type="text" {...register('address', { required: " Address is required" })} placeholder="enter your address" className="input input-bordered input-primary mt-3 w-full max-w-xs" />

        {errors?.address?.type === 'required' && <p className='text-sm text-red-400 '>{errors.address?.message}</p>}

        <input className="btn btn-outline w-full mt-3 max-w-xs" type="submit" value="purchase order" />

      </form>

    </div>
  );
};
export default Purchase;