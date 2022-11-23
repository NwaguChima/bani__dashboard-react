import React, { useState } from "react";
import useTitle from "../../hooks/useTitle";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import styles from "./login.module.scss";

const Login = () => {
  useTitle("Login - Bani");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={styles.login}>
      <header className={styles.login__header}>
        <img src="/public/bani.svg" alt="logo image" />
      </header>
      <main className={styles.login__body}>
        <h1>Log in to your account</h1>
        <p>
          {/* A link tag to be used instead of span, if to be implemented */}
          Don't have an account? <span>Get Started</span>
        </p>

        <form className={styles.form}>
          <div className={styles.form__field}>
            <div className={styles["form__field--label"]}>
              <label htmlFor="email">Email</label>
            </div>
            <div className={styles["form__field--input"]}>
              <input
                type="email"
                id="email"
                placeholder="E.g: victor.onazi@getbani.com"
              />
            </div>
          </div>
          <div className={styles.form__field}>
            <div className={styles["form__field--label"]}>
              <label htmlFor="password">Password</label>
              {/* A link tag to be used if to be implemented */}
              <span>Forgot Password?</span>
            </div>
            <div className={styles["form__field--input"]}>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Password"
              />
              {showPassword ? (
                <AiOutlineEyeInvisible
                  className={styles.eye_icon}
                  onClick={() => setShowPassword(!showPassword)}
                />
              ) : (
                <AiOutlineEye
                  className={styles.eye_icon}
                  onClick={() => setShowPassword(!showPassword)}
                />
              )}
            </div>
          </div>
          <button>Log in</button>
        </form>
      </main>
    </div>
  );
};

export default Login;
