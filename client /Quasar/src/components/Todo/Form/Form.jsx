import React, { useState } from "react";
import '../todo.css'

const Form = ({ createTodo }) => {
  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    createTodo(value);
    setValue("");
  };
  return (
    <form className="mb-4 h-12 flex justify-center text-center  rounded-md font-primary  bg-white w-full"  onSubmit={handleSubmit}>
      <input
  type="text"
  className="outline-none bg-transparent flex justify-items-center item-center border-gray-500 py-4 px-4 w-[300px] text-black mb-8 rounded-md m-2 placeholder-center text-center"
  placeholder="what task do you have today?"
  onChange={(e) => setValue(e.target.value)}
  value={value}
/>

      {/* <button className="bg-gray-700 border-none p-2 text-white cursor-pointer rounded ml-2">
Add Task
      </button> */}
    </form>
  );
};

export default Form;
