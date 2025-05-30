"use client";

import { useEffect, useState } from "react";
import { useRestaurantStore } from "../stores/restaurantStore";
import RestaurantCard from "./RestaurantCard";

export default function RestaurantList() {
  const {
    restaurants,
    selectedTypes,
    selectedPriceRanges,
    selectedDeliveryTimes,
  } = useRestaurantStore();

  const [restaurantsToShow, setRestaurantsToShow] = useState(restaurants);

  useEffect(() => {
    const filteredRestaurants = restaurants.filter((restaurant) => {
      const matchesTypes =
        selectedTypes.length === 0 ||
        restaurant.filter_ids.some((id: string) => selectedTypes.includes(id));

      const matchesPrice =
        selectedPriceRanges.length === 0 ||
        selectedPriceRanges.includes(restaurant.price_range_id);

      const matchesDeliveryTime =
        selectedDeliveryTimes.length === 0 ||
        selectedDeliveryTimes.some((range) => {
          const { min, max } = range;
          const time = restaurant.delivery_time_minutes;
          return max ? time >= min && time <= max : time >= min;
        });

      return matchesTypes && matchesPrice && matchesDeliveryTime;
    });

    setRestaurantsToShow(filteredRestaurants);
  }, [restaurants, selectedTypes, selectedPriceRanges, selectedDeliveryTimes]);

  return (
    <div>
      <h2 className="text-h1 pb-lg">Restaurant's</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-xs md:gap-md pr-xs md:pr-md pb-xl">
        {restaurantsToShow.length > 0 ? (
          restaurantsToShow.map((restaurant) => (
            <RestaurantCard
              key={restaurant.id}
              title={restaurant.name}
              imageSrc={restaurant.image_url}
              isOpen={restaurant.is_open}
            />
          ))
        ) : (
          <div>No restaurants match your criteria</div>
        )}
      </ul>
    </div>
  );
}
