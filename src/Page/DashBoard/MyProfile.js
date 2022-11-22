import React from 'react';
import { useState } from 'react';
import { useAuthState, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Share/Loading';

const MyProfile = () => {
  const [user] = useAuthState(auth)
  const [updateuserProfile, setUpdateUserProfile] = useState(false)
  console.log(user.photoURL)
  const [displayName, setDisplayName] = useState('');
  const [photoURL, setPhotoURL] = useState('');
  const [updateProfile, updating, error] = useUpdateProfile(auth);

  let errorMessage;
  if (error) {
    errorMessage = <p className='text-sm text-red-400'>{error.message}</p>
  }

  if (updating) {
    return <Loading />

  }

  const handleUpdateUserProfile = () => {
    setUpdateUserProfile(true)
  }

  return (
    <div className=" px-6 py-6 flex w-11/12 space-x-10 ">
      <div className="">

        <button
          onClick={handleUpdateUserProfile}
          className='btn btn-sm btn-success mb-4 '>edit</button>
        <div className="text-center lg:text-left">

          <div className="avatar">
            <div className="w-32 rounded">
              <img src={user.photoURL} alt='' />
            </div>
          </div>
          <h2 className='text-xl text-accent font-bold'>{user.displayName}</h2>
          <h2 className='text-sm font-serif'>{user.email}</h2>

        </div>
        {errorMessage}
      </div>


      {
        updateuserProfile && <div className="w-full">


          <div class="mb-4 ">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
              Name
            </label>
            <input

              type="displayName"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}

              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" />
          </div>



          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
              photourl
            </label>
            <input

              type="photoURL"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}

              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" />
          </div>


          <button
            className='btn btn-primary'
            onClick={async () => {
              const success = await updateProfile({ displayName, photoURL });
              if (success) {
                setUpdateUserProfile(false)
                alert('Updated profile');
              }
            }}
          >
            Update profile
          </button>
        </div>
      }


    </div>
  );
};

export default MyProfile;