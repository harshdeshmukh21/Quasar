import React from "react";
import { AiFillEdit } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";
import '../todo.css'

const Todo = ({ task, deleteTodo, editTodo }) => {
  return (
    <div className="flex todo-box  justify-between items-center ml-0 bg-voilet 800 bg-white text-black py-3 px-4 rounded-md mb-1 cursor-pointer">
      <p className="font-primary ">{task.task}</p>
      <div className="flex justify-end items-center gap-x-4 todo">
        <AiFillEdit className="text-x1" onClick={() => editTodo(task.id)} />
        <BsFillTrashFill
          className="text-x1"
          onClick={() => deleteTodo(task.id)}
        />
      </div>
    </div>
  );
};

export default Todo;