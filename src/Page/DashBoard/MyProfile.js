import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyProfile = () => {
  const [user] = useAuthState(auth)
  console.log(user)
  return (
    <div className=" px-6 py-6 ">
      <div className="">
        <div className="text-center lg:text-left">
          <div className="avatar">
            <div className="w-32 rounded">
              <img src='djlfj' alt=''/>
            </div>
          </div>
         <h2 className='text-xl text-accent font-bold'>{user.displayName}</h2>
         <h2 className='text-sm font-serif'>{user.email}</h2>
 
        </div>
        
      </div>
    </div>
  );
};

export default MyProfile;