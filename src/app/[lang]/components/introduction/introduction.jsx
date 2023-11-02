import styles from "./styles/introduction.module.css";
import { montserrat } from "@/app/styles/fonts";

export default function Introduction({ lang, DICT }) {
  return (
    <header className={`${styles.header} ${montserrat.className}`}>
      <h1>NICOLAS DIAZ</h1>
      <p>This is Nicolas Díaz</p>
    </header>
  );
}
