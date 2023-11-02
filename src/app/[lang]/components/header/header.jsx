"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import ThemeSwitcher from "./themeSwitcher";
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
    <header>
      <div>
        <Link href={redirectedPathName("es")}>ES</Link>
        <Link href={redirectedPathName("en")}>EN</Link>
      </div>
      <ThemeSwitcher/>
    </header>
  );
}
