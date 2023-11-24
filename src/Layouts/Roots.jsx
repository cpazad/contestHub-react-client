import { Helmet } from "react-helmet-async";
import { Outlet } from "react-router-dom";
import "./root.css";
import Footer from "../components/Shared/Footer/Footer";
import Navbar from "../components/Shared/Header/Navbar";

const Roots = () => {
  return (
    <div>
      <Helmet>
        <title> ContestHub </title>
      </Helmet>
      <div className="root-container bg-slate-100 ">
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Roots;
