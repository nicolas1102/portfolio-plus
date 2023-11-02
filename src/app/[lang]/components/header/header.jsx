"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "./styles/header.module.css";
import { montserrat } from "@/app/styles/fonts";

export default function Header({ lang, DICT }) {
  const pathName = usePathname();

  const redirectedPathName = (lang) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = lang;
    return segments.join("/");
  };
  return (
    <header className={`${styles.header} ${montserrat.className}`}>
      <div>
        <Link
          className={lang === "es" ? styles.lang_option : ""}
          href={redirectedPathName("es")}
        >
          ES
        </Link>
        <Link
          className={lang === "en" ? styles.lang_option : ""}
          href={redirectedPathName("en")}
        >
          EN
        </Link>
      </div>
      <div>
        { 

        }
        <p>{DICT.themes[0]}</p>
      </div>
    </header>
  );
}

