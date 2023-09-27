import React from "react";

const NavBar = ({ user, setUser }) => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };
  return (
    <div>
      {user ? (
        <div>
          <h1>Welcome, {user.username}!</h1>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <h1>Please log in</h1>
      )}
    </div>
  );
};

export default NavBar;
