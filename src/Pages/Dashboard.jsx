import React from 'react'
import Sidebar from './Sidebar'
import ProductsPage from './ProductsPage'

const Dashboard = () => {
  return (
    <div className='flex items-start'>
    <div className='w-1/5 border border-solid m-1'><Sidebar/></div>
   <div className='w-4/5'><ProductsPage/></div>
    </div>
  )
}

export default Dashboard