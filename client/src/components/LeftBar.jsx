import React from 'react'
import { Link } from 'react-router-dom'

export default function LeftBar() {
  return (
    <div className='leftBar flex-2 font-poppins sticky top-70 h-screen overflow-y-scroll '>
    <div className='container shadow p-4 w-56 mt-8 ml-32 rounded-lg'>

        <div className='menu '>
            <div className='user flex items-center gap-3'>
                <img src="" alt="" className='w-8 h-8 rounded-full object-cover' />
                <span className='text-base'>Me</span>
            </div>
            <div className='menuItems mt-3'>
                <div className='item flex items-center gap-3'>
                    <i className="fas fa-users"></i>
                    <span className='text-sm'>Connections</span>
                </div>
                <div className='item flex items-center gap-3 mt-4'>
                    <i className="fas fa-address-book"></i>
                    <span className='text-sm'>Contacts</span>
                </div>
                <div className='item flex items-center gap-3 mt-4'>
                    <i className="fas fa-user"></i>
                    <span className='text-sm'>Following & followers</span>
                    
                </div>
                <div className='item flex items-center gap-3 mt-4'>
                    <i className="fas fa-users"></i>
                    <span className='text-sm'>Groups</span>
                </div>
                
                <hr className="my-5 border h-0.5 bg-lightGray"/>
                <div className='item flex items-center gap-4 mt-4'>
                    <i className="fas fa-calendar-days"></i>
                    <span className='text-sm'>Events</span>
                </div>

                <div className='item flex items-center gap-4 mt-4' >
                <i class="fa-solid fa-hashtag"></i>
                <span className='text-sm'>Hashtags</span>
                </div>
                <div className='item flex items-center gap-4 mt-4'>
                    <i className="fas fa-newspaper"></i>
                    <span className='text-sm'>Newsletters</span>
                </div>
                <div className='item flex items-center gap-4 mt-4'>
                    <i className="fas fa-cog"></i>
                    <span className='text-sm'>Settings</span>
                    </div>
                    <div className='item flex items-center gap-4 mt-4'>
                    <i className="fas fa-cog"></i>
                    <span className='text-sm'>Settings</span>
                    </div>


    
            </div>
        </div>
    </div>
</div>



   
  )
}
