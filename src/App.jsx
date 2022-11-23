import { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import RequireAuth from "./components/AuthCheck";
import { DASHBOARD_ROUTE, LOGIN_ROUTE } from "./utils/constants";
import useAuth from "./hooks/useAuth";
import "./App.module.scss";

function App() {
  const { user } = useAuth();

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
