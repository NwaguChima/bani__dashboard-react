import React from "react";
import Header from "../../components/header/Header";
import MainDash from "../../components/mainDash/MainDash";
import Sidebar from "../../components/sidebar/Sidebar";
import useTitle from "../../hooks/useTitle";
import styles from "./dashboard.module.scss";

const Dashboard = () => {
  useTitle("Dashboard - Bani");

  return (
    <div>
      <Header />
      <main className={styles.dashboard}>
        <Sidebar />
        <MainDash />
      </main>
    </div>
  );
};

export default Dashboard;
