import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./Redux/store.js";
import App from "./App.jsx";
import "./index.css";
// import { library } from "@fortawesome/fontawesome-svg-core";
// import { faBars } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// library.add(faBars);

// const clientId = import.meta.env.VITE_REACT_APP_CLIENT_ID;

ReactDOM.createRoot(document.getElementById("root")).render(
  // <GoogleOAuthProvider clientId={clientId}>
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
  // </GoogleOAuthProvider>
);
