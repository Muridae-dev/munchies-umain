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
    <div className="bg-off-white h-screen max-w-screen overflow-hidden pl-xl pt-xxxl lg:pl-xxxl lg:pt-[56px] flex flex-col gap-xl lg:gap-[48px]">
      <Link href="/" className="w-fit">
        <Logo variant="dark" />
      </Link>

      <div className="flex flex-col lg:flex-row gap-lg w-full max-w-full overflow-auto">
        <div className="shrink-0 pr-xl lg:pr-[0px] lg:max-h lg:pb-xl">
          <Filters />
        </div>
        <div className="flex flex-col flex-1 overflow-x-hidden">
          {restaurantTypes[0] && <CategoryTypeList />}
          <RestaurantList />
        </div>
      </div>
    </div>
  );
}
