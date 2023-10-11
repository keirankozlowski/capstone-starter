import React, { useState } from "react";
import { loginUser } from "../../helpers/fetching";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCredentials } from "../../Redux/authSlice";
import { fetchFavoritesByUserId } from "../../helpers/fetching";
import { setFavorites } from "../../Redux/favoriteSlice";
import MessageAlert from "./MessageAlert";
import "./JournalEntries.css";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});
  const [successMessage, setSuccessMessage] = useState(null);

  const nav = useNavigate();
  const dispatch = useDispatch();

  const isFormValid = () => {
    const errors = {};

    if (!username.trim()) {
      errors.username = "Invalid username. Please register an account.";
    }

    if (!password.trim()) {
      errors.password = "Incorrect password. Please try again.";
    }

    setError(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isFormValid()) {
      const loginResult = await loginUser(username, password);

      if (loginResult && loginResult.user) {
        dispatch(
          setCredentials({
            username: loginResult.user.username,
            userId: loginResult.user.userId,
            token: loginResult.token,
          })
        );
        const myFavorites = await fetchFavoritesByUserId(
          loginResult.user.userId
        );

        // Dispatch setFavorites action to update favorites in Redux store
        dispatch(setFavorites(myFavorites));
        setError({});
        setSuccessMessage("You have logged in!");
        nav("/map");
      } else {
        // Handle other errors here
        setError({
          general: "Invalid username or password. Please try again.",
        });
        setSuccessMessage("");
      }
    }
  };

  return (
    <div className="form-container">
      <div className="login-container">
        <h1>Login</h1>

        <form onSubmit={handleSubmit}>
          <MessageAlert
            usernameError={error.username}
            passwordError={error.password}
            generalError={error.general}
            successMessage={successMessage}
            type="error"
            onClose={() =>
              setError({
                ...error,
                username: "",
                password: "",
                general: "",
              })
            }
          />
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
      </div>
    </div>
  );
}
