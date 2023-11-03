"use client";
import { useCntxt } from "@context";

export default function LanguageSwitcher({ DICT }) {
  const { theme, setTheme } = useCntxt();

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div>
      <button
        type="button"
        onClick={handleThemeSwitch}
        className="fixed z-10 p-2 right-20 top-4 bg-violet-300 dark:bg-orange-300 text-lg rounded-md"
      >
        {theme === "dark" ? sun : moon}
      </button>
    </div>
  );
}
