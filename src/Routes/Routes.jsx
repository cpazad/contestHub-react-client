import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Layouts/Dashboard";
import Roots from "../Layouts/Roots";
import Login from "../Login/Login";
import Registration from "../Login/Registration";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Admin from "../pages/Dashboard/Admin/Admin";
import ErrorPage from "../pages/Error/ErrorPage";
import Home from "../pages/Home/Home";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Roots></Roots>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
        children: [
          {
            path: "adminpanel",
            element: <Admin></Admin>,
          },
        ],
      },
    ],
  },
]);

export default Router;
