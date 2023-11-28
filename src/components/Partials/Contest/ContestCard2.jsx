/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import HoverButton from "../Buttons/Btn collections/HoverButton";

const truncateDetails = (details, limit = 10) => {

  const words = details.split(' ');

 
  if (words.length <= limit) {
    return details;
  }

 
  return words.slice(0, limit).join(' ') + '...';
};
const ContestCard2 = ({ item }) => {
  const { name, fee, prize, deadline, image, details,_id } = item;
    // Use the truncateDetails function to limit the details
    const truncatedDetails = truncateDetails(details, 10);
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-slate-200">
      <img className="w-full" src={image} alt="Sunset in the mountains" />
      <div className="px-6 py-4 text-left">
        <div className="font-bold mb-2 text-lg font-cinzel text-violet-400">
          {" "}
          {name}
        </div>
        <p>
          {" "}
          <span className="font-bold">Participation Fee:</span>$ {fee}
        </p>
        <p>
          {" "}
          <span className="font-bold">Winning Prize :</span> {prize}
        </p>
        <p>
          {" "}
          <span className="font-bold">Deadline:</span> {deadline}
        </p>
        <p className="text-gray-700 text-base">
          <span className="font-bold">Details</span> {truncatedDetails}
        </p>
      </div>
      <div className="py-3">
        <Link to={`/contest/${_id}`}>
        <HoverButton> See Details </HoverButton>
        </Link>
      </div>
      {/* <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #photography
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #travel
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #winter
        </span>
      </div> */}
    </div>
  );
};

export default ContestCard2;
