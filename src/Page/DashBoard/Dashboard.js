import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Outlet, Link } from 'react-router-dom'
import auth from '../../firebase.init';
import useAdmin from '../../Hooks/useAdmin';

const Dashboard = () => {
  const [user] = useAuthState(auth)
  const [admin] = useAdmin(user)
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content ">
        <Outlet></Outlet>

      </div>
      <div className="drawer-side ">
        <label for="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-38 bg-base-100 text-base-content lg:bg-transparent">
          <li><Link to='/dashboard'>My Profile</Link></li>
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