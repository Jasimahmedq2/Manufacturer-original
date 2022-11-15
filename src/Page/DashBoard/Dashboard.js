import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Outlet, Link } from 'react-router-dom'
import auth from '../../firebase.init';
import useAdmin from '../../Hooks/useAdmin';

const Dashboard = () => {
  const [user] = useAuthState(auth)
  const [admin] = useAdmin(user)
  return (
    <div class="drawer drawer-mobile ">
      <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content ">
        <h2 className='text-secondary text-2xl font-bold'>dashboard</h2>
        <Outlet></Outlet>

      </div>
      <div class="drawer-side">
        <label for="my-drawer-2" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-38 bg-base-100 text-base-content">
          <li><Link to='/dashboard/myprofile'>My Profile</Link></li>
          {
            !admin && <>
              <li><Link to='/dashboard/myorder'>My order</Link></li>
              <li><Link to='/dashboard/addreview'>My review</Link></li>
            </>
          }

          {
            admin && <>
              <li><Link to='/dashboard/addproduct'>Add product</Link></li>
              <li><Link to='/dashboard/manageproduct'>manage all product</Link></li>
              <li><Link to='/dashboard/manageorders'>Manage all Orders</Link></li>
              <li><Link to='/dashboard/makeadmin'>make admin</Link></li>
            </>
          }




        </ul>

      </div>
    </div>
  );
};

export default Dashboard;