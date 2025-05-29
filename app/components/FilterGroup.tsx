import InfoCard from "./InfoCard";

interface FilterGroupProps<T> {
  title: string;
  items: T[];
  getKey: (item: T) => string;
  getLabel: (item: T) => string;
  isSelected: (item: T) => boolean;
  onToggle: (item: T) => void;
  layout?: "row" | "col";
  small?: boolean;
}

export default function FilterGroup<T>({
  title,
  items,
  getKey,
  getLabel,
  isSelected,
  onToggle,
  layout = "col",
  small = false,
}: FilterGroupProps<T>) {
  return (
    <div role="group" aria-label={`Filters for ${title}`}>
      <h3 className="text-subtitle opacity-[40%] pb-[16px]">{title}</h3>
      <div className={`flex flex-${layout} flex-wrap gap-[10px]`}>
        {items.map((item) => {
          const selected = isSelected(item);

          return (
            <InfoCard
              key={getKey(item)}
              title={getLabel(item)}
              onClick={() => onToggle(item)}
              aria-pressed={selected}
              small={small}
            />
          );
        })}
      </div>
    </div>
  );
}
