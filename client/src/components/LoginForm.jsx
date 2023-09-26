import React, { useState } from "react";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
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
