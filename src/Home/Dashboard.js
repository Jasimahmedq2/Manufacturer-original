import React from 'react';
import {Outlet, Link} from 'react-router-dom'

const Dashboard = () => {
  return (
    <div class="drawer drawer-mobile">
  <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content ">
    <h2 className='text-secondary text-2xl font-bold'>dashboard</h2>
    <Outlet></Outlet>
  
  </div> 
  <div class="drawer-side">
    <label for="my-drawer-2" class="drawer-overlay"></label> 
    <ul class="menu p-4 overflow-y-auto w-38 bg-base-100 text-base-content">


      <li><Link to='/dashboard'>My orders</Link></li>
      <li><Link to='/dashboard/addreview'>My review</Link></li>
      <li><Link to='/dashboard/addproduct'>Add product</Link></li>
      <li><Link to='/dashboard/manageproduct'>manage all product</Link></li>


    </ul>
  
  </div>
</div>
  );
};

export default Dashboard;