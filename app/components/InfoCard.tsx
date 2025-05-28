interface InfoCardProps {
  title: string;
  variant?: "primary" | "secondary";
  small?: boolean;
}

export default function InfoCard({
  title,
  variant = "primary",
  small = false,
}: InfoCardProps) {
  return (
    <div
      className={`${variant === "secondary" ? "card-secondary" : ""} ${
        small ? "px-[8px]" : "px-[12px]"
      } card card-shadow w-fit text-body py-[8px] flex items-center`}
    >
      {title}
    </div>
  );
}
