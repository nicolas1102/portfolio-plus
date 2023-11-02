"use client";
import "@/app/styles/globals.css";
import { useState, useEffect } from "react";
import { useCntxt, changeTheme } from "@/util/context/context";
import { getDictionary } from "@dictionaries";
import HeadMetadata from "../components/headMetadata/headMetadata";
import Loading from "./loading";
import styles from "./styles/layout.module.css";
import darkStyles from "./styles/layout.dark.module.css";
import { montserrat, montserratAlternates } from "@/app/styles/fonts";

export default function RootLayout({ children, params: { lang } }) {
  const { DICTContext, setDICTContext, metadata, setMetadata, theme, setTheme } = useCntxt();
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
    <html lang={lang}>
      <HeadMetadata title={metadata.title} description={metadata.description} />
      <body className={styles.body}>
        {!DICTContext ? <Loading /> : <>{children}</>}
      </body>
    </html>
  );
}
