import { Link } from "react-router-dom";
import HoverButton from "../../components/Partials/Buttons/Btn collections/HoverButton";
import "./pricing.css";
const Pricing = () => {
  return (
    <div>
      <h2 className="text-center">Responsive Pricing Tables</h2>
      <p className="text-center">
        Resize the browser window to see the effect.
      </p>
      {/* Price tables  */}
      <div className="sm:px-20 sm:py-10">
      <div className="columns">
        <ul className="price">
          <li className="header">Basic</li>
          <li className="grey">$ 9.99 / year</li>
          <li>10GB Storage</li>
          <li>10 Emails</li>
          <li>10 Domains</li>
          <li>1GB Bandwidth</li>
          <li className="grey">
          <Link>
            <HoverButton> Sign Up </HoverButton>
            </Link>
          </li>
        </ul>
      </div>
      <div className="columns">
        <ul className="price">
          <li className="text-3xl bg-teal-400" >
            Pro
          </li>
          <li className="grey">$ 24.99 / year</li>
          <li>25GB Storage</li>
          <li>25 Emails</li>
          <li>25 Domains</li>
          <li>2GB Bandwidth</li>
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
          <li>50GB Storage</li>
          <li>50 Emails</li>
          <li>50 Domains</li>
          <li>5GB Bandwidth</li>
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
