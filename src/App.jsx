import { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import "./App.module.scss";
import RequireAuth from "./components/AuthCheck";
import { DASHBOARD_ROUTE, LOGIN_ROUTE } from "./utils/constants";

function App() {
  const [user, setUser] = useState(null);

  return (
    <Routes>
      <Route
        path="/"
        element={<Navigate to={user ? DASHBOARD_ROUTE : LOGIN_ROUTE} />}
      />

      <Route path={LOGIN_ROUTE} element={<Login />} />
      <Route path={DASHBOARD_ROUTE} element={<RequireAuth />}>
        <Route index element={<Dashboard />} />
      </Route>
    </Routes>
  );
}

export default App;
