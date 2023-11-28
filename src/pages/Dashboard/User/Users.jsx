import { Link } from "react-router-dom";
import XButton from "../../../components/Partials/Buttons/Btn collections/XButton";
import useUser from "../../../Hooks/useUser";
import useAuth from "../../../Hooks/useAuth";

const Users = () => {
//const [users] = useUser()
 const {user}= useAuth()
console.log(user)
return <div>
{" "}
<div>
<div className="card w-96 bg-base-100 shadow-xl mx-auto">
  <figure className="px-10 pt-10">
    <img src={user.photoURL} alt="Shoes" className="rounded-xl mask mask-circle" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{user.displayName}</h2>
    <p>{user.email}</p>
    <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
</div>
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
 
 