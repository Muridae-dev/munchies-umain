import Image from "next/image";
import { isRestaurantOpen } from "../api/restaurants";
import StatusBar from "./StatusBar";

interface CategoryCardProps {
  title: string;
  imageSrc: string;
  id: string;
  deliveryTime?: number;
}

export default async function RestaurantCard({
  title,
  imageSrc,
  id,
  deliveryTime,
}: CategoryCardProps) {
  const { isOpen } = await isRestaurantOpen(id);

  return (
    <div className="flex flex-col-reverse justify-between w-[327px] h-[202px] card-shadow border rounded-sm bg-white border-stroke relative p-[16px] overflow-hidden">
      <div className="flex flex-row justify-between">
        <h2 className="text-h1">{title}</h2>
        <img src="/icons/Cta.svg" />
      </div>
      <div className="flex justify-between">
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
