"use client";
import ThemeSwitcher from "./themeSwitcher";
import LanguageSwitcher from "./languageSwitcher";

export default function Header({ lang }) {
  return (
    <header className="h-20">
      <LanguageSwitcher lang={lang} />
      <ThemeSwitcher />
    </header>
  );
}
