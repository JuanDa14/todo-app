import React from "react";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import NavBarScreen from "./navbar/NavBarScreen";
import TodoScreen from "./todo/TodoScreen";

const TodoRouter = () => {
  return (
    <>
      <NavBarScreen />
      <div>
        <Routes>
          <Route index element={<TodoScreen />} />
          <Route path="*" element={<TodoScreen />} />
        </Routes>
      </div>
      <Toaster position="bottom-right" reverseOrder={false} />
    </>
  );
};

export default TodoRouter;
