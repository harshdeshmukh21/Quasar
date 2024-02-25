import React from 'react'
import './focusroom.css';
import profile from './profile.png'

const Profile = () => {
  return (
    
    <div className="user-profile rounded-md ">
      
    <img  src={profile} className='png'/>
    <h2 className='name m-2'>Username</h2>
    <p className='m-2'>Studying</p>
  </div>
  )
}

export default Profile;