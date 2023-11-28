import { Link } from "react-router-dom";
import XButton from "../../../components/Partials/Buttons/Btn collections/XButton";

const Admin = () => {
  return (
    <div>
      {" "}
      <iframe
        src="https://giphy.com/embed/xUStFKHmuFPYk"
        width="680"
        height="275"
        frameBorder="0"
        className="giphy-embed mx-auto"
        allowFullScreen
      ></iframe>{" "}
      <div className="mt-20">
        <div className="flex w-full">
          <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">
            <Link to="/dashboard/managecontests">
              <XButton> Mange Contests </XButton>
            </Link>
          </div>
          <div className="divider divider-horizontal">OR</div>
          <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">
            <Link to="/dashboard/manageusers">
              <XButton> Manage Users</XButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
