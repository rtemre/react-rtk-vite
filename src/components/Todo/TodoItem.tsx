import { useState } from "react";
import type { Todo } from "./types";
import "./style.css";
import {
  useDeleteTodoMutation,
  useLazyGetTodoQuery,
} from "../../redux/slice/todo/todoApi";

function TodoItem({ todo }: { todo: Todo }) {
  const [deleteTodo] = useDeleteTodoMutation();
  const [getTodo, { data: fetchedTodo, isLoading }] = useLazyGetTodoQuery();
  const [showStatus, setShowStatus] = useState(false);

  const handleDelete = () => {
    deleteTodo(todo.id);
  };

  const handleToggleStatus = () => {
    if (!showStatus) {
      getTodo(todo.id);
    }
    setShowStatus(!showStatus);
  };

  return (
    <div className={`todo-item ${todo.completed ? "completed" : ""}`}>
      <h3 className="todo-text">{todo.todo}</h3>
      {showStatus && isLoading && <span>Loading...</span>}
      {showStatus && fetchedTodo && (
        <span>{fetchedTodo?.completed ? "Completed" : "Not Completed"}</span>
      )}
      <button className="todo-status" onClick={handleToggleStatus}>
        {showStatus ? "Hide Status" : "Show Status"}
      </button>
      <button className="todo-delete" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}

export default TodoItem;
