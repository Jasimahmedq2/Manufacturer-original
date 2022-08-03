import { async } from '@firebase/util';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const AddReview = () => {
  const [user] = useAuthState(auth)

  const handleReview = (event) => {
    event.preventDefault()
    const userReview = {
      name: user.displayName,
      email: user.email,
      description: event.target.description.value,
      image: event.target.value
    }

    fetch('https://morning-dusk-58052.herokuapp.com/review', {
      method: 'POST',
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify(userReview)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
    })
    event.target.reset()

  }

  return (
    <div>
      <h2 className='text-xl font-bold text-secondary text-center'>{user?.displayName} please add a review </h2>
      <form onSubmit={handleReview}  className='mt-5'>
       
          <input className="input input-bordered input-accent  w-full max-w-xs mt-3" readOnly type="text" value={user?.displayName} name="name" />
          <br />
          <input className="input input-bordered input-accent  w-full max-w-xs mt-3" readOnly type="email" value={user?.email} name="name"  />
          <br />
          <input type="text" name="description"  className="input input-bordered input-accent mt-3 w-full max-w-xs" placeholder='description' />
          <br />
         
          <input className='input input-bordered input-accent  w-full max-w-xs mt-3' type="text"  name='image' alt=""/>
          <br />
  
          <input className="btn btn-outline w-full mt-3 max-w-xs" type="submit" value="Add Review" />
        </form>
    </div>
  );
};

export default AddReview;