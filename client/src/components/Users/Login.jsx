import { useState } from "react";
import { loginUser } from "../../helpers/fetching";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
// import { login } from "../../Redux/authSlice";
import { setCredentials } from "../../Redux/authSlice";
// import { fetchFavoritesByUserIdAsync } from "../../Redux/favoriteSlice";
import { setFavorites } from "../../Redux/favoriteSlice";
import { fetchFavoritesByUserId } from "../../helpers/fetching";

export default function Login() {
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
    console.log("register", register);

    if (register) {
      setSuccessMessage("You have logged in");
      setError(null);
      dispatch(
        setCredentials({
          username: register.user.username,
          userId: register.user.userId,
          token: register.token,
        })
        // fetchFavoritesByUserIdAsync(register.user.userId)
      );
      const myFavorites = await fetchFavoritesByUserId(register.user.userId);

      // Dispatch setFavorites action to update favorites in Redux store
      dispatch(setFavorites(myFavorites));
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
