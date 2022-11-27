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
  const navigate = useNavigate()

  const { register, formState: { errors }, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    const purchase = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      quantity: data.quantity,
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
    fetch(`https://manufacturer-myself.up.railway.app/service/${id}`, {
      method: 'GET',
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      }
    })
      .then(res => res.json())
      .then(data => setService(data))
  }, [])



  return (
    <div className=''>

      <div className=" ">
        <div className=" sm:flex justify-center space-x-12  items-center h-screen space-y-12 px-4">


          <div className='bg-base-100 p-6 lg:w-1/2 shadow-lg rounded-lg'>
            <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 w-full">

              <input className="input input-bordered input-primary  w-full mt-3" readOnly type="text" {...register('name')} value={user.displayName} />

              <input className="input input-bordered input-primary  w-full mt-3" readOnly type="email" {...register('email')} value={user.email} />

              <input type="text" {...register('phone', { required: "phone number is required" })} placeholder="enter your phone" className="input input-bordered input-primary mt-3 w-full " />

              {errors?.phone?.type === 'required' && <p className='text-sm text-red-400 '>{errors.phone?.message}</p>}
              <input type="text" {...register('address', { required: " Address is required" })} placeholder="enter your address" className="input input-bordered input-primary mt-3 w-full" />

              {errors?.address?.type === 'required' && <p className='text-sm text-red-400 '>{errors.address?.message}</p>}

              <input type="number" {...register('quantity', { required: " quantity is required" })} placeholder="quantity" className="input input-bordered input-primary mt-3 w-full" />

              {errors?.address?.type === 'required' && <p className='text-sm text-red-400 '>{errors.address?.message}</p>}


              <input className="btn btn-outline  mt-3" type="submit" value="purchase order" />





            </form>


          </div>
          <div className='text-start lg:w-1/2'>
            <img src={service?.image} alt="image" className="w-1/2" />
            <div className='py-12 space-y-4'>
              <h2 className='text-xl text-black'>name: {service.name}</h2>
              <h2 className='text-xl font-bold text-accent'>Title: {service.title}</h2>

              <p className='text-xl font-sans'>description: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam est ab sint et laudantium quaerat nobis a in quia rerum, voluptate cumque quis voluptatum id quos, eos, corrupti harum accusamus?</p>
            </div>
          </div>
        </div>
      </div>



    </div>
  );
};
export default Purchase;