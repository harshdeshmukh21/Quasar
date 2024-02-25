import React from 'react';

const Calendar = () => {
  const currentDate = new Date();
  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
  const calendarDays = Array.from({ length: daysInMonth }, (_, index) => index + 1);
  
  const isCurrentDate = (day) => {
    return currentDate.getDate() === day && currentDate.getMonth() === currentDate.getMonth();
  };

  return (
    <div className="mx-auto max-w-lg calendar ">
      <div className="bg-gray-200 rounded-md text-gray-600 mb-3 font-bold text-center p-2">
        {currentDate.toLocaleString('default', { month: 'long' })} {currentDate.getFullYear()}
      </div>
      <div className="grid grid-cols-7 gap-1 text-white">
        <div className="text-center">Sun</div>
        <div className="text-center">Mon</div>
        <div className="text-center">Tue</div>
        <div className="text-center">Wed</div>
        <div className="text-center">Thu</div>
        <div className="text-center">Fri</div>
        <div className="text-center">Sat</div>
        {[...Array(firstDayOfMonth).fill(null), ...calendarDays].map((day, index) => (
          <div
            key={index}
            className={`text-center ${isCurrentDate(day) ? '  bg-purple-500  rounded-md text-white' : ''}`}
          >
            {day || ''}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
