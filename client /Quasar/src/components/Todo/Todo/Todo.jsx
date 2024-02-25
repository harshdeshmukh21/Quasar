import React, { useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";
import '../todo.css'
import { Checkbox } from "@material-tailwind/react";

const Todo = ({ task, deleteTodo, editTodo }) => {
  const [completed, setCompleted] = useState(false);

  const handleCheckboxChange = () => {
    setCompleted(!completed);
  };

  return (
    <div className={`flex todo-box justify-between items-center ml-0 bg-violet-800 bg-white text-black p-3 rounded-md mb-1 cursor-pointer ${completed ? 'line-through' : ''}`}>
      <Checkbox
        checked={completed}
        color="purple"
        onChange={handleCheckboxChange}
        className="text-x1 flex-start"
      />
      <div className="flex items-center bg-white text-black flex-col gap-x-4 todo">
        <p className="font-primary ml-4  w-32 todo-container bg-white text-black flex-start">{task.task}</p>
      </div>
      <div className="flex items-center  todo">
        <BsFillTrashFill
          className="text-x1 h-4 flex-end"
          onClick={() => deleteTodo(task.id)}
        />
      </div>
    </div>
  );
};

export default Todo;
