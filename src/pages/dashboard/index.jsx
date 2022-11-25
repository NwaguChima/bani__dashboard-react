import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import VirtualAccount from "../../components/virtualAccount/VirtualAccount";
import useTitle from "../../hooks/useTitle";
import styles from "./dashboard.module.scss";

const Dashboard = () => {
  useTitle("Dashboard - Bani");

  return (
    <div>
      <Header />
      <main className={styles.dashboard}>
        <Sidebar />
        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard;
