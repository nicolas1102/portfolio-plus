"use client";
import "@/app/styles/globals.css";
import { useState, useEffect } from "react";
import { useCntxt, changeTheme } from "@context";
import { getDictionary } from "@dictionaries";
import HeadMetadata from "../components/headMetadata/headMetadata";
import Loading from "./loading";

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
      <body className="bg-gray-100 dark:bg-secondary-500 text-secondary-500 dark:text-white ease-in duration-200">
        {!DICTContext ? <Loading /> : <>{children}</>}
      </body>
    </html>
  );
}
