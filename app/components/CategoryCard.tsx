import Image from "next/image";

interface CategoryCardProps {
  title: string;
  imageSrc: string;
}

export default function CategoryCard({ title, imageSrc }: CategoryCardProps) {
  return (
    <div className="w-[160px] h-[80px] rounded-sm bg-white flex border border-stroke relative py-[16px] px-[12px]">
      <span>{title}</span>
      <figure className="size-[80px] absolute top-[50%] right-[-10px] translate-y-[-50%]">
        <Image
          src={imageSrc}
          alt={`Logo for ${title}`}
          fill
          className="object-contain"
          sizes="80px"
        />
      </figure>
    </div>
  );
}
