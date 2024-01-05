import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';

const Navbar = () => {
    const {isAuth,name,avatar}=useSelector((store)=>{
        return {
            isAuth:store.authReducer.isAuth,
            name:store.authReducer.name,
            avatar:store.authReducer.avatar,
            errorMessage:store.authReducer.errorMessage,
        }
    },shallowEqual)
    // console.log(name,isAuth)
  return (
    <div className="bg-pink-500 p-4">
      <header className="container mx-auto flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-extrabold text-white">Nykaa</h1>
        </div>
        <nav>
            {isAuth ? (<div className='flex gap-2 justify-around items-center'>
                <h1 className='text-white font-bold'>{name}</h1>
                <img className='w-10 h-10 rounded-full' src={avatar} alt="avatar"/>
            </div>):(
          <ul className="flex space-x-4">
            <li>
              <a href="/signup" className="text-white hover:text-gray-300 transition duration-300">
                Signup
              </a>
            </li>
            <li>
              <a href="/login" className="text-white hover:text-gray-300 transition duration-300">
                Login
              </a>
            </li>
          </ul>
            )}
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
