import React, { useState } from 'react';
import '../pomodoro.css'

const Goals = () => {
  const [goal, setGoal] = useState(''); // Initialize the goal state with an empty string

  const handleChange = (event) => {
    setGoal(event.target.value); // Update the goal state when the input value changes
  };

  return (
    <div>
      <div className="goals flex flex-col p-3 items-center rounded-md	 text-3xl"><label className=' font-normal text-sm text-white' >Todays Goal</label>
      <input
      placeholder='Insert here'
      className='m-2 h-20 bg-transparent border-none text-3xl flex flex-wrap text-center '
        type="text"
        id="goal"
        value={goal} // Bind the input value to the goal state
        onChange={handleChange} // Call handleChange when the input value changes
      /></div>
      
    </div>
  );
};

export default Goals;
