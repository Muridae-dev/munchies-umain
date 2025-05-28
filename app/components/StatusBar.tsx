interface StatusBarProps {
  title: string | "open" | "closed";
}

export default function StatusBar({ title }: StatusBarProps) {
  return (
    <div
      className={`${
        title === "open"
          ? "status-bar-before before:bg-green"
          : title === "closed"
          ? "status-bar-before before:bg-black"
          : ""
      } rounded-[88px] bg-white border border-stroke py-[8px] px-[12px] text-body flex items-center gap-[2px]`}
    >
      {title === "open" ? "Open" : title === "closed" ? "Closed" : title}
    </div>
  );
}
