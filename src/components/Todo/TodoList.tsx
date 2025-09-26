import { useGetAllTodosQuery } from "../../redux/slice/todo/todoApi";
import TodoItem from "./TodoItem";
import type { Todo } from "./types";

function TodoList() {
  const { data, error, isLoading } = useGetAllTodosQuery({});
  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error fetching todos</p>}
      {data && data.map((todo: Todo) => <TodoItem key={todo.id} todo={todo} />)}
    </div>
  );
}

export default TodoList;
