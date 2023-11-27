/* eslint-disable react/prop-types */

const ContestCard2 = ({ item }) => {
  const { name, fee, prize, deadline, image, details } = item;
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
          <span className="font-bold">Details</span> {details}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #photography
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #travel
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #winter
        </span>
      </div>
    </div>
  );
};

export default ContestCard2;
