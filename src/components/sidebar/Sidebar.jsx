import React from "react";
import { sidebarData } from "../../utils/data";
import styles from "./Sidebar.module.scss";
import SidebarItem from "./SidebarItem";

const Sidebar = () => {
  return (
    <nav className={styles.sidebar}>
      <ul className={styles.sidebar__category}>
        {sidebarData.general.map(({ name, icon, isNew }) => (
          <SidebarItem name={name} icon={icon} isNew={isNew} />
        ))}
      </ul>
      <ul className={styles.sidebar__category}>
        <h5>BUSINESS</h5>
        {sidebarData.business.map(({ name, icon, isNew }) => (
          <SidebarItem name={name} icon={icon} isNew={isNew} />
        ))}
      </ul>
      <ul className={styles.sidebar__category}>
        <h5>PAYMENTS</h5>
        {sidebarData.payments.map(({ name, icon, isNew }) => (
          <SidebarItem
            name={name}
            icon={icon}
            isNew={isNew}
            active={name === "Virtual Accounts"}
          />
        ))}
      </ul>
      <ul className={`${styles.sidebar__category} ${styles.settings}`}>
        {sidebarData.settings.map(({ name, icon, isNew }) => (
          <SidebarItem name={name} icon={icon} isNew={isNew} />
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
