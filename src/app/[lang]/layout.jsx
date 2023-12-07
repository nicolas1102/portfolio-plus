"use client";
import "@/app/styles/globals.css";
import { useState, useEffect } from "react";
import { ThemeProvider } from "next-themes";
import { useCntxt, changeTheme } from "@context";
import { getDictionary } from "@dictionaries";
import HeadMetadata from "../components/headMetadata/headMetadata";
import Loading from "./loading";
import styles from "./styles/layout.module.css";
import { montserrat } from "@/app/styles/fonts";

export default function RootLayout({ children, params: { lang } }) {
  const {
    DICTContext,
    setDICTContext,
    metadata,
    setMetadata,
    theme,
    setTheme,
  } = useCntxt();
  const [DICT, setDICT] = useState(null);

  const fetchData = async () => {
    const d = await getDictionary(lang);
    setDICTContext(d);
    setDICT(d);
  };

  useEffect(() => {
    fetchData();
  });

  return (
    <html lang={lang} className={theme}>
      <HeadMetadata title={metadata.title} description={metadata.description} />
      <body className={theme === 'dark' ? `${styles.dark} ${styles.body} ${montserrat.className}`: ` ${styles.body} ${montserrat.className}`}>
        {!DICTContext ? <Loading /> : <>{children}</>}
      </body>
    </html>
  );
}
