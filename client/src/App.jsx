import { Route, Routes } from "react-router-dom";
import "./App.css";
import LoginForm from "./components/loginForm";
import RegisterForm from "./components/RegisterForm";
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";
import { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const getUser = async () => {
      const response = await fetch("http://localhost:8080/api/auth/me", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: token,
        },
      });
      const data = await response.json();

      if (data.ok) {
        setUser(data.user);
      }
    };

    if (token) {
      getUser();
    }
  }, []);
  console.log(user);

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
      </Routes>
    </>
  );
}

export default App;
