import React, { useState } from "react";
import DateTimePicker from "react-datetime-picker";
import { useDispatch } from "react-redux";

import { addAsyncTodo } from "../../actions/todo";
import { closeModal } from "../../actions/ui";

import useForm from "../../hooks/useForm";

const FormTodo = () => {
  const [formValues, handleInputChange] = useForm({
    title: "",
    description: "",
  });

  const [date, setDate] = useState(new Date());

  const dispatch = useDispatch();

  const { title, description } = formValues;

  const handleAddTodo = (e) => {
    e.preventDefault();
    dispatch(addAsyncTodo({ ...formValues, date }));
    dispatch(closeModal());
  };

  const handleDateChange = (e) => {
    setDate(e);
  };

  return (
    <div className="container">
      <h1 className="card-title fs-5 mb-3">New Todo</h1>
      <hr />
      <form onSubmit={handleAddTodo}>
        <div className="form-group mt-3">
          <p className="mb-2">Date:</p>
          <DateTimePicker
            className="form-control"
            value={date}
            onChange={handleDateChange}
            minDate={new Date()}
            required
          />
        </div>

        <div className="form-group mt-3">
          <p className="mb-2">Title:</p>
          <input
            type="text"
            placeholder="Example : Learn flutter "
            className="form-control"
            name="title"
            value={title}
            onChange={handleInputChange}
            required
            minLength="6"
          />
        </div>

        <div className="form-group mt-3">
          <p className="mb-2">Description:</p>
          <textarea
            type="text"
            placeholder="Example : Learn flutter for saturday"
            className="form-control"
            name="description"
            value={description}
            onChange={handleInputChange}
            rows="5"
            required
          />
        </div>

        <div className="form-group mt-4 w-100">
          <button className="btn btn-outline-primary w-100">
            <i className="fa-solid fa-plus"></i> Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormTodo;
