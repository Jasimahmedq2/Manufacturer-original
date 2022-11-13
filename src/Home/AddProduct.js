import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';

const AddProduct = () => {
  const [user] = useAuthState(auth)

  const handleReview = (event) => {
    event.preventDefault()
    const product = {
    name: event.target.name.value,
    menimum: event.target.menimum.value,
    available: event.target.available.value,
    price: event.target.price.value,
    image: event.target.image.value
    }

    fetch('http://localhost:5000/service', {
      method: 'POST',
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify(product)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
    })
    event.target.reset()

  }

  return (
    <div>
      <h2 className='text-xl font-bold text-secondary text-center'>{user?.displayName}  add a new product </h2>
      <form onSubmit={handleReview}  className='mt-5'>
       
          <input className="input input-bordered input-accent  w-full max-w-xs mt-3"  type="text"  name="name" placeholder='product name'/>
          <br />
          <input className="input input-bordered input-accent  w-full max-w-xs mt-3"  type="number"  name="menimum" placeholder='minimum quantity' />
          <br />
          <input type="number" name="available"  className="input input-bordered input-accent mt-3 w-full max-w-xs" placeholder='available quantity' />
          <br />
          <input type="number" name="price"  className="input input-bordered input-accent mt-3 w-full max-w-xs" placeholder='each product price' />
          <br />
         
          <input className='input input-bordered input-accent  w-full max-w-xs mt-3' type="text"  name='image' alt="" placeholder='image url'/>
          <br />
  
          <input className="btn btn-outline w-full mt-3 max-w-xs" type="submit" value="Add product" />
        </form>
    </div>
  );
};

export default AddProduct;