import Image from "next/image";
import Link from "next/link";
import { slugify } from "../utils/regex";

interface CategoryCardProps {
  title: string;
  imageSrc: string;
}

export default function CategoryCard({ title, imageSrc }: CategoryCardProps) {
  return (
    <Link
      href={`/category/${slugify(title)}`}
      aria-label={`View only ${title} restaurants`}
      className="w-category-card-w h-category-card-h card card-hover card-shadow flex  relative py-md px-sm"
    >
      <span>{title}</span>
      <figure className="size-category-card-h absolute top-half -right-xs -translate-y-half">
        <Image
          src={imageSrc}
          alt={`Logo for ${title}`}
          fill
          className="object-contain"
          sizes="80px"
        />
      </figure>
    </Link>
  );
}
