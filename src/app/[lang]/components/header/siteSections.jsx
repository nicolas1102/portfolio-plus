import Link from "next/link";
import styles from "./styles/siteSections.module.css";

export default function SiteSections({ lang, DICT }) {
  return (
    <nav className={styles.site_sections_container}>
      <Link href={`/${lang}`} className={styles.section_name}>
        {DICT.about_us}
        <span className={styles.name_underline}></span>
      </Link>
      <Link href={`/${lang}`} className={styles.section_name}>
        {DICT.benefits}
        <span className={styles.name_underline}></span>
      </Link>
      <Link href={`/${lang}`} className={styles.section_name}>
        {DICT.team}
        <span className={styles.name_underline}></span>
      </Link>
      <Link href={`/${lang}`} className={styles.section_name}>
        {DICT.projects}
        <span className={styles.name_underline}></span>
      </Link>
      <Link href={`/${lang}/contacto`} className={styles.section_name}>
        {DICT.contact}
        <span className={styles.name_underline}></span>
      </Link>
    </nav>
  );
}
