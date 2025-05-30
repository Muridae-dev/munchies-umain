"use client";

interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: "primary" | "secondary";
}

// TODO: Extra, add hover states

export default function Button({
  label,
  onClick,
  variant = "primary",
}: ButtonProps) {
  return (
    <button
      className={`w-full py-lg rounded-button text-white text-button ${variant}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
