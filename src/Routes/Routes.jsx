import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Layouts/Dashboard";
import Roots from "../Layouts/Roots";
import Login from "../Login/Login";
import Registration from "../Login/Registration";
import About from "../pages/Home/HomeSections/About";
import Contact from "../pages/Contact/Contact";
import Admin from "../pages/Dashboard/Admin/Admin";
import ErrorPage from "../pages/Error/ErrorPage";
import Home from "../pages/Home/Home";
import ManageUsers from "../pages/Dashboard/Admin/ManageUsers";
import ManageContests from "../pages/Dashboard/Admin/ManageContests";
import AddNewContest from "../pages/Dashboard/Creator/AddNewContest";
import MyContests from "../pages/Dashboard/Creator/MyContests";
import ContestDetails from "../pages/Dashboard/Creator/ContestDetails";
import MyProfile from "../pages/Dashboard/User/MyProfile";
import ParticipatedContests from "../pages/Dashboard/User/ParticipatedContests";
import WinningContests from "../pages/Dashboard/User/WinningContests";
import Users from "../pages/Dashboard/User/Users";
import Creators from "../pages/Dashboard/Creator/Creators";
import AllContest from "../pages/All Contest/AllContest";
import Pricing from "../pages/Pricing/Pricing";
import Leaderboard from "../pages/All Contest/Leaderboard";
import UpdateContest from "../pages/Dashboard/Creator/UpdateContest";

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
        path: "/allcontest",
        element: <AllContest></AllContest>,
      },
      {
        path: "/pricing",
        element: <Pricing></Pricing>,
      },
      {
        path: "/leaderboard",
        element: <Leaderboard></Leaderboard>,
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
          {
            path: "manageusers",
            element: <ManageUsers></ManageUsers>,
          },
          {
            path: "managecontests",
            element: <ManageContests></ManageContests>,
          },
          // creators panel
          {
            path: "creatorspanel",
            element: <Creators></Creators>,
          },
          {
            path: "addnewcontest",
            element: <AddNewContest></AddNewContest>,
          },
          {
            path: 'updateContest/:id',
            element: <UpdateContest></UpdateContest>,
            loader: ({params}) => fetch(`http://localhost:5000/contest/${params.id}`)
          },
          {
            path: "mycontests",
            element: <MyContests></MyContests>,
          },
          {
            path: "contestdetails",
            element: <ContestDetails></ContestDetails>,
          },
          // User Panel pages
          {
            path: "myprofile",
            element: <MyProfile></MyProfile>,
          },
          {
            path: "participatedcontest",
            element: <ParticipatedContests></ParticipatedContests>,
          },
          {
            path: "winningcotests",
            element: <WinningContests></WinningContests>,
          },
          {
            path: "userpanel",
            element: <Users></Users>,
          },
        ],
      },
    ],
  },
]);

export default Router;
