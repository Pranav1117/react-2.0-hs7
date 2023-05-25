import { Link } from "react-router-dom";
import "./navbar.css";
import React from "react";

const NavBar = () => {
  return (
    <div className="navbar">
      <Link className="text" to="/">
        Home
      </Link>
      <Link className="text" to="/studentlist">
        Students
      </Link>
      <Link className="text" to="/contactus">
        Contact Us
      </Link>
    </div>
  );
};

export default NavBar;
