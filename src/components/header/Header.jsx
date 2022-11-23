import React, { useState } from "react";
import NotificationIcon from "../../assets/icons/notification.svg";
import { HiOutlineChevronDown } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import styles from "./Header.module.scss";

const Header = () => {
  const [logout, setLogout] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

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
          <div className={`${styles.dropdown} ${logout ? styles.show : ""}`}>
            <p onClick={handleLogout}>Logout</p>
          </div>
          <span onClick={() => setLogout(!logout)}>
            <HiOutlineChevronDown />
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
