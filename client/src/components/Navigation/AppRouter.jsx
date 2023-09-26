import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Map from "../Map/Map";
import GetAllMuseums from "../Museums/GetAllMuseums";
import UserProfile from "../Users/UserProfile";
import Logout from "../Users/Logout";
import Auth from "../Users/Auth";
import Navbar from "./NavBar";
import GetSingleMuseum from "../Museums/GetSingleMuseum";
import { useState } from "react";

export default function AppRouter() {
  const [token, setToken] = useState(null);
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        <Routes>
          {/* <h1>Hello world</h1> */}
          <Route path="/" element={<Home />} />
          <Route path="/map" element={<Map />} />
          <Route path="/museums" element={<GetAllMuseums />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route
            path="/register"
            element={<Auth setToken={setToken} token={token} />}
          />
          <Route path="/logout" element={<Logout />} />
          <Route path="/museums/:museumId" element={<GetSingleMuseum />} />
        </Routes>
      </div>
    </>
  );
}
