import React from "react";
import { sidebarData } from "../../utils/data";
import styles from "./Sidebar.module.scss";
import SidebarItem from "./SidebarItem";

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <div>
        <SidebarItem data={sidebarData.general[0]} />
      </div>
    </aside>
  );
};

export default Sidebar;
