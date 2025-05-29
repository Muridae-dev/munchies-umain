interface InfoCardProps {
  title: string;
  variant?: "primary" | "secondary";
  small?: boolean;
  onClick?: () => void;
}

export default function InfoCard({
  title,
  variant = "primary",
  small = false,
  onClick,
}: InfoCardProps) {
  const Component = onClick ? "button" : "div";

  return (
    <Component
      className={`${variant === "secondary" ? "card-secondary" : ""} ${
        small ? "px-[8px]" : "px-[12px]"
      } card card-shadow w-fit text-body py-[8px] flex items-center`}
      onClick={onClick ?? undefined}
    >
      {title}
    </Component>
  );
}
