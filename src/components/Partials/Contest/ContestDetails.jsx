import XButton from "../Buttons/Btn collections/XButton";
import cardImg from "../../../assets/images/Programming_Contests.jpg";
import winnerImg from "../../../assets/images/w1.png";
import { Link, useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";

const ContestDetails = () => {
  const { name, fee, prize, deadline, image, details, instruction, _id } =
    useLoaderData();
// --------------------Timer function----------
const [remainingTime, setRemainingTime] = useState(calculateRemainingTime());
    // Calculate the remaining time
    function calculateRemainingTime() {
      const now = new Date().getTime();
      const endTime = new Date(deadline).getTime();
      const timeDifference = endTime - now;

      if (timeDifference <= 0) {
        // If the deadline has passed, return zeros
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }
      // Calculate days, hours, minutes, and seconds
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  }
  // Update the remaining time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime(calculateRemainingTime());
    }, 1000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(timer);
  }, []);
// --------------------Timer function----------

  return (
    <div className="card lg:card-side bg-base-100 shadow-xl m-10 border-2">
      <figure className="px-5  max-w-xl bg-black">
        <img
          //   src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          src={image}
          alt=""
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-violet-400">Contest Title : {name}</h2>

        <div className="text-left px-16 mt-2">
          <p>
            {" "}
            <span className="font-bold"> Participation count : </span> 5{" "}
          </p>
          <p>
            {" "}
            <span className="font-bold"> Contest Description :</span> {details}
          </p>
          <p>
            {" "}
            <span className="font-bold"> Instrunction : </span> {instruction}
          </p>
          <p>
            {" "}
            <span className="font-bold"> Contest fee : </span> ${fee}
          </p>
          <p>
            {" "}
            <span className="font-bold"> Contest Prize : </span> {prize}
          </p>

         
          {/* timer */}
          <div className="py-2 mt-5">
            <p>
              {" "}
              <span className="font-bold "> Deadline : </span> {deadline}
            </p>
            <div className="flex gap-5 text-red-500 ">
              <div>
                <span className="countdown font-mono text-4xl">
                  <span style={{ "--value": remainingTime.days }}></span>
                </span>
                days
              </div>
              <div>
                <span className="countdown font-mono text-4xl">
                  <span style={{ "--value": remainingTime.hours }}></span>
                </span>
                hours
              </div>
              <div>
                <span className="countdown font-mono text-4xl">
                  <span style={{ "--value": remainingTime.minutes }}></span>
                </span>
                min
              </div>
              <div>
                <span className="countdown font-mono text-4xl">
                  <span style={{ "--value": remainingTime.seconds }}></span>
                </span>
                sec
              </div>
            </div>
          </div>
          {/* Winner */}
          <p className="mt-2">
            {" "}
            <span className="font-bold"> Contest Winner : </span> (if the
            deadline is over and the winner is decided.){" "}
          </p>
          <div className="flex  justify-around items-center card card-side border-2 gap-4 ">
            <img
              className="w-20 mask mask-circle py-3 "
              src={winnerImg}
              alt=""
            />
            <h3> Winner: Naina Talwar </h3>
          </div>
        </div>
        <div className="card-actions my-10">
          <Link>
            {" "}
            <XButton>Register for Contest </XButton>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContestDetails;
