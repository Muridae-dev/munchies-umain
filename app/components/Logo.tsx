import MunchiesLogo from "@/public/icons/MunchiesLogo.svg";

interface LogoProps {
  variant?: "dark" | "light";
}

export default function Logo({ variant = "dark" }: LogoProps) {
  return (
    <figure
      className={`h-logo md:h-logo-desktop shrink-0 ${
        variant === "dark" ? "invert" : ""
      }`}
    >
      <img src={MunchiesLogo.src} alt="Munchies Logo" className="h-full" />
    </figure>
  );
}
