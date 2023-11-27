import profileImg from "../../../assets/images/woman2.jpg"
import XButton from "../Buttons/Btn collections/XButton";
const CreatorCard = () => {
  return (
    <div>
      <div className="card w-96 bg-gray-800 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            className="mask mask-circle"
            // src="https://daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.jpg"
            src={profileImg}
          />
        </figure>
        <div className="card-body items-center text-center text-stone-100">
          <h2 className="card-title text-violet-400"> Best Creator </h2>
          <p> Number of Contest Created : 5 </p>
          <p> Highest Participant : 250 </p>
          <div className="card-actions py-2">
            <XButton> See More </XButton>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default CreatorCard;
