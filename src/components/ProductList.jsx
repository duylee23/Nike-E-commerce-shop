import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { IoTimeSharp } from 'react-icons/io5'
const ProductList = () => {
    const [products, setProducts] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try{
        const res = await axios.get(`http://localhost:8080`)
        setProducts(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])
  return (
    <div className='border '>
        <h2>New Products</h2>
        <div className='flex gap-4 justify-between flex-wrap'>
         {products.map((item, index) => (
          <div key={index} className='w-[20%] h-[600px] border gap-2 overflow-hidden'>
            <img src={item.image} className='w-full h-[400px] overflow-hidden object-content'></img>
            <div className='flex flex-col'>
              <p className='font-bold text-lg'>{item.name}</p>
              <span>{item.description}</span>
              <span>{item.price}</span>
            </div>
          </div>
         ))}
        </div>
    </div>
  )
}

export default ProductList