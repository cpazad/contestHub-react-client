import { NavLink } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";


const MenuLinks = () => {
  const linkStyle = {
    margin: "10px",
    
  };
  const { user } = useAuth();
  return (
    <>
      <i>
        <div style={linkStyle}>
          <NavLink
            to="/"
            style={({ isActive }) => ({
              color: isActive ? "red" : "white",
            })}
          >
            Home
          </NavLink>
        </div>
      </i>
      <i>
        <div style={linkStyle}>
          <NavLink
            to="/menu"
            style={({ isActive }) => ({
              color: isActive ? "red" : "white",
            })}
          >
            Menu
          </NavLink>
        </div>
      </i>
      <i>
        <div style={linkStyle}>
          <NavLink
            to="/shop/salad"
            style={({ isActive }) => ({
              color: isActive ? "red" : "white",
            })}
          >
            Shop
          </NavLink>
        </div>
      </i>

      
      <i>
        <div style={linkStyle}>
          <NavLink
            to="/contact"
            style={({ isActive }) => ({
              color: isActive ? "red" : "white",
            })}
          >
            Contact Us
          </NavLink>
        </div>
      </i>
    </>
  );
};

export default MenuLinks;
