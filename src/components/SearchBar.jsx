import React from 'react'
import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = () => {
  return (
    <div className='border rounded-lg w-[60%] h-[40px] flex items-center px-4 gap-4 duration-300 focus-within:border-[#ff6501]'>
        <AiOutlineSearch />
        <input placeholder='Search' className='focus:outline-none'></input>
    </div>
  )
}

export default SearchBar