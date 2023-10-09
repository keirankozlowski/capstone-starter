import React from "react";
import "./Navbar.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const Dropdown = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="dropdown">
      <button onClick={handleOpen}>
        {!open ? <>My Profile +</> : <>My Profile -</>}
      </button>
      {open && (
        <ul className="menu">
          <li className="menu-item">
            <Link to="/profile" onClick={handleClose}>
              Journal
            </Link>
          </li>
          <li className="menu-item">
            <Link to="/profile/reviews" onClick={handleClose}>
              Reviews
            </Link>
          </li>
          <li className="menu-item">
            <Link to="/profile/favorites" onClick={handleClose}>
              Favorites
            </Link>
          </li>
        </ul>
      )}
      {/* {open ? <div>Is Open</div> : <div>Is Closed</div>} */}
    </div>
  );
};

export default Dropdown;
