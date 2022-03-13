import { useDispatch, useSelector } from "react-redux";
import { logoutSyncUser } from "../../actions/auth";
import { clearTodos } from "../../actions/todo";

const NavBarScreen = () => {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  const handleLogoutUser = () => {
    dispatch(logoutSyncUser());
    dispatch(clearTodos());
    localStorage.clear();
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container-fluid">
        <span className="navbar-brand">TodoApp</span>
        <ul className="navbar-nav d-flex flex-row">
          <li className="nav-item">
            <span className="nav-link active d-none d-sm-flex">
              {user.name}
            </span>
          </li>
          <li className="nav-item">
            <button className="btn text-light" onClick={handleLogoutUser}>
              Logout
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBarScreen;
