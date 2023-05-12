import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
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
    toast.success('you are a admin this route just for normal user. who want to purchase any tool. you can add product and manage website as well.')
    return <Navigate to='/dashboard' state={{ from: location }} replace ></Navigate>
  }

  return children;
};
export default RequireUser;