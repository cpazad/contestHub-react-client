import profileImg from "../../../assets/images/woman2.jpg"
import XButton from "../Buttons/Btn collections/XButton";
const CreatorCard = ({user}) => {
  const {name, photo} = user
  return (
    <div>
      <div className="card w-96 bg-gray-800 shadow-xl">
        <figure className=" pt-10">
          <img
            className="mask mask-circle w-32 h-32"
            // src="https://daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.jpg"
            src={photo}
          />
        </figure>
        <div className="card-body items-center text-center text-stone-100">
          <h2 className="card-title text-violet-400"> Best Creator </h2>
          <h2 className="card-title text-violet-100"> {name} </h2>
          <p> Number of Contest Created : 5 </p>
          <p> Highest Participant : 250 </p>
          <div className="card-actions py-2">
            <XButton> See My Contest </XButton>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default CreatorCard;
