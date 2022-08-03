import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../firebase.init';

const Purchase = () => {
  const {id} = useParams()
  const [user] = useAuthState(auth)
  const [service, setService] = useState({})


  useEffect(()=> {
    fetch(`https://morning-dusk-58052.herokuapp.com/service/${id}`)
    .then(res => res.json())
    .then(data => setService(data))
  },[])

  const handlePurchase = (event) => {
  event.preventDefault()

  const purchase = {
     name: user?.displayName,
     email: user?.email,
     productName: service.name,
     minimumQuantity: service.menimum,
     price: service.price,
     phone: event.target.phone.value,
  }

  fetch('https://morning-dusk-58052.herokuapp.com/purchase', {
    method: 'POST',
    headers: {
      'content-type' : 'application/json'
    },
    body: JSON.stringify(purchase)
  })
  .then(res => res.json())
  .then(data => {
    console.log(data)
    toast('Your purchase added')
  })
  event.target.reset()

  }


  return (
    <div className='text-center'>
      <h2 className='text-center text-xl font-bold text-secondary'>Hello  {user?.displayName}  welcome </h2>

      <div className='flex justify-center'>
        <h2 className='text-primary  text-xl font-bold mt-3'>{service.name} :</h2>

        <button className='text-5xl font-bold'>-</button>
        <p className='text-xl text-secondary font-bold mt-4 '>{service.menimum}</p>
        <button  className='text-5xl font-bold '>+</button>
      </div>

      <form onSubmit={handlePurchase} className='mt-5'>
          <input type="text" name="quantity"  value={service.menimum} className="input input-bordered input-primary mt-3 w-full max-w-xs" />
          <br />
          <input className="input input-bordered input-primary  w-full max-w-xs mt-3" readOnly type="text" name="name" value={user.displayName} />
          <br />
          <input className="input input-bordered input-primary  w-full max-w-xs mt-3" readOnly type="email" name="name" value={user.email} />
  
          <br />
          <input type="text" name="phone" placeholder="enter your phone" className="input input-bordered input-primary mt-3 w-full max-w-xs" />
          <br />
  
          <input className="btn btn-outline w-full mt-3 max-w-xs" type="submit" value="purchase order" />
        </form>

    </div>
  );
};

export default Purchase;