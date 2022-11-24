import React from "react";
import styles from "./Sidebar.module.scss";

const SidebarItem = ({ name, icon, isNew, active }) => {
  return (
    <div key={name} className={`${styles.item} ${active ? styles.active : ""}`}>
      <img src={icon} alt={name} className={isNew && styles.new} />
      <p>
        {name} {isNew ? <span>New</span> : null}
      </p>
    </div>
  );
};

export default SidebarItem;
