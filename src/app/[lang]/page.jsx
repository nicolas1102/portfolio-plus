"use client";
import { useState, useEffect } from "react";
import { useCntxt } from "@context";
import Header from "./components/header/header";
import Introduction from "./components/introduction";
import Projects from "./components/projects/projects";
import Timeline from "./components/journey/timeline";
import Footer from "./components/footer";
import Toasty from "../components/toasty/toasty";

export default function Home({ params: { lang } }) {
  const { metadata, setMetadata } = useCntxt();
  const [DICT, setDICT] = useState(useCntxt().DICTContext.page);
  const [activateToasty, setActivateToasty] = useState(false);

  useEffect(() => {
    if (DICT) {
      setMetadata({
        title: DICT.metadata.title,
        description: DICT.metadata.description,
      });
    }
  }, [DICT, setDICT, setMetadata]);

  function startToasty () {
    setActivateToasty(true);

    setTimeout(() => {
      setActivateToasty(false);
    }, 1000);
  };

  return (
    <main className="min-h-screen" onClick={startToasty}>
      <div className="max-w-5xl w-11/12 mx-auto">
        <Header lang={lang} />
        <Introduction DICT={DICT.Introduction} />
        <Projects DICT={DICT.Projects} />
        <Timeline DICT={DICT.Journey} />
        <Footer DICT={DICT.Footer} />
        <Toasty
          imgUrl={DICT.toasty.imgUrl}
          soundUrl={DICT.toasty.soundUrl}
          alt={DICT.toasty.alt}
          activateToasty={activateToasty}
          setActivateToasty={setActivateToasty}
        />
      </div>
    </main>
  );
}
