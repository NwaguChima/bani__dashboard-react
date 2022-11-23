import React from "react";
import Header from "../../components/header/Header";
import useTitle from "../../hooks/useTitle";

const Dashboard = () => {
  useTitle("Dashboard - Bani");

  return (
    <div>
      <Header />
    </div>
  );
};

export default Dashboard;
