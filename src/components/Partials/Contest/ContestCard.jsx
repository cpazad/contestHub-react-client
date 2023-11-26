import pcontest from "../../../assets/images/Programming_Contests.jpg";
import HoverButton from "../Buttons/Btn collections/HoverButton";
const ContestCard = () => {
  return (
    // <div className="card  bg-base-100 shadow-xl image-full before:bg-red-500">
    //   <figure className="">
    //     <img className=""
    //       src={pcontest}
    //       alt="Programming Contest Participants"
    //     />
    //   </figure>
    //   <div className="card-body text-left ">
    //     <h2 className="card-title"> Contest Name: Programming contest </h2>
    //     <p>No. of Participants: </p>
    //     <p>No. of Participants: </p>
    //     <p>Closing Date: </p>
    //     <p>Details: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum nam eaque ipsum. Facilis officia iste magni suscipit culpa? Commodi porro deleniti quas cum illo et enim, sit ullam dignissimos nam reiciendis dicta reprehenderit eum officia corporis voluptatum soluta, debitis, vero nulla! Tempore autem minima quod esse debitis magni animi soluta.</p>
    //     <div className="card-actions justify-end">
    //       <button className="btn btn-primary">Buy Now</button>
    //     </div>
    //   </div>
    // </div>
    <div className="card  lg:card-side bg-base-100 shadow-xl">
      <figure className="lg:w-2/5">
        <img className="h-full mask mask-hexagon-2 " src={pcontest} alt="Album" />
      </figure>
      <div className="card-body text-left lg:w-3/5  ">
        <h2 className="card-title"> Contest Name: Programming contest </h2>
        <p>No. of Participants : </p>
        <p>Closing Date : </p>
        <ul className="font-popins">
          <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
          <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
          <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
          <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
          <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
        </ul>
        {/* <p>
          Details: Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Illum nam eaque ipsum. Facilis officia iste magni suscipit culpa?
          Commodi porro deleniti quas cum illo et enim, sit ullam dignissimos
          nam reiciendis dicta reprehenderit eum officia corporis voluptatum
          soluta, debitis, vero nulla! Tempore autem minima quod esse debitis
          magni animi soluta.
        </p> */}
        <div className="card-actions justify-end">
          <HoverButton>See details</HoverButton>
        </div>
      </div>
    </div>
  );
};

export default ContestCard;
