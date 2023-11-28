import Marquee from "react-fast-marquee";

import CreatorCard from "../../../components/Partials/Creator/CreatorCard";
const BestCreators = () => {
  return (
    <div className="py-10">
      {" "}
      <h2 className="text-4xl font-bold"> Best Creator of 2023 </h2>
      <p className="w-[600px] mx-auto py-2 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore eius modi quas placeat beatae saepe fugiat harum minima officiis ea?</p>
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
