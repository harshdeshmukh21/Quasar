import React from "react";
import { AiFillEdit } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";
import '../todo.css'
import { Checkbox } from "@material-tailwind/react";

const Todo = ({ task, deleteTodo, editTodo }) => {
  return (
    <div className="flex todo-box justify-between items-center ml-0 bg-violet-800 bg-white text-black py-3 px-4 rounded-md mb-1 cursor-pointer">
      <Checkbox defaultChecked className="text-x1 flex-start" />
      <div className="flex items-center gap-x-4 todo">
        <p className="font-primary ml-4 flex-start">{task.task}</p>
      </div>
      <div className="flex items-center gap-x-4 todo">
        <AiFillEdit className="text-x1 flex-end" onClick={() => editTodo(task.id)} />
        <BsFillTrashFill
          className="text-x1 flex-end"
          onClick={() => deleteTodo(task.id)}
        />
      </div>
    </div>
  );
};

export default Todo;
