import React from "react";
import { Link } from "react-router-dom";
import styles from "./Sidebar.module.scss";

const SidebarItem = ({ name, icon, isNew, active, link }) => {
  return (
    <Link to={link} className={styles.link}>
      <li className={`${styles.item} ${active ? styles.active : ""}`}>
        <img src={icon} alt={name} className={isNew ? styles.new : undefined} />
        <p>
          {name} {isNew ? <span>New</span> : null}
        </p>
      </li>
    </Link>
  );
};

export default SidebarItem;
