interface InfoCardProps {
  title: string;
  variant?: "primary" | "secondary";
}

export default function InfoCard({
  title,
  variant = "primary",
}: InfoCardProps) {
  return (
    <div
      className={`${
        variant === "secondary" ? "card-secondary" : ""
      } card card-shadow w-fit px-[12px] text-body py-[8px] flex items-center`}
    >
      {title}
    </div>
  );
}
