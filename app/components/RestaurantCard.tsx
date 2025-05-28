import Image from "next/image";

interface CategoryCardProps {
  title: string;
  imageSrc: string;
}

export default function RestaurantCard({ title, imageSrc }: CategoryCardProps) {
  return (
    <div className="flex flex-col-reverse justify-between w-[327px] h-[202px] card-shadow rounded-sm bg-white border-stroke relative p-[16px] overflow-hidden">
      <div className="flex flex-row justify-between">
        <h2 className="text-h1">{title}</h2>
        <img src="/icons/Cta.svg" />
      </div>
      <div className="flex justify-between">
        <div>PLACEHOLDER</div>
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
