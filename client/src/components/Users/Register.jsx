import React, { useState } from "react";
import { createUser, fetchUserByUsername } from "../../helpers/fetching";
import { useDispatch } from "react-redux";
import { setCredentials } from "../../Redux/authSlice";
import MessageAlert from "./MessageAlert";
import "./JournalEntries.css";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});
  const [successMessage, setSuccessMessage] = useState(null);

  const dispatch = useDispatch();

  const checkUsernameExists = async (username) => {
    try {
      const userExists = await fetchUserByUsername(username);
      return userExists;
    } catch (error) {
      // Handle errors from the fetching call
      return false;
    }
  };

  const isFormValid = async () => {
    const errors = {};

    if (!username.trim()) {
      errors.username = "Username is required.";
    } else if (username.length < 4) {
      errors.username = "Username must be at least 4 characters long.";
    }

    if (!password.trim()) {
      errors.password = "Password is required.";
    } else if (password.length < 8) {
      errors.password = "Password must be at least 8 characters long.";
    }

    const userExists = await checkUsernameExists(username);
    if (userExists) {
      errors.duplicateUser = "User exists. Please choose a different username.";
    }

    setError(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (await isFormValid()) {
      const register = await createUser(username, password);

      if (register) {
        dispatch(
          setCredentials({
            username: register.user.username,
            userId: register.user.userId,
            token: register.token,
          })
        );
        setError({});
        setSuccessMessage("You have signed up! Please log into your account.");
        setUsername("");
        setPassword("");
      } else {
        setError({ general: "Invalid credentials, please try again" });
        setSuccessMessage("");
      }
    }
  };

  return (
    <div className="form-container">
      <div className="register-container">
        <h1>Register</h1>

        <form onSubmit={handleSubmit}>
          <MessageAlert
            usernameError={error.username}
            passwordError={error.password}
            duplicateError={error.duplicateUser}
            type="error"
            onClose={() => setError({ ...error, username: "", password: "" })}
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
        {successMessage && <p className="success-message">{successMessage}</p>}
      </div>
    </div>
  );
}
