import React from 'react'
import PomodoroTimer from './Pomodoro'
import NavbarMain from './Navbar'
import { Focusroom } from './Focusroom'
import Calendar from './Calendar'
import './pomodoro.css'



export const Productivity = () => {
  return (
    <div>
     <div className="nav-main mt-5 w-full flex justify-center top-10 left-[10rem] md:left-[40rem] ">
        <NavbarMain />
      </div>
      <div className="main w-full flex justify-center lace-content-evenly list ">
      <section className="flex justify-around mt-5">
  <div className="mx-2">
    <PomodoroTimer />
  </div>
  <div className="mx-2">
    <Focusroom />
  </div>
  <div className="mx-2">
    <Calendar />
  </div>
</section>

      </div>
    
    </div>
  )
}
