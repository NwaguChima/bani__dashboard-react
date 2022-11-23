import React from "react";
import { Link } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import styles from "./signup.module.scss";

const Login = () => {
  useTitle("Login - Bani");

  return (
    <div className={styles.login}>
      <header className={styles.login__header}>
        <img src="/public/bani.svg" alt="logo image" />
      </header>
      <main className={styles.login__body}>
        <h1 className={styles.login__title}>Log in to your account</h1>
        <p>
          {/* A link tag to be used instead of span, if to be implemented */}
          Don't have an account? <span>Get Started</span>
        </p>

        <form>
          <div>
            <div>
              <label htmlFor="email">Email</label>
            </div>
            <div>
              <input type="email" id="email" />
            </div>
          </div>
          <div>
            <div>
              <label htmlFor="password">Password</label>
              {/* A link tag to be used if to be implemented */}
              <span>Forgot Password?</span>
            </div>
            <div>
              <input type="password" id="password" />
            </div>
          </div>
          <button>Log in</button>
        </form>
      </main>
    </div>
  );
};

export default Login;
