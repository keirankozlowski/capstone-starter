import { Route, Routes } from "react-router-dom";
import "./App.css";
import LoginForm from "./components/loginForm";

function App() {
  return (
    <>
      <h1>hello world!</h1>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </>
  );
}

export default App;
