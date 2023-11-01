"use client";
import styles from "./styles/header.module.css";
// import { montserrat } from "@/app/styles/fonts";

export default function Header({}) {
  return (
    <header className={styles.header}>
      <div>
        <p>ES</p>
        <p>EN</p>
      </div>
      <div>
        <p>Dark</p>
      </div>
    </header>
  );
}
