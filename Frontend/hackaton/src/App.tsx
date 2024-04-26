import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "./pages/Layout";
import Home from "./pages/Home/Home";
import UserWorkTable from "./pages/UserWorkTable/UserWorkTable";
import { Provider } from "react-redux";
import store from "./store";
import ErrorPage from "./pages/Error/ErrorPage";
import Register from "./pages/Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage errorMessage={"wmfwkfe"} />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      { path: "/register", element: <Register /> },
      {
        path: "/requests",
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
