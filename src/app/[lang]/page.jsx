"use client"
import { useState, useEffect } from "react";
import { useCntxt } from "@context";
import Header from "./components/header/header";
import Introduction from "./components/introduction";

export default function Home() {
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
      <Header DICT={DICT.Header}/>
      <Introduction DICT={DICT.Header}/>
    </main>
  );
}
