import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "./pages/Layout";
import Home from "./pages/Home/Home";
import UserWorkTable from "./pages/UserWorkTable/UserWorkTable";
import UserCreateRequestForm from "./components/UserCreateRequestForm/UserCreateRequestForm";

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
      {
        path: "/user/create_card",
        element: <UserCreateRequestForm />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="wrapper">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
