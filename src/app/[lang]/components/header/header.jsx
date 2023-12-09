"use client";
import Link from "next/link";
import ThemeSwitcher from "./themeSwitcher";
import LanguageSwitcher from "./languageSwitcher";

export default function Header({ lang }) {

  return (
    <header className="h-28">
      <LanguageSwitcher lang={lang} />
      <ThemeSwitcher />
    </header>
  );
}
