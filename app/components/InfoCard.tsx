interface InfoCardProps {
  title: string;
  variant?: "primary" | "secondary";
  small?: boolean;
  onClick?: () => void;
  isSelected?: boolean;
}

export default function InfoCard({
  title,
  variant = "primary",
  small,
  onClick,
  isSelected,
}: InfoCardProps) {
  const Component = onClick ? "button" : "div";

  return (
    <Component
      className={`${
        variant === "secondary" ? "card-secondary" : "card-hover"
      } ${small ? "px-xxs" : "px-sm"} ${
        isSelected ? "!invert" : ""
      } card card-shadow w-fit text-body py-xxs flex items-center`}
      onClick={onClick ?? undefined}
      aria-pressed={isSelected}
    >
      {title}
    </Component>
  );
}
