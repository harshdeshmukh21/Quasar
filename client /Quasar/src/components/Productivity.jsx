import React from 'react';
import PomodoroTimer from './Pomodoro';
import NavbarMain from './Navbar';
import { Focusroom } from './Focusroom';
import Calendar from './Calendar';
import Todomain from './Todo/Todo-main';
import './pomodoro.css';
import Quotes from './widget/Quotes';
import Goals from './widget/Goals';



const Productivity = () => {
  return (
    <div>
      <div className="nav-main mt-5 w-full flex justify-center top-10 left-[10rem] md:left-[40rem]">
        <NavbarMain />
      </div>

      <div className="main p-10  flex flex-col justify-center items-center ">
        <div className="flex mt-5">
          <div className="mx-1">
            <PomodoroTimer />
          </div>
          <div className="mx-1">
            <Focusroom />
          </div>
          <div className="mx-1">
            <Calendar />
          </div>
        </div>
        <div className="flex justify-around mt-5 ">
          <div className="mx-2 bg-gray-700 rounded-md ">
            <Todomain />
            
          </div>
          <div className="widget mx-1 rounded-md"><Goals /><Quotes/></div>
          <div className="stick mx-1 rounded-md"></div>
        </div>
      </div>
 
      
    </div>
  );
};

export default Productivity;
