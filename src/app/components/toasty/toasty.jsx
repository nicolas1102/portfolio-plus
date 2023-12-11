import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./styles/toasty.module.css";

export default function Toasty({ imgUrl, soundUrl, alt }) {
  let wasSpent = useRef(false);
  const [activated, setActivated] = useState(false);
  const [activate, setActivate] = useState(true);

  useEffect(() => {
    const toastyAudio = new Audio(soundUrl);
    const time = 3000;

    const playAudio = () => {
      toastyAudio.play();
      setTimeout(() => {
        setActivated(true);
      }, 200);
    };

    const activateEasterEgg = () => {
      if (activate && !wasSpent.current) {
        setTimeout(playAudio, time);
        setTimeout(() => {
          setActivated(false);
          wasSpent.current = true;
        }, time + 900);
      }
    };

    document.addEventListener("click", activateEasterEgg);

    return () => {
      document.removeEventListener("click", activateEasterEgg);
    };
  }, [activate, soundUrl, wasSpent]);

  return (
    <div className={`${styles.toasty} ${activated ? styles.activated : ""}`}>
      <Image src={imgUrl} width="160" height="160" alt={alt} />
    </div>
  );
}
