import Marquee from "react-fast-marquee";

import CreatorCard from "../../../components/Partials/Contest/CreatorCard";
const BestCreators = () => {
  return (
    <div className="py-10">
      {" "}
      <h2 className="text-4xl"> Best Creator of 2023 </h2>
      <div>
        <Marquee>
          <div className="m-4">
            <CreatorCard></CreatorCard>
          </div>
          <div className="m-4">
          <CreatorCard></CreatorCard>
          </div>
          <div className="m-4">
          <CreatorCard></CreatorCard>
          </div>
         
        </Marquee>
      </div>{" "}
    </div>
  );
};

export default BestCreators;
