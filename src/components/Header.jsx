import React from 'react'
import { AiOutlineSearch } from "react-icons/ai";
const Header = () => {
  return (
      <div className='border w-full h-[60px] flex items-center'>
        <div className=''>
          <img src='https://img.etimg.com/thumb/msid-59738997,width-480,height-360,imgsize-21421,resizemode-75/nike.jpg' className='w-[60px] h-[60px] object-cover'/>
        </div>
        <div>
        </div>
        <div>
        <AiOutlineSearch />
          <a>Sign in</a>
          <a>Sign up</a>
        </div>
      </div>
  )
}

export default Header