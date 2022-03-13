import moment from "moment";
import { useDispatch } from "react-redux";
import { removeAsyncTodo, updatedAsyncTodo } from "../../actions/todo";

const TodoCard = ({ _id, pending, title, date, description }) => {
  const dispatch = useDispatch();

  const handleUpdateTodo = (id, pending) => {
    dispatch(updatedAsyncTodo(id, pending));
  };

  const handleRemoveTodo = (id) => {
    dispatch(removeAsyncTodo(id));
  };

  return (
    <div className="col-12 col-md-6 col-lg-4 text-center">
      <div className="card mb-3">
        <div className="row">
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title text-capitalize">{title}</h5>
              <div className="card-subtitle d-flex justify-content-center mt-2 gap-3">
                <h6 className="mb-2 text-muted">
                  {moment(date).format("DD-MM-YY")}
                </h6>
                <div className={`badge ${pending ? "bg-info" : "bg-success"}`}>
                  {pending ? "Pending" : "Complete"}
                </div>
              </div>
              <p className="card-text text-capitalize">{description}</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className=" card-footer h-100 d-flex flex-md-column justify-content-center align-items-center gap-2">
              {pending && (
                <button
                  className="card-link btn btn-primary"
                  onClick={() => handleUpdateTodo(_id, pending)}
                >
                  <i className="fa-solid fa-check-double"></i>
                </button>
              )}
              <button
                className="card-link btn btn-danger"
                onClick={() => handleRemoveTodo(_id)}
              >
                <i className="fa-solid fa-trash-can"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoCard;
