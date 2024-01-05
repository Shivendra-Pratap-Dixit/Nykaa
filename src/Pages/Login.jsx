import React, { useState } from 'react'
import { getLog } from '../Redux/auth/action';
import { useNavigate } from 'react-router-dom';
import {shallowEqual, useDispatch, useSelector} from "react-redux"
const Login = () => {
    const [input, setInput] = useState({
        email: '',
        password: '',
      });
    const {isAuth,errorMessage}=useSelector((store)=>{
        return {
            isAuth:store.authReducer.isAuth,
            errorMessage:store.authReducer.errorMessage
        }
    },shallowEqual)
    
    const dispatch=useDispatch();
   const nav=useNavigate()
    
      const handleLogin = (e) => {
        e.preventDefault();
    
        const { email, password } = input;
        const userData = { email, password };
        dispatch(getLog(userData));
        
      };
    
      
      if (isAuth) {
    nav("/dashboard");
      }
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
    
        
        setInput((prevInput) => ({
          ...prevInput,
          [name]: value,
        }));
      };
  return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96 h-96">
        <h1 className="text-3xl font-bold mb-6 text-center">Welcome To Nykaa</h1>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="username"
              name="email"
              value={input.email}
              onChange={handleInputChange}
              className="w-full border p-2 rounded focus:outline-none focus:border-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={input.password}
              onChange={handleInputChange}
              className="w-full border p-2 rounded focus:outline-none focus:border-blue-500"
              placeholder="Enter your password"
              required
            />
          </div>
          {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 focus:outline-none"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login