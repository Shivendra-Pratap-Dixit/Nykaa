import React from 'react';
import dashboard from "../Images/element-3.svg";
import analytics from "../Images/clipboard-tick.svg";
import { ReactComponent as LogoutIcon } from "../Images/setting-2.svg";

import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../Redux/auth/action';

const Sidebar = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    nav("/login");
  };

  return (
    <div className='bg-#FFFFFF w-57.5 items-center p-4'>
      <div className='mt-16'>
        <h1 className='text-center font-poppins font-medium text-xl text-blue-600'>Nykaa Dashboard</h1>
      </div>
      <div className='flex flex-col items-center gap-8 justify-center mt-28'>
        <div className='flex font-poppins gap-2 font-normal text-base tracking-wide active:text-blue-600'>
          <img src={dashboard} alt="" />
          <a href='/dashboard'>Dashboard</a>
        </div>
        <div className='flex font-poppins gap-2 font-normal text-base tracking-wide active:text-blue-600'>
          <img src={analytics} alt="" />
          <a href='#'>Analytics</a>
        </div>
        <div className='flex font-poppins gap-2 font-normal text-base tracking-wide active:text-blue-600'>
          <img src={LogoutIcon} alt="" />
          <a href='#' onClick={handleLogout}>Logout</a>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
