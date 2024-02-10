import React from "react";
import "./navbar.css";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  console.log(location.pathname);

  return (
    <div className="navbar">
      <ul>
        <li className={location.pathname == "/" ? "active" : ""}>
          <a href="/">Home</a>
        </li>
        <li className={location.pathname == "/contact" ? "active" : ""}>
          <a href="/contact">Contact</a>
        </li>
      </ul>
      <div>
        {1 > 2 ? (
          <ul>
            <li className={location.pathname == "/login" ? "active" : ""}><a href="/login">Login</a></li>
            <li className={location.pathname == "/register" ? "active" : ""}><a href="/register">Register</a></li>
          </ul>
        ) : (
          <ul>
           
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
