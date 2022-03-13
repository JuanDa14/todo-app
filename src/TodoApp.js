import { Provider } from "react-redux";
import AppRouter from "./routes/AppRouter";
import { store } from "./store/store";

const TodoApp = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
};

export default TodoApp;
