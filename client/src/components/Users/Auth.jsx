import React from "react";
import Login from "./Login";
import Register from "./Register";

export default function Auth({ token }) {
  return (
    <>
      <div className="auth-background">
        <div className="auth-container">
          <Register token={token} />
          <Login token={token} />
        </div>
      </div>
    </>
  );
}
