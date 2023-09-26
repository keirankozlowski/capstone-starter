import { useState } from "react";
import { createUser } from "../../helpers/fetching";
import { useNavigate } from "react-router-dom";

export default function Register({ token, setToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(username, password);
    const register = await createUser(username, password);
    //deleted .data from below
    setToken(register.token);
    console.log(register);
    // console.log("register", register);
    setUsername("");
    setPassword("");
    // nav("/posts");
  };

  return (
    <>
      <h1>Register</h1>

      <form onSubmit={handleSubmit}>
        <input
          autoFocus
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      {token == null ? null : <h4>You're registered!</h4>}
    </>
  );
}
