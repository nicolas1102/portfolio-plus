import Link from "next/link";
import styles from "./styles/not-found.module.css";
import { rokkitt } from "@/app/styles/fonts";

export default function NotFound() {
  return (
    <div className={`${styles.not_found_container} ${rokkitt.className}`}>
      <h1 className={styles.title}>404 Not Found</h1>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  );
}
