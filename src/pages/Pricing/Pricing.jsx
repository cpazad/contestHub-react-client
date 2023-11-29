import { Link } from "react-router-dom";
import HoverButton from "../../components/Partials/Buttons/Btn collections/HoverButton";
import "./pricing.css";
const Pricing = () => {
  return (
    <div>
      <h2 className="text-center text-3xl bg-slate-900 py-2 text-stone-100 font-bold"> Pricing Tables</h2>
      
      {/* Price tables  */}
      <div className="sm:px-20 sm:py-10">
      <div className="columns">
        <ul className="price">
          <li className="header">Basic</li>
          <li className="grey">$ 9.99 / year</li>
          <li> 10 New Competition </li>
          <li> 1 Competion Monthly </li>
          <li> No - Featured in Front Page </li>
          <li> No Sponsorship </li>
          <li className="grey">
          <Link>
            <HoverButton> Sign Up </HoverButton>
            </Link>
          </li>
        </ul>
      </div>
      <div className="columns">
        <ul className="price">
          <li className="text-3xl bg-violet-400" >
            Pro
          </li>
          <li className="grey">$ 24.99 / year</li>
          <li>25 New Competition </li>
          <li> 3 Competion Monthly </li>
          <li> Featured in Front Page </li>
          <li> Special Sponsorship </li>
          <li className="grey">
          <Link>
            <HoverButton> Sign Up </HoverButton>
            </Link>
          </li>
        </ul>
      </div>
      <div className="columns">
        <ul className="price">
          <li className="header">Premium</li>
          <li className="grey">$ 49.99 / year</li>
          <li> 50 New Competition </li>
          <li> 10 Competion Monthly </li>
          <li> Featured in Front Page </li>
          <li> Prime Sponsorship </li>
          <li className="grey">
            {/* <a href="#" className="button">
              Sign Up
            </a> */}
            <Link>
            <HoverButton> Sign Up </HoverButton>
            </Link>
          </li>
        </ul>
      </div>{" "}
      </div>
      
    </div>
  );
};

export default Pricing;
