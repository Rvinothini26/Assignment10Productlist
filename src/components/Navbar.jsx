import React from 'react'
import { useState } from 'react'
import {Menu,X} from "lucide-react"

function Navbar() {
    const [isOpen,setIsOpen]=useState(false);
    const toggleMenu=() =>setIsOpen(!isOpen);
  return (
    <nav className='bg-white shadow-md fixed w-full top-0 z-50'>
        {/* responsiveness */}
   <div className='max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 '>
    <div className='flex justify-between h-16 items-center '>
        <div className='text-xl font-semibold text-pink-500'>ShopEase</div>
        <div className='hidden md:flex space-x-6'>
            <a href="#" className='hover:text-pink-500'>Home</a>
             <a href="#"className='hover:text-pink-500'>Products</a>
              <a href="#"className='hover:text-pink-500'>Myorders</a>
               <a href="#"className='hover:text-pink-500'>Help & Support</a>
        </div>
        <div className='md:hidden'>
            <button onClick={toggleMenu}>
                {
isOpen ? <X/> : <Menu/>
                }
</button>
        </div>
    </div>
   </div>
   {/* mobile design */}
   {
    isOpen && (
        <div className='md:hidden bg-white px-4 pb-4 space-y-2 shadow'> 
            <a href="#"className='block text-slate-600 font-semibold hover:text-green-400'>Home</a>
             <a href="#"className='block text-slate-600 font-semibold hover:text-green-400'>Products</a>
              <a href="#"className='block text-slate-600 font-semibold hover:text-green-400'>Myorders</a>
               <a href="#"className='block text-slate-600 font-semibold hover:text-green-400'>Help & Support</a> 
        </div>

    )
   }

   </nav>
  )
}

export default Navbar
