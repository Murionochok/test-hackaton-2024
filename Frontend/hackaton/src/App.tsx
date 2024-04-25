import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "./pages/Layout";
import Home from "./pages/Home/Home";
import UserWorkTable from "./pages/UserWorkTable/UserWorkTable";
import { Provider } from "react-redux";
import store from "./store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/user",
        element: <UserWorkTable />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <div className="wrapper">
        <RouterProvider router={router} />
      </div>
    </Provider>
  );
}

export default App;
