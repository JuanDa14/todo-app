import { useDispatch } from "react-redux";
import { openModal } from "../../actions/ui";

const AddTodo = () => {
  const dispatch = useDispatch();

  const handleOpenModal = () => {
    dispatch(openModal());
  };

  return (
    <button
      className="btn btn-primary rounded-circle wrap-button "
      onClick={handleOpenModal}
    >
      <i className="fa-solid fa-plus fs-1"></i>
    </button>
  );
};

export default AddTodo;
