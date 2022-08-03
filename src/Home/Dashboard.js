import React from 'react';
import {Outlet, Link} from 'react-router-dom'

const Dashboard = () => {
  return (
    <div class="drawer drawer-mobile">
  <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content flex flex-col items-center justify-center">
    <h2 className='text-secondary text-2xl font-bold'>dashboard</h2>
    <Outlet></Outlet>
    <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div class="drawer-side">
    <label for="my-drawer-2" class="drawer-overlay"></label> 
    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">


      <li><Link to='/dashboard'>My orders</Link></li>
      <li><Link to='/dashboard/addreview'>My review</Link></li>
    </ul>
  
  </div>
</div>
  );
};

export default Dashboard;