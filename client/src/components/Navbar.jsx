import React from 'react'
import { Link } from 'react-router-dom'


export default function Navbar() {
    return (
      <div className='bg-white py-2 px-4 flex items-center justify-evenly gap-15 shadow p-4 '>
        {/* Left side of the Navbar */}
        <div className='flex items-center'>
          <span className='text-blue-800 text-xl font-bold'><img src="/assets/2.png" alt="" className="w-14 h-14 mr-2" /></span>
          <div className='ml-4 relative'>
            <input
              type='text'
              placeholder='Search'
              className='pl-10 pr-3 py-1.5 rounded-lg bg-blue-50 outline-none text-sm placeholder-gray-500'
            />
            <i className='fas fa-search text-black ml-2 absolute left-3 top-1/2 transform -translate-y-1/2'></i>
          </div>
        </div>
  
 {/* Right side of the Navbar */}
 <div className='flex justify-center items-center '>
  <div className='flex items-center gap-8'>
    <div className='flex flex-col items-center'>
      <i className='fas fa-house text-gray-500 text-xl cursor-pointer'></i>
      <span className='text-xs mt-1'>Home</span>
    </div>
    
    <div className='flex flex-col items-center'>
      <i className='fas fa-users text-gray-500 text-xl cursor-pointer'></i>
      <span className='text-xs mt-1'>My Network</span>
    </div>
    <div className='flex flex-col items-center'>
      <i className='fas fa-briefcase text-gray-500 text-xl cursor-pointer'></i>
      <span className='text-xs mt-1'>Jobs</span>
    </div>
    <div className='flex flex-col items-center'>
      <i className='fas fa-comment-dots text-gray-500 text-xl cursor-pointer'></i>
      <span className='text-xs mt-1'>Messaging</span>
    </div>
    <div className='flex flex-col items-center'>
      <i className='fas fa-bell text-gray-500 text-xl cursor-pointer'></i>
      <span className='text-xs mt-1'>Notifications</span>
    </div>
    <div className='flex flex-col items-center'>
      <img
        src='https://images.unsplash.com/photo-1531727991582-cfd25ce79613?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        alt='Profile'
        className='w-7 h-7 rounded-full cursor-pointer'
      />
   
   <span className='text-xs mt-1'>Me</span> 
            
     
    </div>
   
  
  </div>
</div>
</div>

    );
  }
