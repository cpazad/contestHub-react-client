import Marquee from "react-fast-marquee";
import ContestCard2 from "../../../components/Partials/Contest/ContestCard2";
const BestCreators = () => {
  return (
    <div className="py-10">
      {" "}
      <h2 className="text-4xl"> Best Creator of 2023 </h2>
      <div>
        <Marquee>
          <div className="m-4">
            <ContestCard2></ContestCard2>
          </div>
          <div className="m-4">
            <ContestCard2></ContestCard2>
          </div>
          <div className="m-4">
            <ContestCard2></ContestCard2>
          </div>
         
        </Marquee>
      </div>{" "}
    </div>
  );
};

export default BestCreators;
