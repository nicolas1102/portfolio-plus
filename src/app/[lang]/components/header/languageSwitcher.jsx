import { usePathname } from "next/navigation";
import Link from "next/link";
import { useCntxt } from "@context";
import styles from "./styles/languageSwitcher.module.css";

export default function LanguageSwitcher({ lang }) {
  const { theme, setTheme } = useCntxt();
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
      className={theme === 'dark' ? `${styles.dark} ${styles.lang_button}` : `${styles.lang_button}`}
    >
      {lang === "es" ? <>EN</> : <>ES</>}
    </Link>
  );
}
