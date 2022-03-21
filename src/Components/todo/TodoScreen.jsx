import TodoCard from "./TodoCard";
import AddTodo from "./AddTodo";
import { useSelector } from "react-redux";
import { Toaster } from "react-hot-toast";
import EmptyTodos from "../EmptyTodo/EmptyTodos";

const TodoScreen = () => {
  const todos = useSelector((state) => state.todos);

  if (todos.length === 0) {
    return (
      <main>
        <div className="emptytodo__container">
          <EmptyTodos />
          <AddTodo />
        </div>
      </main>
    );
  }

  return (
    <main>
      <div className="mt-4">
        <div className="container-fluid">
          <div className="row">
            {todos.map((todo) => (
              <TodoCard key={todo._id} {...todo} />
            ))}
          </div>
        </div>
        <AddTodo />
        <Toaster position="bottom-right" reverseOrder={false} />
      </div>
    </main>
  );
};

export default TodoScreen;
