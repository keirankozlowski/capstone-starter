import React from "react";
import AppRouter from "./components/Navigation/AppRouter";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentToken } from "./Redux/authSlice";
import { setCredentials } from "./Redux/authSlice";

function App() {
  const dispatch = useDispatch();
  const token = useSelector(selectCurrentToken);

  useEffect(() => {
    if (token) {
      dispatch(setCredentials({ token: token }));
    }
  }, [token, dispatch]);
  return (
    <>
      <AppRouter token={token} />
    </>
  );
}

export default App;
