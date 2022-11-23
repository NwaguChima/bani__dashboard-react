import styles from "./Spinner.module.scss";

const Spinner = () => {
  return (
    <div className={styles.spinner__cont}>
      <div className={styles.spinner}></div>
    </div>
  );
};

export default Spinner;
