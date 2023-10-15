// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { logOut, selectIsLoggedIn } from "../../Redux/authSlice";
// import "./Navbar.css";
// import logo from ".././images/logo.png";
// import { resetFavorites } from "../../Redux/favoriteSlice";
// import Dropdown from "./Dropdown";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars } from "@fortawesome/free-solid-svg-icons";

// function Navbar({ token }) {
//   const [isOpen, setIsOpen] = useState(false);

//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const isLoggedIn = useSelector(selectIsLoggedIn);

//   const onLogout = () => {
//     dispatch(logOut());
//     dispatch(resetFavorites());
//     navigate("/login");
//     console.log("logout token:", token);
//   };

//   const closeNavbar = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="navbar-container">
//       <nav className="navbar">
//         <img
//           src={logo}
//           alt="Logo"
//           className="logo"
//           onClick={() => navigate("/")}
//         />
//         <img />
//         <h1 className="navbar-title">aMUSE</h1>
//         <div className="menu-button" onClick={closeNavbar}>
//           <FontAwesomeIcon icon={faBars} /> {/* Use the faBars icon here */}
//         </div>
//         {isOpen ? (
//           <ul className="nav-links">
//             <li>
//               <Link to="/" className="nav-anchor">
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link to="/map" className="nav-anchor">
//                 Map
//               </Link>
//             </li>
//             <li>
//               <Link to="/museums" className="nav-anchor">
//                 Museums
//               </Link>
//             </li>
//             {isLoggedIn ? (
//               <>
//                 <li>
//                   <Dropdown />
//                 </li>
//                 <div className="logout-container">
//                   <button className="auth-btn" onClick={onLogout}>
//                     Log Out
//                   </button>
//                 </div>
//               </>
//             ) : (
//               <>
//                 <li>
//                   <Link to="/login" className="nav-anchor">
//                     Login
//                   </Link>
//                 </li>
//               </>
//             )}
//           </ul>
//         ) : (
//           <></>
//         )}
//       </nav>
//     </div>
//   );
// }

// export default Navbar;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logOut, selectIsLoggedIn } from "../../Redux/authSlice";
import "./Navbar.css";
import logo from ".././images/logo.png";
import { resetFavorites } from "../../Redux/favoriteSlice";
import Dropdown from "./Dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Navbar({ token }) {
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isLoggedIn = useSelector(selectIsLoggedIn);

  const onLogout = () => {
    dispatch(logOut());
    dispatch(resetFavorites());
    navigate("/login");
    console.log("logout token:", token);
  };

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar-container">
      <nav className="navbar">
        <img
          src={logo}
          alt="Logo"
          className="logo"
          onClick={() => navigate("/")}
        />
        <h1 className="navbar-title">aMUSE</h1>
        <div className="menu-button" onClick={toggleNavbar}>
          <FontAwesomeIcon icon={faBars} />
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/" className="nav-anchor">
              Home
            </Link>
          </li>
          <li>
            <Link to="/map" className="nav-anchor">
              Map
            </Link>
          </li>
          <li>
            <Link to="/museums" className="nav-anchor">
              Museums
            </Link>
          </li>
          {isLoggedIn ? (
            <>
              <li>
                <Dropdown />
              </li>
              <div className="logout-container">
                <button className="auth-btn" onClick={onLogout}>
                  Log Out
                </button>
              </div>
            </>
          ) : (
            <li>
              <Link to="/login" className="nav-anchor">
                Login
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
