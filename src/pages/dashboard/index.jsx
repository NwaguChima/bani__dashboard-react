import React from "react";
import Header from "../../components/header/Header";
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
        <div></div>
      </main>
    </div>
  );
};

export default Dashboard;
