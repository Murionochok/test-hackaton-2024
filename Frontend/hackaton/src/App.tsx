import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "./pages/Layout";
import Home from "./pages/Home/Home";
import UserWorkTable from "./pages/UserWorkTable/UserWorkTable";
import { Provider } from "react-redux";
import store from "./store";
import ErrorPage from "./pages/Error/ErrorPage";
import RegisterChoice from "./pages/Register/RegisterChoice/RegisterChoice";
import RegisterUser from "./pages/Register/RegisterUser/RegisterUser";
import RegisterVolunteer from "./pages/Register/RegisterVolunteer/RegisterVolunteer";

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
      { path: "/register", element: <RegisterChoice /> },
      { path: "/register/user", element: <RegisterUser /> },
      { path: "/register/volunteer", element: <RegisterVolunteer /> },
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
