import { Link } from "react-router-dom";
import BorderButton from "../../../components/Partials/Buttons/Btn collections/BorderButton";

const ContestCategory = () => {
  return (
    <div className="bg-[#111828] py-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-content-center">
      {" "}
      <Link to="/allcontest/business%20contest">
        <BorderButton> Business Innovation Contest </BorderButton>{" "}
      </Link>
      <Link to="/allcontest/writing">
        <BorderButton> Coding Contest </BorderButton>{" "}
      </Link>
      <Link to="/allcontest/business%20contest" >
      <BorderButton> Innovation & Tech Contest </BorderButton>{" "}
      </Link>
      <Link to="/allcontest/writing">
        <BorderButton> Writing Contest </BorderButton>{" "}
      </Link>
      <Link to="/allcontest/medical">
        <BorderButton> Mental Health Improvement </BorderButton>{" "}
      </Link>
      <Link to="/allcontest/business%20contest">
        <BorderButton> Photography Contest </BorderButton>{" "}
      </Link>
      <Link to="/allcontest/gaming">
        <BorderButton> Gaming Contest </BorderButton>{" "}
      </Link>
      <Link to="/allcontest/writing">
        <BorderButton> Story Writing </BorderButton>{" "}
      </Link>
      <Link to="/allcontest/writing">
        <BorderButton> Web Development </BorderButton>{" "}
      </Link>
      <Link to="/allcontest/medical">
        <BorderButton> Community Engagement </BorderButton>{" "}
      </Link>
      <Link to="/allcontest/writing">
        <BorderButton> Digital Art Contest </BorderButton>{" "}
      </Link>
      <Link to="/allcontest/medical">
        <BorderButton> Medical Contest </BorderButton>{" "}
      </Link>
    </div>
  );
};

export default ContestCategory;
