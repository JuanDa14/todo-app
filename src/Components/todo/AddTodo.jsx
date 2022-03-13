import { Link } from "react-router-dom";

const AddTodo = () => {
  return (
    <div className="wrap-button">
      <Link className="btn btn-primary rounded-circle" to="/addTodo">
        <i className="fa-solid fa-plus"></i>
      </Link>
    </div>
  );
};

export default AddTodo;
