import React from "react";
import NotificationIcon from "../../assets/icons/notification.svg";
import { HiOutlineChevronDown } from "react-icons/hi";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <img
        src="/public/bani.svg"
        alt="logo image"
        className={styles.header__logo}
      />
      <div className={styles.header__profile}>
        <img src={NotificationIcon} alt="notification" />
        <div className={styles.details}>
          <p className={styles.details__initials}>JT</p>
          <div className={styles.details__name}>
            <h4>JT Industry Limited</h4>
            <p>JamesT@gmail.com</p>
          </div>
          <span>
            <HiOutlineChevronDown />
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
