"use client";

import { useEffect } from "react";
import { PriceRange, RestaurantTypes } from "../lib/getFilters";
import { Restaurant } from "../lib/getRestaurants";
import { useRestaurantStore } from "../stores/restaurantStore";
import CategoryTypeList from "./CategoryTypeList";
import Filters from "./Filters";
import Logo from "./Logo";
import RestaurantList from "./RestaurantList";

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
    restaurantTypes,
  } = useRestaurantStore();

  useEffect(() => {
    setRestaurants(restaurantProp);
    setPriceRanges(priceRangeProp);
    setRestaurantTypes(restaurantTypeProp);
  }, [setRestaurants, setPriceRanges, setRestaurantTypes]);

  return (
    <div className="bg-off-white h-screen max-w-screen overflow-hidden pl-[24px] pt-[40px] lg:pl-[40px] lg:pt-[56px] flex flex-col gap-[24px] lg:gap-[48px]">
      <Logo variant="dark" />

      <div className="flex flex-col lg:flex-row gap-[20px] w-full max-w-full overflow-auto">
        <div className="shrink-0 pr-[24px] lg:pr-[0px] lg:max-h lg:pb-[24px]">
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
