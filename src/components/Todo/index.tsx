import React, { useState } from "react";
import TodoList from "./TodoList";
import "./style.css";
import { useAddTodoMutation } from "../../redux/slice/todo/todoApi";

function Todo() {
  const [newTodo, setNewTodo] = useState("");
  const [addTodo] = useAddTodoMutation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const handleAddTodo = () => {
    // Logic to add todo (e.g., dispatch an action or call an API)
    addTodo({
      userId: 111,
      todo: newTodo,
      completed: false,
    });
    setNewTodo("");
  };

  return (
    <div className="todo-container">
      <h1>Todo Using RTK Query</h1>
      <div className="todo-add">
        <input type="text" value={newTodo} onChange={handleChange} />
        <button onClick={handleAddTodo}>Add Todo</button>
      </div>
      <TodoList />
    </div>
  );
}

export default Todo;
