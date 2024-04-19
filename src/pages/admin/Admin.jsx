import React from 'react'
import { SideBarLeft } from '../../components'
import { Outlet } from 'react-router-dom'

const Admin = () => {
  return (

    <div className=' mt-20 h-[1000px] flex'>
      <SideBarLeft/>
      <Outlet/>
    </div>
  )
}

export default Admin