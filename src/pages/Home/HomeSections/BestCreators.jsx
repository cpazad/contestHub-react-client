import Marquee from "react-fast-marquee";

import CreatorCard from "../../../components/Partials/Creator/CreatorCard";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
const BestCreators = () => {
  const axiosSecure = useAxiosSecure();
  
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });
  return (
    <div className="py-10">
      {" "}
      <h2 className="text-4xl font-bold"> Best Creator of 2023 </h2>
      <p className="lg:w-[600px] mx-auto py-2 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore eius modi quas placeat beatae saepe fugiat harum minima officiis ea?</p>
      <div>
        <Marquee>
          {
            users.slice(0,3).map((user) => (<div key={user._id} className="m-4">
            <CreatorCard user={user} ></CreatorCard>
          </div>))
          }
          {/* <div className="m-4">
          <CreatorCard></CreatorCard>
          </div>
          <div className="m-4">
          <CreatorCard></CreatorCard>
          </div> */}
         
        </Marquee>
      </div>{" "}
    </div>
  );
};

export default BestCreators;
