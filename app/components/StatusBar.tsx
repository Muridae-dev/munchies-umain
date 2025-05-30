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
      } rounded-status-bar bg-white border border-stroke py-xxs px-sm text-body flex items-center gap-status-bar-gap`}
    >
      {title === "open" ? "Open" : title === "closed" ? "Closed" : title}
    </div>
  );
}
