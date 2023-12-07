"use client";
import LanguageSwitcher from "./languageSwitcher";
import ThemeSwitcher from "./themeSwitcher";
import styles from "./styles/header.module.css";
import { montserrat } from "@/app/styles/fonts";

export default function Header({ lang }) {
  return (
    <header className={styles.header}>
      <LanguageSwitcher lang={lang} />
      <ThemeSwitcher />
    </header>
  );
}
