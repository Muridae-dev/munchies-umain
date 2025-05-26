"use client";

interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: "primary" | "secondary";
}

// TODO: change 20px to its own size

export default function Button({
  label,
  onClick,
  variant = "primary",
}: ButtonProps) {
  return (
    <button
      className={`w-full py-[20px] rounded-xs text-white text-button ${variant}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
