"use client";

import { useEffect, useState } from "react";
import Button from "./Button";
import Logo from "./Logo";

export default function OpeningAnimation() {
  const [hide, setHide] = useState(false);
  const [removeOpening, setRemoveOpening] = useState(false);

  useEffect(() => {
    document.cookie = "hasSeenOpeningAnimation=true; path=/; max-age=31536000";
  }, []);

  useEffect(() => {
    hide === true && setTimeout(() => setRemoveOpening(true), 500);
  }, [hide]);

  return (
    <div
      className={`${removeOpening ? "hidden" : ""} ${
        hide ? "-translate-x-full" : "translate-0"
      } transition-transform duration-500 fixed w-screen h-dvh top-0 left-0 bg-green z-99 px-[24px] py-[40px] lg:px-[40px] lg:py-[56px] flex-col flex-between text-white`}
    >
      <Logo variant="light" />
      <div className="flex flex-col gap-[16px]">
        <h2 className="text-display font-bold">Treat yourself.</h2>
        <span>
          Find the best restaurants in your city and get it delivered to your
          place!
        </span>
      </div>

      <Button
        label="Continue"
        variant="secondary"
        onClick={() => setHide(true)}
      />
    </div>
  );
}
