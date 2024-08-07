import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, React, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { Bounce, toast } from "react-toastify";
import logo from "../assets/logo.png";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");

  useEffect(() => {
    toast.success("Welcome to the AgriMitra!", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      
    });

    const loggedInUserName = localStorage.getItem("userName");
    if (loggedInUserName) {
      setUserName(loggedInUserName);
    }
  }, []);

  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("role");
    localStorage.removeItem("userName");
    navigate("/login"); // Redirect to login or home page
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-custom fixed-top">
      <NavLink className="navbar-brand d-flex align-items-center" to="/">
        <img
          src={logo}
          alt="Logo"
          width="45"
          height="45"
          className="d-inline-block align-top mr-2"
        />
        <span>AgriMitra</span>
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item">
            <NavLink
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          {!isLoggedIn && (
            <>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active" : ""}`
                  }
                  to="/register"
                >
                  Become a Renter
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active" : ""}`
                  }
                  to="/register"
                >
                  Register
                </NavLink>
              </li>
            </>
          )}
          <li className="nav-item">
            <NavLink
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
              to="/aboutus"
            >
              About Us
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
              to="/contactus"
            >
              Contact Us
            </NavLink>
          </li>
          {isLoggedIn && (
            <>
              <li className="nav-item">
                <span className="navbar-text mr-2">Welcome, {userName}!</span>
              </li>
              <li className="nav-item">
                <button
                  onClick={handleLogout}
                  className="nav-link btn btn-link"
                >
                  Logout
                </button>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
