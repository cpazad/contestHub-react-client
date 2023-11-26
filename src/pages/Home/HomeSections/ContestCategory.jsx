import { Link } from "react-router-dom";
import BorderButton from "../../../components/Partials/Buttons/Btn collections/BorderButton";

const ContestCategory = () => {
  return (
    <div className="bg-[#111828] py-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-content-center">
      {" "}
      <Link>
        <BorderButton> Design Contest </BorderButton>{" "}
      </Link>
      <Link>
        <BorderButton> Coding Contest </BorderButton>{" "}
      </Link>
      <BorderButton> Innovation & Tech Contest </BorderButton>{" "}
      <Link>
        <BorderButton> Writing Contest </BorderButton>{" "}
      </Link>
      <Link>
        <BorderButton> Art & Illustration Contest</BorderButton>{" "}
      </Link>
      <Link>
        <BorderButton> Photography Contest </BorderButton>{" "}
      </Link>
      <Link>
        <BorderButton> Logo creation </BorderButton>{" "}
      </Link>
      <Link>
        <BorderButton> Story Writing </BorderButton>{" "}
      </Link>
      <Link>
        <BorderButton> Web Desgin </BorderButton>{" "}
      </Link>
      <Link>
        <BorderButton> Community Engagement </BorderButton>{" "}
      </Link>
      <Link>
        <BorderButton> Digital Art Contest </BorderButton>{" "}
      </Link>
      <Link>
        <BorderButton> web design </BorderButton>{" "}
      </Link>
    </div>
  );
};

export default ContestCategory;
