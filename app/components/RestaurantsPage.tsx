"use client";

import { useEffect } from "react";
import { PriceRange, RestaurantTypes } from "../lib/getFilters";
import { Restaurant } from "../lib/getRestaurants";
import { useRestaurantStore } from "../stores/restaurantStore";
import CategoryTypeList from "./CategoryTypeList";
import Filters from "./Filters";
import Logo from "./Logo";
import RestaurantList from "./RestaurantList";
import Link from "next/link";

interface RestaurantsPageProps {
  restaurantProp: Restaurant[];
  priceRangeProp: PriceRange[];
  restaurantTypeProp: RestaurantTypes[];
}

export default function RestaurantsPage({
  restaurantProp,
  priceRangeProp,
  restaurantTypeProp,
}: RestaurantsPageProps) {
  const {
    setRestaurants,
    setPriceRanges,
    setRestaurantTypes,
    restaurantTypes,
  } = useRestaurantStore();

  useEffect(() => {
    const sortedRestaurants = restaurantProp.sort((a, b) => {
      return Number(b.is_open) - Number(a.is_open);
    });

    setRestaurants(sortedRestaurants);
    setPriceRanges(priceRangeProp);
    setRestaurantTypes(restaurantTypeProp);
  }, [setRestaurants, setPriceRanges, setRestaurantTypes]);

  return (
    <div className="bg-off-white h-screen max-w-screen overflow-hidden pl-xl pt-xxxl lg:pl-xxxl lg:pt-page-top flex flex-col gap-xl lg:gap-[48px]">
      <header className="w-fit">
        <Link href="/">
          <Logo variant="dark" />
          <h1 className="sr-only">
            Munchies, Find the best restaurants in your city and get it
            delivered to your place!
          </h1>
        </Link>
      </header>

      <main className="flex flex-col lg:flex-row gap-lg w-full max-w-full overflow-auto">
        <aside className="shrink-0 pr-xl lg:pr-0 lg:max-h lg:pb-xl">
          <Filters />
        </aside>
        <section className="flex flex-col flex-1 overflow-x-hidden">
          {restaurantTypes[0] && <CategoryTypeList />}
          <RestaurantList />
        </section>
      </main>
    </div>
  );
}
