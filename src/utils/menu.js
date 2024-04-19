import React from 'react'
import icons from './icons'
const { MdProductionQuantityLimits, 
        FaRegUser,
        MdOutlineLocalShipping,
        FaDoorOpen } = icons
        
export const sideBarMenu = [
    {
        path: '/admin/product',
        text: 'Product',
        icon: <MdProductionQuantityLimits/>
    },
    {
        path: '/admin/user',
        text: 'User',
        icon: <FaRegUser/>
    },
    {
        path: '/admin/order',
        text: 'Order',
        icon: <MdOutlineLocalShipping/>
    },
    {
        path: '/',
        text: 'Back to Home',
        icon: <FaDoorOpen/>
    }
]