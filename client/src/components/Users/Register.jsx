import { useState } from "react";
import { createUser } from "../../helpers/fetching";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCredentials } from "../../Redux/authSlice";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const nav = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(username, password);
    const register = await createUser(username, password);
    console.log("register:", register);

    if (register) {
      dispatch(
        setCredentials({ user: register.user.username, token: register.token })
      );
      setError(null);
      setSuccessMessage("You have signed up! Please log into your account!");
    } else {
      setError("Invalid credentials, please try again");
    }

    //deleted .data from below
    // setToken(register.token);
    // console.log(register);
    // console.log("register", register);
    // setUsername("");
    // setPassword("");
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
      {/* {token == null ? null : <h4>You're registered!</h4>} */}
    </>
  );
}
