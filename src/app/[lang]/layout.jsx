"use client";
import "@/app/styles/globals.css";
import { useState, useEffect } from "react";
import { useI18n } from "@I18nContext";
import { getDictionary } from "@dictionaries";
import HeadMetadata from "../components/headMetadata/headMetadata";
import Loading from "./loading";

export default function RootLayout({ children, params: { lang } }) {
  const { DICTContext, setDICTContext, metadata, setMetadata } = useI18n();
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
      <body>
        {!DICTContext ? (
          <Loading />
        ) : (
          <>
            {children}
          </>
        )}
      </body>
    </html>
  );
}
