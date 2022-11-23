import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate, useParams } from 'react-router-dom';
import auth from '../../../firebase.init';
import { toast } from 'react-toastify';


const Purchase = () => {
  const { id } = useParams()
  const [user] = useAuthState(auth)
  const [service, setService] = useState({})
  console.log(service)
  console.log(service.minimum)
  const [updatedQuantity, setUpdatedQuantity] = useState(1)
  console.log("updateQuantity", updatedQuantity)
  const navigate = useNavigate()

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
    fetch('https://manufacturer-myself.up.railway.app/purchase', {
      method: 'POST',
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        "content-type": "application/json"
      },
      body: JSON.stringify(purchase)
    })
      .then(res => res.json())
      .then(result => {
        if (result.insertedId) {
          toast.success('successfully place an order')
          navigate('/dashboard/myorder')
        }
        console.log(result)
      })
    console.log(data)
    reset()
  
  };


  useEffect(() => {
    fetch(`https://manufacturer-myself.up.railway.app/service/${id}`,{
      method: 'GET',
     headers: {
      authorization: `Bearer ${localStorage.getItem('accessToken')}`,     
     }
    })
      .then(res => res.json())
      .then(data => setService(data))
  }, [])



  // const handleDecrease = () => {
  //   const { menimum, ...rest } = service;
  //   const previousQuantity = menimum;
  //   console.log("previousQuantity,", previousQuantity)
  //   const updatedProduct = { updatedQuantity: previousQuantity - 1, ...rest };
  //   setUpdatedQuantity(previousQuantity - 1);

  //   fetch(`https://manufacturer-myself.up.railway.app/purchase/${_id}`, {
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
    <div className=''>

      <div className=" min-h-screen bg-base-200">
        <div className=" sm:flex justify-center space-x-12  items-center h-screen ">
       
          <div className='text-start'>
          <img src={service?.image} alt="image" className="max-w-sm rounded-lg shadow-2xl" />
          <div className='py-12 space-y-4'>
            <h2 className='text-xl text-black'>name: {service.name}</h2>
            <h2 className='text-xl font-bold text-accent'>Title: {service.title}</h2>
            </div>
          </div>
          <div className='bg-base-100 p-6 shadow-lg rounded-lg'>
            <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 w-full">

              <input className="input input-bordered input-primary  w-full max-w-xs mt-3" readOnly type="text" {...register('name')} value={user.displayName} />

              <input className="input input-bordered input-primary  w-full max-w-xs mt-3" readOnly type="email" {...register('email')} value={user.email} />

              <input type="text" {...register('phone', { required: "phone number is required" })} placeholder="enter your phone" className="input input-bordered input-primary mt-3 w-full max-w-xs" />

              {errors?.phone?.type === 'required' && <p className='text-sm text-red-400 '>{errors.phone?.message}</p>}
              <input type="text" {...register('address', { required: " Address is required" })} placeholder="enter your address" className="input input-bordered input-primary mt-3 w-full max-w-xs" />

              {errors?.address?.type === 'required' && <p className='text-sm text-red-400 '>{errors.address?.message}</p>}

              <div className="btn-group flex items-center space-x-2 p-2 ">
                <div className='mt-2'>
                  <button type='button' disabled={updatedQuantity <= 1} className="btn"
                    onClick={handleDecrease}
                  >«</button>
                  <span className='p-4'>{updatedQuantity}</span>
                  <button type='button' disabled={updatedQuantity >= parseInt(service?.available)} className="btn" onClick={handleIncrease}>»</button>
                </div>
                <input className="btn btn-outline  mt-3" type="submit" value="purchase order" />

              </div>



            </form>


          </div>
        </div>
      </div>



    </div>
  );
};
export default Purchase;