import React from "react";
import ReactDOM from "react-dom";
import TodoApp from "./TodoApp";
import "./styles/styles.scss";
import "animate.css";

ReactDOM.render(
  <React.StrictMode>
    <TodoApp />
  </React.StrictMode>,
  document.getElementById("root")
);
