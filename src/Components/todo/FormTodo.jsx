import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addAsyncTodo } from "../../actions/todo";
import useForm from "../../hooks/useForm";

const FormTodo = () => {
  const [formValues, handleInputChange] = useForm({
    title: "",
    description: "",
    date: "",
  });

  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const { title, description, date } = formValues;

  const handleAddTodo = (e) => {
    e.preventDefault();
    dispatch(addAsyncTodo({ ...formValues, userId: user.uid }));
    navigate("/");
  };

  return (
    <div className="container mt-4">
      <h1 className="card-title fs-3 mb-3">Added Todo</h1>
      <form onSubmit={handleAddTodo}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Title"
            className="form-control"
            name="title"
            value={title}
            onChange={handleInputChange}
            required
            minLength="6"
          />
        </div>
        <div className="form-group mt-3">
          <input
            type="date"
            placeholder="Text"
            className="form-control"
            name="date"
            value={date}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group mt-3">
          <textarea
            type="text"
            placeholder="Description"
            className="form-control"
            name="description"
            value={description}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group mt-3 d-flex justify-content-between">
          <button className="btn btn-primary">Submit</button>
          <Link className="btn btn-danger" to="/">
            Back
          </Link>
        </div>
      </form>
    </div>
  );
};

export default FormTodo;
