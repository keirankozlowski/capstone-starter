import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Map from "../Map/Map";
import GetAllMuseums from "../Museums/GetAllMuseums";
import UserProfile from "../Users/UserProfile";
import Login from "../Users/Login";
import Logout from "../Users/Logout";
import Navbar from "./NavBar";

export default function AppRouter() {
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
          <Route path="/register" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </div>
    </>
  );
}
