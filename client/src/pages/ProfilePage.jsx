import React from 'react'
import './profilepage.css';
import RightBar from './RightBar';

export default function ProfilePage() {
  return (
    <>
   <div className='profile'>
    <div className='images'>
      <img src='https://images.unsplash.com/photo-1511300636408-a63a89df3482?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='' className='cover'/>
      <img src="https://images.unsplash.com/photo-1531727991582-cfd25ce79613?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""  className='profilePic'/>

    </div>
    <div className='profileContainer'>
      <div className='center'>
        <h2>John Doe</h2>
        <p>Front-End Developer</p>
        <span>Developer looking to implement her coding skills <br /> Open to work </span>
        <div className='buttonP'>
          <button className='button1'>Open to</button>
          <button className='button2'>Add profile section</button>
          <button className='button3'>More</button>
        </div>

    
      </div>

    


    </div>

    

    </div>
    <RightBar/>
   
    </>
  )
}
