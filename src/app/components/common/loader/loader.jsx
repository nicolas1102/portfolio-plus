import styles from "./styles/loader.module.css";

export default function Loader() {
  return (
    <div className={styles.loader_container}>
      <div className={styles.loader}></div>
      <h1 className={styles.loading_title}>Loading...</h1>
    </div>
  );
}