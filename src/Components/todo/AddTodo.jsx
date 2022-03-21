import { Link } from "react-router-dom";

const AddTodo = () => {
  return (
    <div className="wrap-button">
      <Link to="/addTodo">
        <span className="fa-solid fa-plus rounded-circle icon"></span>
      </Link>
    </div>
  );
};

export default AddTodo;
