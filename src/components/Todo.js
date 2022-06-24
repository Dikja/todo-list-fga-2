import React, { useState } from "react";
import TodoForm from "./TodoForm";
import { AiTwotoneDelete, AiFillEdit, AiFillCheckSquare } from "react-icons/ai";

function Todo({ todos, completeTodo, removeTodo, updateTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? "todo-row complete" : "todo-row"}
      key={index}
    >
      <div>{todo.text}</div>

      <div className="icons">
        <AiFillCheckSquare
          key={todo.id}
          onClick={() => completeTodo(todo.id)}
          className="complete-icon"
        />
        <AiTwotoneDelete
          onClick={() => removeTodo(todo.id)}
          className="delete-icon"
        />
        <AiFillEdit
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className="edit-icon"
        />
      </div>
    </div>
  ));
}

export default Todo;
