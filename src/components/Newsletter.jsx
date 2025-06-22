import React from 'react'

function Newsletter() {
  return (
    <div className='bg-white py-10 px-4 sm:px-6 md:px-10 lg:px-20 text-center mt-10'>
        <h4 className="text-2xl md:text-3xl font-semibold mb-4">Stay up-to-date with latest trends</h4>
        <p className='mb-4 text-md md:text-lg'>Get updates on new arrivals and exclusive offers</p>
      
   
<div>
  <input type='email' placeholder='Email'className='border border-gray-300 px-4 py-2 rounded w-full sm:w-64'/>
  <button className='bg-pink-600 text-white px-6 py-2 m-4 rounded hover:bg-pink-300 transition'>Subscribe</button>
</div>
 </div>
  )
}

export default Newsletter
