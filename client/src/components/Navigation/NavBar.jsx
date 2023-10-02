import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logOut } from "../../Redux/authSlice"; // import "./Navbar.css"; // Import your CSS file
import "./Navbar.css"; // Import your CSS file

function Navbar({ token }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogout = () => {
    dispatch(logOut());
    navigate("/register");
    console.log("logout token:", token);
  };

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
        {token ? (
          <>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <button className="auth-btn" onClick={onLogout}>
              Log Out
            </button>
          </>
        ) : (
          <>
            <li>
              <Link to="/register">Register/Login</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
