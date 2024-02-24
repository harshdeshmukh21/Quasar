import React, { useState } from "react";
import Form from "../Form/Form";
import Todo from "../Todo/Todo";
import Edit from "../Edit/Edit";

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
    <div className="container bg-blue-950 mt-20 p-8 rounded-md">
      <Form createTodo={createTodo} />
      {todoValue.map((todo, idx) =>
        todo.isEditing ? (
          <Edit key={idx} editTodo={editTask} task={todo} />
        ) : (
          <Todo
            task={todo}
            key={idx}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        )
      )}
    </div>
  );
};

export default Todolist;