import { NavLink, Outlet } from "react-router-dom";
import { GiTrophyCup } from "react-icons/gi";
import { MdOutlinePersonPin } from "react-icons/md";
import { BsPersonCircle } from "react-icons/bs";
import {
  FaBible,
  FaGamepad,
  FaHome,
  FaList,
  FaPaw,
  FaRegRegistered,
  FaUsers,
} from "react-icons/fa";

const Dashboard = () => {
  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-gray-800">
        <ul className="menu p-4 text-stone-50 ">
          <li>
            <NavLink
              className="hover:text-violet-300 uppercase"
              to="/dashboard/adminpanel"
            >
              <FaHome></FaHome>
              Admin Panel
            </NavLink>
          </li>
          <li>
            <NavLink
              className="hover:text-violet-300"
              to="/dashboard/manageusers"
            >
              <FaUsers></FaUsers>
              Manage Users
            </NavLink>
          </li>
          <li>
            <NavLink
              className="hover:text-violet-300"
              to="/dashboard/managecontests"
            >
              <FaGamepad />
              Manage Contests
            </NavLink>
          </li>
          <div className="border-2 border-stone-500 w-full my-2"></div>
          {/* Creator Panel */}
          <li>
            <NavLink
              className="hover:text-violet-300 uppercase"
              to="/dashboard/creatorspanel"
            >
              <FaPaw />
              Creators Panel
            </NavLink>
          </li>
          <li>
            <NavLink
              className="hover:text-violet-300"
              to="/dashboard/addnewcontest"
            >
              <FaGamepad />
              Add New Contest
            </NavLink>
          </li>

          <li>
            <NavLink
              className="hover:text-violet-300"
              to="/dashboard/mycontests"
            >
              <FaList></FaList>
              My Contests
            </NavLink>
          </li>
          <li>
            <NavLink
              className="hover:text-violet-300"
              to="/dashboard/contestdetails"
            >
              <FaBible />
              Contest Details
            </NavLink>
          </li>
          <div className="border-2 border-stone-500 w-full my-2"></div>
          {/* User Panel */}
          <li>
            <NavLink
              className="hover:text-violet-300 uppercase"
              to="/dashboard/userpanel"
            >
              <BsPersonCircle />
              User Panel
            </NavLink>
          </li>
          <li>
            <NavLink
              className="hover:text-violet-300 "
              to="/dashboard/participatedcontest"
            >
              <FaRegRegistered />
              My Registered Contest
            </NavLink>
          </li>
          <li>
            <NavLink
              className="hover:text-violet-300 "
              to="/dashboard/winningcotests"
            >
              <GiTrophyCup />
              My Winning Contest
            </NavLink>
          </li>

          <li>
            <NavLink
              className="hover:text-violet-300 "
              to="/dashboard/myprofile"
            >
              <MdOutlinePersonPin />
              My Profile
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
