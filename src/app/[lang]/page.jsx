"use client"
import { useState, useEffect } from "react";
import { useI18n } from "@I18nContext";
import Header from "./components/header/header";
import Introduction from "./components/introduction/introduction";

export default function Home() {
  const { metadata, setMetadata } = useI18n();
  const [DICT, setDICT] = useState(useI18n().DICTContext.page);

  useEffect(() => {
    if (DICT) {
      setMetadata({
        title: DICT.metadata.title,
        description: DICT.metadata.description,
      });
    }
  }, [DICT, setDICT, setMetadata]);

  return (
    <main>
      <Header DICT={DICT.Header}/>
      <Introduction DICT={DICT.Header}/>
    </main>
  );
}
