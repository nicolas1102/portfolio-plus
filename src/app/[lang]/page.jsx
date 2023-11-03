"use client";
import { useState, useEffect } from "react";
import { useCntxt } from "@context";
import Header from "./components/header/header";
import Introduction from "./components/introduction";
import Knowledge from "./components/knowledge";

export default function Home({ params: { lang } }) {
  const { metadata, setMetadata } = useCntxt();
  const [DICT, setDICT] = useState(useCntxt().DICTContext.page);

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
      <Header lang={lang}/>
      <Introduction DICT={DICT.Introduction} />
      <Knowledge DICT={DICT.Knowledge} />

    </main>
  );
}
