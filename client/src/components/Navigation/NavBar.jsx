import React from "react";
import { Link } from "react-router-dom";
// import "./Navbar.css"; // Import your CSS file
import "./Navbar.css"; // Import your CSS file

function Navbar() {
  return (
    <nav className="navbar">
      <h1>Museum App</h1>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/map">Map</Link>
        </li>
        <li>
          <Link to="/museums">Museums</Link>
        </li>

        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/register">Register/Login</Link>
        </li>
        <button>
          <Link to="/logout">Logout</Link>
        </button>
      </ul>
    </nav>
  );
}

export default Navbar;
