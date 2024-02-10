"use client";
// @ts-ignore
import useSound from "use-sound";
import { useEffect, useRef } from "react";

const AddSound = () => {
  const [play] = useSound("/wedding.mp3");
  const ref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (play) {
      setTimeout(() => ref.current?.click(), 1000);
    }
  }, []);
  return (
    <button
      onClick={play}
      ref={ref as React.RefObject<HTMLButtonElement>}
    ></button>
  );
};

export default AddSound;
