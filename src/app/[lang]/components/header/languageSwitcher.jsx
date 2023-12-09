"use client";
import { useCntxt } from "@context";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function LanguageSwitcher({ lang }) {
  const pathName = usePathname();

  const redirectedPathName = (lang) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = lang;
    return segments.join("/");
  };

  return (
    <Link
      href={lang === "es" ? redirectedPathName("en") : redirectedPathName("es")}
      className="transition duration-300 fixed z-10 w-10 left-6 top-6 bg-primary-300 dark:bg-primary-200 text-sm text-white dark:text-secondary-400 border-2 border-secondary-400 dark:border-white text-center py-2 font-bold hover:bg-primary-200 active:bg-primary-200 dark:hover:bg-primary-300 dark:active:bg-primary-300 shadow-sm3 hover:shadow-sm3-hover dark:shadow-sm3-dk dark:hover:shadow-sm3-hover-dk"
    >
      {lang === "es" ? <>EN</> : <>ES</>}
    </Link>
  );
}
