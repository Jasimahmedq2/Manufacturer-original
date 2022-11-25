import React from 'react';
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import useAdmin from '../../Hooks/useAdmin';
import Loading from '../Share/Loading'

const RequireUser = ({ children }) => {
  const [user, loading] = useAuthState(auth)
  const [admin, adminLoading] = useAdmin(user)
  let location = useLocation()
  if (loading || adminLoading) {
    return <Loading></Loading>
  }

  if (admin) {  
    console.log(admin)
    toast.error('only user can access this route')
    return <Navigate to='/' state={{ from: location }} replace ></Navigate>
  }

  return children;
};
export default RequireUser;