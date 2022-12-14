import React, { useState } from "react";
import useTitle from "../../hooks/useTitle";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { DASHBOARD_ROUTE, VIRTUAL_ACCOUNT_ROUTE } from "../../utils/constants";
import styles from "./login.module.scss";
import useAuth from "../../hooks/useAuth";
import Spinner from "../../components/spinner/Spinner";
import Logo from "../../assets/bani.svg";

const Login = () => {
  useTitle("Login - Bani");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const { setUser } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      email,
      password,
    };

    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));

    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
      navigate(`${DASHBOARD_ROUTE}/${VIRTUAL_ACCOUNT_ROUTE}`);
    }, 2000);

    return () => clearTimeout(timer);
  };

  return (
    <div className={styles.login}>
      <header className={styles.login__header}>
        <img src={Logo} alt="logo image" />
      </header>
      <main className={styles.login__body}>
        <h1>Log in to your account</h1>
        <p>
          {/* A link tag to be used instead of span, if to be implemented */}
          Don't have an account? <span>Get Started</span>
        </p>
        {loading ? <Spinner /> : null}

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
