import React, { useState } from "react";
import useTitle from "../../hooks/useTitle";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { DASHBOARD_ROUTE } from "../../utils/constants";
import styles from "./login.module.scss";
import useAuth from "../../hooks/useAuth";
import Spinner from "../../components/spinner/Spinner";

const Login = () => {
  useTitle("Login - Bani");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { user, setUser } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      email,
      password,
    };

    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));

    setEmail("");
    setPassword("");

    navigate(DASHBOARD_ROUTE);
    return;
  };

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
        <Spinner />

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.form__field}>
            <div className={styles["form__field--label"]}>
              <label htmlFor="email">Email</label>
            </div>
            <div className={styles["form__field--input"]}>
              <input
                type="email"
                id="email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
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
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
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
          <button type="submit">Log in</button>
        </form>
      </main>
    </div>
  );
};

export default Login;
