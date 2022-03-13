import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBarScreen from "./navbar/NavBarScreen";
import FormTodo from "./todo/FormTodo";
import TodoScreen from "./todo/TodoScreen";

const TodoRouter = () => {
  return (
    <>
      <NavBarScreen />
      <div className="container">
        <Routes>
          <Route index element={<TodoScreen />} />
          <Route path="addTodo" element={<FormTodo />} />
          <Route path="*" element={<TodoScreen />} />
        </Routes>
      </div>
    </>
  );
};

export default TodoRouter;
