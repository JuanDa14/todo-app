import TodoCard from "./TodoCard";
import AddTodo from "./AddTodo";
import { useSelector } from "react-redux";
import EmptyTodos from "../EmptyTodo/EmptyTodos";
import Modal from "../modal/Modal";

const TodoScreen = () => {
  const todos = useSelector((state) => state.todos);

  if (todos.length === 0) {
    return (
      <div className="container">
        <Modal />
        <main className="emptytodo__container">
          <EmptyTodos />
          <AddTodo />
        </main>
      </div>
    );
  }

  return (
    <div className="container">
      <Modal />
      <main>
        <div className="row">
          {todos.map((todo) => (
            <TodoCard key={todo._id} {...todo} />
          ))}
        </div>
      </main>
      <AddTodo />
    </div>
  );
};

export default TodoScreen;
