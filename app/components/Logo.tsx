import MunchiesLogo from "@/public/icons/MunchiesLogo.svg";

interface LogoProps {
  variant?: "dark" | "light";
}

export default function Logo({ variant = "dark" }: LogoProps) {
  return (
    <figure
      className={`h-[24px] md:h-[40px] ${variant === "dark" ? "invert" : ""}`}
    >
      <img src={MunchiesLogo.src} alt="Munchies Logo" className="h-full" />
    </figure>
  );
}
