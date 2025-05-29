"use client";

import { useEffect } from "react";
import { PriceRange, RestaurantTypes } from "../lib/getFilters";
import { Restaurant } from "../lib/getRestaurants";
import { useRestaurantStore } from "../stores/restaurantStore";
import CategoryTypeList from "./CategoryTypeList";
import Filters from "./Filters";
import Logo from "./Logo";

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
    restaurants,
    priceRanges,
    restaurantTypes,
  } = useRestaurantStore();

  useEffect(() => {
    setRestaurants(restaurantProp);
    setPriceRanges(priceRangeProp);
    setRestaurantTypes(restaurantTypeProp);
  }, [setRestaurants, setPriceRanges, setRestaurantTypes]);

  return (
    <div className="bg-off-white min-h-screen max-w-screen pl-[24px] pt-[40px] md:pl-[40px] md:pt-[56px] flex flex-col gap-[24px] md:gap-[48px]">
      <Logo variant="dark" />

      <div className="flex flex-col md:flex-row gap-[20px] w-full max-w-full">
        <div className="shrink-0 pr-[24px] md:pr-[0px]">
          <Filters />
        </div>
        <div className="flex-1 overflow-x-hidden">
          <CategoryTypeList restaurantTypes={restaurantTypes} />
        </div>
      </div>
    </div>
  );
}
