import React from 'react'
import { NavLink } from 'react-router-dom'
const NavBar = () => {
  return (
    <div className='w-[16%] h-full bg-bgOrange border flex flex-col'>
      <NavLink to="/admin/product" activeclassname="active-link" >Product</NavLink>
      <NavLink to="/admin/user" activeclassname="active-link">User</NavLink>
      <NavLink to="/admin/order" activeclassname="active-link">Order</NavLink>
      <NavLink to="/" activeclassname="active-link">Back to homepage</NavLink>
    </div>
  )
}

export default NavBar
