import React from 'react'
import './focusroom.css';
import profile from './profile.png'

const Profile = ({photoUrl, displayname}) => {
  return (
    
    <div className="user-profile rounded-md ">
      
    <img  src={photoUrl} className='png'/>
    <h2 className='name m-2'>{displayname}</h2>
    {/* <p className='m-2'>Studying</p> */}
  </div>
  )
}

export default Profile;