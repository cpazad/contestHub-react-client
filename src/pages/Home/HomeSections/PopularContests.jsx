import { Link } from "react-router-dom";
import XButton from "../../../components/Partials/Buttons/Btn collections/XButton";
// import ContestCard from "../../../components/Partials/Contest/ContestCard";
import ContestCard2 from "../../../components/Partials/Contest/ContestCard2";
import useContest from "../../../Hooks/useContest";

const PopularContests = () => {
  const [contest]= useContest()
  const gaming = contest.filter((item) => item.category === "gaming contest");
  return (
    <div className="py-20">
      {" "}
      <h2 className="text-4xl font-bold">Popular Contests </h2>
      <div className="grid grid-cols-1 sm:grid-cols-1 gap-4 sm:px-40 sm:py-10">
 
       
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 sm:px-40 md:px-20 gap-4 sm:py-5">
            {
                gaming.slice(0,6).map(item => <ContestCard2 key={item.id} item={item}></ContestCard2> )
              }
            </div>{" "}
      <Link to="allcontest/gaming">
        <XButton> See All Contest </XButton>
      </Link>
    </div>
  );
};

export default PopularContests;
