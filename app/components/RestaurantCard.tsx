import Image from "next/image";
import StatusBar from "./StatusBar";
import Link from "next/link";
import InfoCard from "./InfoCard";

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
    <Link
      href={""}
      role="listitem"
      className="card card-hover card-shadow relative flex-between flex-col-reverse aspect-[16/10] relative p-md overflow-hidden"
      aria-label={`View details for ${title}`}
    >
      <div className="flex-between flex-row gap-md">
        <h2 className="text-h1">{title}</h2>
        <img
          className="size-xxl"
          src="/icons/Cta.svg"
          alt="CTA logo"
          aria-hidden="true"
        />
      </div>
      <div className="flex-between">
        <div className="flex gap-xxs z-3">
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
      {!isOpen && (
        <div
          aria-hidden="true"
          className="absolute top-0 left-0 h-full w-full z-1 bg-white-op flex justify-center items-center"
        >
          <InfoCard title="Opens tomorrow at 12 pm" variant="secondary" />
        </div>
      )}
    </Link>
  );
}
