import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = ({ setUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();
      console.log(response);
      if (data.ok) {
        if (data.token) {
          localStorage.setItem("token", data.token);
          setUser(data.user);
          navigate("/");
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="Username">Username</label>
        <br />
        <input
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <br />
        <label htmlFor="Password">Password</label>
        <br />
        <input
          type="text"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        <button type="Submit">Submit</button>
      </form>
    </div>
  );
};

export default LoginForm;
