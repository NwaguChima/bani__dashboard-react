import React from "react";
import { sidebarData } from "../../utils/data";
import styles from "./Sidebar.module.scss";
import SidebarItem from "./SidebarItem";

const Sidebar = () => {
  return (
    <nav className={styles.sidebar}>
      <ul className={styles.sidebar__category}>
        {sidebarData.general.map(({ name, icon, isNew, route }) => (
          <SidebarItem
            key={name}
            name={name}
            icon={icon}
            link={route}
            isNew={isNew}
          />
        ))}
      </ul>
      <ul className={styles.sidebar__category}>
        <h5>BUSINESS</h5>
        {sidebarData.business.map(({ name, icon, isNew, route }) => (
          <SidebarItem
            key={name}
            name={name}
            link={route}
            icon={icon}
            isNew={isNew}
          />
        ))}
      </ul>
      <ul className={styles.sidebar__category}>
        <h5>PAYMENTS</h5>
        {sidebarData.payments.map(({ name, icon, isNew, route }) => (
          <SidebarItem
            name={name}
            icon={icon}
            key={name}
            link={route}
            isNew={isNew}
            active={name === "Virtual Accounts"}
          />
        ))}
      </ul>
      <ul className={`${styles.sidebar__category} ${styles.settings}`}>
        {sidebarData.settings.map(({ name, icon, isNew, route }) => (
          <SidebarItem
            key={name}
            name={name}
            link={route}
            icon={icon}
            isNew={isNew}
          />
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
