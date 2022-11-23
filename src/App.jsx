import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import "./App.module.scss";
import Layout from "./Outlet";

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/login" />}></Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
