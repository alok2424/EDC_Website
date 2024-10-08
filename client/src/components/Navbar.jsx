import { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";
import { MdArrowDropDown } from "react-icons/md";
import { useAuth } from "../store/Auth.jsx";
import client from "../../package.json";
import "./Navbar.css";

export const Navbar = () => {
  const { user } = useAuth();
  const { isLoggedIn } = useAuth();
  const navRef = useRef();
  const [navMenuValue, setNavMenuValue] = useState(false);

  const navMenuState = (navMenuValue) => {
    if (navMenuValue === true) {
      setNavMenuValue(false);
      return "none";
    } else {
      setNavMenuValue(true);
      return "block";
    }
  };
  const showNavMenu = () => {
    document.getElementById("navDropDown").style.display =
      navMenuState(navMenuValue);
  };
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const navActive = ({ isActive }) => {
    return { color: isActive ? "rgb(0, 195, 255" : "white" };
  };

  return (
    <>
      <header>
        <div id="Navbar" className="container">
          <div className="logo">
            <NavLink to="/">
              <img src="../imgs/EDC_logo.png" alt="Edc_Logo" />
            </NavLink>
          </div>
          <nav ref={navRef}>
            <NavLink style={navActive} to="/" onClick={showNavbar}>
              HOME
            </NavLink>
             {/*Events and Blog ek me hoga*/}  
            <div className="showNavMenu">
              <button className="navMenuButton" onClick={showNavMenu}>
                <div id="navMenu">
                  FEATURES
                  <MdArrowDropDown />
                </div>
              </button>
              <div id="navDropDown">
                <div onClick={showNavMenu}>
                  <span>
                    <NavLink to="/events">Events</NavLink>
                  </span>
                </div>

                <div onClick={showNavMenu}>
                  <span>
                    <NavLink to="/blog">Blogs</NavLink>
                  </span>
                </div>
              </div>
            </div>
            {/*Team and About Us ek me hoga */}
             <div className="showNavMenu">
                <button className="navMenuButton" onClick={showNavMenu}>
                <div id="navMenu">
                 DROPDOWN-2
                 <MdArrowDropDown />
                </div>
                </button>
                <div id="navDropDown">
                <div onClick={showNavMenu}>
                <span>
                  <NavLink to="/aboutus">ABOUT</NavLink>
                </span>
              </div>

              <div onClick={showNavMenu}>
                <span>
                  <NavLink to="/team">TEAM</NavLink>
                </span>
              </div>
            </div>
             </div>     
            <NavLink style={navActive} to="/contact" onClick={showNavbar}>
              CONTACT
            </NavLink>
            <div className="showNavMenu">
              <button className="navMenuButton" onClick={showNavMenu}>
                <div id="navMenu">
                  OTHERS
                  <MdArrowDropDown />
                </div>
              </button>
              <div id="navDropDown">
                {isLoggedIn ? (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "100%",
                    }}
                  >
                    {user.isAdmin && (
                      <div onClick={showNavMenu}>
                        <span>
                          <NavLink to="/admin">Admin</NavLink>
                        </span>
                      </div>
                    )}
                    <div onClick={showNavMenu}>
                      <span>
                        <NavLink to="/logout">Log Out</NavLink>
                      </span>
                    </div>
                  </div>
                ) : (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "100%",
                    }}
                  >
                    <div onClick={showNavMenu}>
                      <span>
                        <NavLink to="/login">Login</NavLink>
                      </span>
                    </div>
                    <div onClick={showNavMenu}>
                      <span>
                        <NavLink to="/signup">Sign Up</NavLink>
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            <button id="communityButton">
              <NavLink
                to="https://chat.whatsapp.com/Io5MxXmunWaCpUnoW3S0Gs"
                target="_blank"
              >
                JOIN COMMUNITY
              </NavLink>
            </button>
            <button className="nav-btn nav-close-btn" onClick={showNavbar}>
              <GoArrowRight />
            </button>
            <p id="version">Version {client.version}</p>
          </nav>
          <button className="nav-btn" onClick={showNavbar}>
            <FaBars />
          </button>
        </div>
      </header>
    </>
  );
};
