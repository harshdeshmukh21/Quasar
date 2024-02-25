import React from 'react'
import NavbarMain from '../Navbar'
import Profile from './Profile'
import './focusroom.css'


const Focusedroom = () => {

  return (
    <>
<p1 className="mt-32">You have now entered the focus room. Please ensure that u stay focused and determined to your task. </p1>
    
    <div className="App">
      <div className="App-column1">
      <div className="user-container">
        <Profile />
      </div>
      <div className="user-container">
        <Profile />
      </div>
      <div className="user-container">
        <Profile />
      </div>
      <div className="user-container">
        <Profile />
      </div>
    </div>


    </div>
    

  </>
  )
}

export default Focusedroom