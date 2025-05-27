"use client";

import Button from "../components/Button";
import Logo from "../components/Logo";
import LogoComp from "../components/Logo";

const buttonPress = () => {
  alert("pressed");
};

export default function About() {
  return (
    <div className="flex align-center flex-col gap-10 h-auto w-screen p-5 bg-[#5993f0]">
      <div className="flex align-center flex-col gap-5">
        <span className="underline">TEXT</span>
        <span className="text-display">Text Display</span>
        <span className="text-h1">Text h1</span>
        <span className="text-title">Text title</span>
        <span className="text-subtitle">Text subtitle</span>
        <span className="text-body">Text body</span>
      </div>

      <div className="flex align-center flex-col gap-5">
        <span className="underline">Colors</span>
        <div>
          White
          <div className="size-20 bg-white"></div>
        </div>

        <div>
          Stroke
          <div className="size-20 aspect-square bg-stroke"></div>
        </div>

        <div>
          Off-white
          <div className="size-20 aspect-square bg-off-white"></div>
        </div>

        <div>
          Black
          <div className="size-20 aspect-square bg-black"></div>
        </div>

        <div>
          Green
          <div className="size-20 aspect-square bg-green"></div>
        </div>
      </div>

      <div className="flex align-center flex-col gap-5">
        <span className="underline">Components</span>
        <Button label="Button Primary" onClick={buttonPress} />
        <Button
          label="Button Secondary"
          onClick={buttonPress}
          variant="secondary"
        />
        Logo dark
        <Logo />
        Logo light
        <Logo variant="light" />
      </div>
    </div>
  );
}
