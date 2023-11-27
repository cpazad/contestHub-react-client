import { Link } from "react-router-dom";
import XButton from "../../../components/Partials/Buttons/Btn collections/XButton";
const Users = () => {
return <div>
{" "}
<iframe
  src="https://giphy.com/embed/xUStFKHmuFPYk"
  width="980"
  height="275"
  frameBorder="0"
  className="giphy-embed"
  allowFullScreen
></iframe>{" "}
<div className="mt-20">
  <div className="flex w-full">
    <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">
      <Link to="/dashboard/myprofile">
        <XButton> My Profile </XButton>
      </Link>
    </div>
    <div className="divider divider-horizontal">OR</div>
    <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">
      <Link to="/dashboard/participatedcontest">
        <XButton> My Particiated Contest </XButton>
      </Link>
    </div>
    <div className="divider divider-horizontal">OR</div>
    <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">
      <Link to="/dashboard/winningcotests">
        <XButton> My Winning Contest </XButton>
      </Link>
    </div>
  </div>
</div>
</div>
 } 
 
export default Users 
 
 