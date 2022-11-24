import React from "react";
import styles from "./Sidebar.module.scss";

const SidebarItem = ({ data, active }) => {
  return (
    <div className={`${styles.item} ${active ? styles.active : ""}`}>
      <img src={data.icon} alt={data.name} className={data.new && styles.new} />
      <p>
        {data.name} {data.new ? <span>New</span> : null}
      </p>
    </div>
  );
};

export default SidebarItem;
