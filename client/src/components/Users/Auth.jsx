import React from "react";
import Login from "./Login";
import Register from "./Register";

export default function Auth({ token, setToken }) {
  return (
    <div>
      <Login setToken={setToken} token={token} />
      <Register setToken={setToken} token={token} />
    </div>
  );
}
