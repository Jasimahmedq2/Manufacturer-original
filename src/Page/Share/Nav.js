import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useLocation } from 'react-router-dom'
import auth from '../../firebase.init';

const Nav = () => {
  const [user] = useAuthState(auth)
  const location = useLocation()
  
  const LongOut = () => {
    signOut(auth)
    localStorage.removeItem('accessToken')
  }

  const navBar = <>
    <li><Link to="/">Home</Link></li>

    <li><Link to="blog">Blog</Link></li>
    {
      user && <li><Link to='/dashboard'>dashboard</Link></li>

    }
    <li>{user ? <button className='btn  btn-ghost' onClick={LongOut}>Sing Out</button> : <Link to='login'>Log In</Link>}</li>

  </>

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {navBar}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl text-primary">Bits Computer</Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          {navBar}
        </ul>
      </div>
      <div className="navbar-end lg:hidden">
        {
          location.pathname.includes('dashboard')  && <label tabIndex="1" htmlFor='my-drawer-2' className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
        }


      </div>
    </div>
  );
};

export default Nav;