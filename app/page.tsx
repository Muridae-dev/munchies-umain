import Image from "next/image";
import Link from "next/link";
import { getRestaurantData, Restaurant } from "./api/restaurants";

export default async function Home() {
  const {
    restaurants: { restaurants },
  }: { restaurants: { restaurants: Restaurant[] } } = await getRestaurantData();

  return (
    <div className="bg-[#5993f0] min-h-screen">
      <Link href="/testing">TESTING</Link>
      {restaurants.map((restaurant) => (
        <pre key={restaurant.id}>
          {JSON.stringify(restaurant, null, 2)}{" "}
          <figure className="size-[80px] md:size-[140px] relative">
            <Image
              src={restaurant.image_url}
              alt={`Logo for ${restaurant.name}`}
              fill
              className="object-contain"
              sizes="(min-width: 768px) 140px, 80px"
            />
          </figure>
        </pre>
      ))}
    </div>
  );
}
