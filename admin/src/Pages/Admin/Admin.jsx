import React from 'react'
import "./Admin.css"
import Sidebar from '../../Components/Sidebar/Sidebar'
import { Routes,Route } from 'react-router-dom'
import Addproduct from '../../Components/Addproduct/Addproduct'
import Listproduct from '../../Components/Listproduct/Listproduct'
import UpdateProduct from '../../Components/UpdateProduct'
import Order from '../../Components/Order/Order'
const Admin = () => {
  return (
    <div className='admin'>
      <Sidebar />
      <Routes>
        <Route path='/addproduct' element={<Addproduct />}/>
        <Route path='/listproduct' element={<Listproduct />}/>
        <Route path='/update/:id' element={<UpdateProduct/>} />
        <Route path='/orders' element={<Order />} />



      </Routes>

    </div>
  )
}

export default Admin
