"use client";

import { useRestaurantStore } from "../stores/restaurantStore";
import RestaurantCard from "./RestaurantCard";

export default function RestaurantList() {
  const { restaurants } = useRestaurantStore();

  return (
    <div>
      <h2 className="text-h1 pb-[20px]">Restaurant's</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-[10px] md:gap-[17px] pr-[10px] md:pr-[17px] pb-[24px]">
        {restaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.id}
            title={restaurant.name}
            imageSrc={restaurant.image_url}
            isOpen={restaurant.is_open}
          />
        ))}
      </ul>
    </div>
  );
}
