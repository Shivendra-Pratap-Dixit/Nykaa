import React from 'react'
import Login from './Login'
import {Routes,Route} from "react-router-dom"
import Signup from './Signup'
import Home from './Home'
import Dashboard from './Dashboard'
const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
    </Routes>
  )
}

export default AllRoutes