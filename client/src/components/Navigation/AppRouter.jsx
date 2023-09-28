import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Map from "../Map/Map";
import GetAllMuseums from "../Museums/GetAllMuseums";
import UserProfile from "../Users/UserProfile";
import Logout from "../Users/Logout";
import Auth from "../Users/Auth";
import Navbar from "./NavBar";
import GetSingleMuseum from "../Museums/GetSingleMuseum";

import { useSelector } from "react-redux";
import { selectCurrentToken } from "../../Redux/authSlice";
import { useState } from "react";
import AllReviews from "../Reviews/AllReviews";

export default function AppRouter() {
  const token = useSelector(selectCurrentToken);

  return (
    <>
      <div>
        <Navbar token={token} />
      </div>
      <div>
        <Routes>
          {/* <h1>Hello world</h1> */}
          <Route path="/" element={<Home />} />
          <Route path="/map" element={<Map />} />
          <Route path="/museums" element={<GetAllMuseums />} />
          <Route path="/profile" element={<UserProfile token={token} />} />
          <Route path="/register" element={<Auth token={token} />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/museums/:museumId" element={<GetSingleMuseum />} />
          <Route path="/reviews" element={<AllReviews />} />
        </Routes>
      </div>
    </>
  );
}
