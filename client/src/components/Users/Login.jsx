import { useState } from "react";
import { loginUser } from "../../helpers/fetching";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCredentials } from "../../Redux/authSlice";

export default function Login({ token }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState(null);
  const [error, setError] = useState(null);

  const nav = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(username, password);
    const register = await loginUser(username, password);
    // console.log("register", register);

    if (register) {
      setSuccessMessage("You have logged in");
      setError(null);
      dispatch(
        setCredentials({
          user: register.user.username,
          token: register.token,
        })
      );
    } else {
      setSuccessMessage("");
      setError("Please try again or register for an account");
    }
    nav("/map");
  };

  return (
    <>
      <h1>Login</h1>

      <form onSubmit={handleSubmit}>
        <input
          autoFocus
          id="username"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          id="password"
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      {/* {token == null ? null : <h4>You're logged in!</h4>} */}
    </>
  );
}
