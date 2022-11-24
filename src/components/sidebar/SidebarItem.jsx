import React from "react";
import styles from "./Sidebar.module.scss";

const SidebarItem = ({ name, icon, isNew, active }) => {
  return (
    <li key={name} className={`${styles.item} ${active ? styles.active : ""}`}>
      <img src={icon} alt={name} className={isNew && styles.new} />
      <p>
        {name} {isNew ? <span>New</span> : null}
      </p>
    </li>
  );
};

export default SidebarItem;
