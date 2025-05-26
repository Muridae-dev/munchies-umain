import Image from "next/image";

export default function About() {
  return (
    <div className="flex items-center justify-center h-screen w-screen">
      This is the about page
      <Image
        aria-hidden
        src="/window.svg"
        alt="Window icon"
        width={16}
        height={16}
      />
    </div>
  );
}
