import { Link } from "react-router-dom";
import XButton from "../../components/Partials/Buttons/Btn collections/XButton";
import ContestCard from "../../components/Partials/Contest/ContestCard";

const PopularContests = () => {
  return (
    <div className="py-20">
      {" "}
      <h2 className="text-4xl font-bold">Popular Contests </h2>
      <div className="grid grid-cols-1 sm:grid-cols-1 gap-4 sm:px-5 sm:py-10">
        <ContestCard></ContestCard>
        <ContestCard></ContestCard>
        <ContestCard></ContestCard>
        <ContestCard></ContestCard>
        <ContestCard></ContestCard>
      </div>
      <Link to="allcontest">
      <XButton> See All Contest </XButton>
      </Link>
    </div>
  );
};

export default PopularContests;
