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
            to="/allcontest"
            style={({ isActive }) => ({
              color: isActive ? "red" : "white",
            })}
          >
            All Contests
          </NavLink>
        </div>
      </i>

      {user && (
        <>
          <i>
            <div style={linkStyle}>
              <NavLink
                to="/pricing"
                style={({ isActive }) => ({
                  color: isActive ? "red" : "white",
                })}
              >
                Pricing
              </NavLink>
            </div>
          </i>

          <i>
            <div style={linkStyle}>
              <NavLink
                to="/leaderboard"
                style={({ isActive }) => ({
                  color: isActive ? "red" : "white",
                })}
              >
                Leaderboard
              </NavLink>
            </div>
          </i>
        </>
      )}

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
      {/* <i>
        <div style={linkStyle}>
          <NavLink
            to="/registration"
            style={({ isActive }) => ({
              color: isActive ? "red" : "white",
            })}
          >
            registration
          </NavLink>
        </div>
      </i> */}
    </>
  );
};

export default MenuLinks;
