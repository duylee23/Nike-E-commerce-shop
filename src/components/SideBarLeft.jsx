import React from 'react'
import { NavLink } from 'react-router-dom'
import ProductList from './ProductList'
import UserList from './UserList'
import { sideBarMenu } from '../utils/menu'

const NavBar = () => {
  return (
    <div className='w-[16%] h-full text-textOrange flex flex-col '>
      {sideBarMenu?.map((item, index) => (
        <div className='flex gap-2 w-full h-[60px] border items-center pl-8'>
          <span>{item.icon}</span>
          <NavLink to={item.path}>{item.text}</NavLink>
        </div>
      ))}
    </div>
  )
}
export default NavBar
