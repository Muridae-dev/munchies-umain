import Image from "next/image";
import Link from "next/link";

interface Restaurant {
  id: string;
  name: string;
  rating: number;
  filter_ids: string[];
  image_url: string;
  price_range_id: string;
}

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

async function getRestaurantData() {
  const res = await fetch(
    "https://work-test-web-2024-eze6j4scpq-lz.a.run.app/api/restaurants"
  );
  const restaurants = await res.json();

  return {
    restaurants,
  };
}
