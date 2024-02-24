import React, { useState } from "react";
import Form from "../Form/Form";
import Todo from "../Todo/Todo";
import Edit from "../Edit/Edit";
import '../todo.css'

const Todolist = () => {
  const [todoValue, setTodo] = useState([]);

  const createTodo = (todo) => {
    setTodo([
      ...todoValue,
      { id: todoValue.length, task: todo, isEditing: false },
    ]);
  };

  const deleteTodo = (id) => {
    setTodo(todoValue.filter((todo) => todo.id !== id));
  };

  const editTodo = (id) => {
    setTodo(
      todoValue.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const editTask = (task, id) => {
    setTodo(
      todoValue.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };

  return (
    <div className="container flex  items-center flex-col overflow-auto">
      <Form createTodo={createTodo} />
      <div className="overflow-auto max-h-96 text-black flex justify-center items-center">
        <div className="flex flex-col text-black overflow-auto">
          {todoValue.map((todo, idx) =>
            todo.isEditing ? (
              <Edit key={idx} editTodo={editTask} task={todo} />
            ) : (
              <Todo
              className='text-black'
                task={todo}
                key={idx}
                deleteTodo={deleteTodo}
                editTodo={editTodo}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Todolist;
