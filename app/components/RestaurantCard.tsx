import Image from "next/image";
import StatusBar from "./StatusBar";

interface CategoryCardProps {
  title: string;
  imageSrc: string;
  isOpen: boolean;
  deliveryTime?: number;
}

export default function RestaurantCard({
  title,
  imageSrc,
  isOpen,
  deliveryTime,
}: CategoryCardProps) {
  return (
    <div className="card card-shadow flex-between flex-col-reverse aspect-[16/10] relative p-[16px] overflow-hidden">
      <div className="flex-between flex-row">
        <h2 className="text-h1">{title}</h2>
        <img src="/icons/Cta.svg" />
      </div>
      <div className="flex-between">
        <div className="flex gap-[8px]">
          <StatusBar title={isOpen ? "open" : "closed"} />
          {deliveryTime && isOpen && (
            <StatusBar title={`${deliveryTime} min`} />
          )}
        </div>
        <figure className="size-[140px] absolute right-[-30px] top-[-30px]">
          <Image
            src={imageSrc}
            alt={`Logo for ${title}`}
            fill
            className="object-contain"
            sizes="140px"
          />
        </figure>
      </div>
    </div>
  );
}
