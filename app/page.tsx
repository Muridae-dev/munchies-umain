import Image from "next/image";
import Link from "next/link";
import { getRestaurantData, Restaurant } from "./lib/getRestaurants";
import { getPriceRanges, getRestaurantTypes } from "./lib/getFilters";
import Filters from "./components/Filters";
import Logo from "./components/Logo";
import CategoryTypeList from "./components/CategoryTypeList";

export default async function Home() {
  const {
    restaurants: { restaurants },
  }: { restaurants: { restaurants: Restaurant[] } } = await getRestaurantData();

  const priceRanges = await getPriceRanges(restaurants);

  const { filters } = await getRestaurantTypes();

  return (
    <div className="bg-off-white min-h-screen max-w-screen pl-[24px] pt-[40px] md:pl-[40px] md:pt-[56px] flex flex-col gap-[24px] md:gap-[48px]">
      <Logo variant="dark" />

      <div className="flex flex-col md:flex-row gap-[20px] w-full max-w-full">
        <div className="shrink-0 pr-[24px] md:pr-[0px]">
          <Filters
            restaurantProp={restaurants}
            priceRangeProp={priceRanges}
            restaurantTypeProp={filters}
          />
        </div>
        <div className="flex-1 overflow-x-hidden">
          <CategoryTypeList restaurantTypes={filters} />
        </div>
      </div>
      {/* {restaurants.map((restaurant) => (
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
      ))} */}
    </div>
  );
}
