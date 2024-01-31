import React from 'react'
import { Link } from 'react-router-dom'

export default function LeftBar() {
  return (
    <div className='leftBar flex-2 font-poppins sticky top-70 h-screen overflow-y-scroll'>
    <div className='container p-4 '>
        <div className='menu '>
            <div className='user flex items-center gap-3'>
                <img src="" alt="" className='w-8 h-8 rounded-full object-cover' />
                <span className='text-base'>Me</span>
            </div>
            <div className='menuItems'>
                <div className='item flex items-center gap-3'>
                    <i className="fas fa-users"></i>
                    <span className='text-sm'>Connections</span>
                </div>
                <div className='item flex items-center gap-3'>
                    <i className="fas fa-users"></i>
                    <span className='text-sm'>Contacts</span>
                </div>
                <div className='item flex items-center gap-3'>
                    <i className="fas fa-users"></i>
                    <span className='text-sm'>Following & followers</span>
                </div>
                <div className='item flex items-center gap-3'>
                    <i className="fas fa-users"></i>
                    <span className='text-sm'>Groups</span>
                </div>
                <div className='item flex items-center gap-4'>
                    <i className="fas fa-calendar-days"></i>
                    <span className='text-sm'>Events</span>
                </div>
                <div className='item flex items-center gap-4'>
                    <i className="fas fa-newspaper"></i>
                    <span className='text-sm'>Newsletters</span>
                </div>
            </div>
        </div>
    </div>
</div>



   
  )
}
