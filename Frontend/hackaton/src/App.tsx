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
import UserCreateRequestForm from "./components/UserCreateRequestForm/UserCreateRequestForm";
import Request from "./components/Request/Request";
import VolunteerWorkTable from "./pages/VolunteerWorkTable/VolunteerWorkTable";
import VolunteerRequest from "./components/VolunteerRequest/VolunteerRequest";
import AdminWorkTable from "./pages/AdminWorkTable/AdminWorkTable";
import Login from "./pages/Login/Login";
import AdminRequests from "./components/AdminRequests/AdminRequests";
import AdminRequest from "./components/AdminRequest/AdminRequest";
import VolunteerList from "./components/VolunteerList/VolunteerList";
import Volunteer from "./components/Volunteer/Volunteer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage errorMessage={"Page Not Found"} />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <RegisterChoice /> },
      { path: "/register/user", element: <RegisterUser /> },
      { path: "/register/volunteer", element: <RegisterVolunteer /> },

      { path: "/user/id/requests", element: <UserWorkTable /> },
      {
        path: "/user/id/requests/:id",
        element: <Request />,
      },
      {
        path: "/user/id/create_card",
        element: <UserCreateRequestForm />,
      },
      { path: "/volunteer/id/requests", element: <VolunteerWorkTable /> },
      { path: "/volunteer/id/requests/:id", element: <VolunteerRequest /> },

      { path: "/admin", element: <AdminWorkTable /> },
      { path: "/admin/requests", element: <AdminRequests /> },
      { path: "/admin/requests/:id", element: <AdminRequest /> },

      { path: "/admin/volunteers", element: <VolunteerList /> },
      { path: "/admin/volunteers/:id", element: <Volunteer /> },
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
