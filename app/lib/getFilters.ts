import { Restaurant } from "../lib/getRestaurants";

export interface PriceRanges {
  id: string;
  range: string;
}

export interface RestaurantTypes {
  id: string;
  name: string;
  image_url: string;
}

export const getPriceRanges = async (restaurants: Restaurant[]) => {
  const uniqueIds = [
    ...new Set(restaurants.map((restaurant) => restaurant.price_range_id)),
  ];

  const priceRanges: PriceRanges[] = await Promise.all(
    uniqueIds.map(async (id) => {
      const res = await fetch(
        `https://work-test-web-2024-eze6j4scpq-lz.a.run.app/api/price-range/${id}`
      );
      return await res.json();
    })
  );

  return priceRanges;
};

export const getRestaurantTypes = async () => {
  const res = await fetch(
    "https://work-test-web-2024-eze6j4scpq-lz.a.run.app/api/filter"
  );

  return (await res.json()) as { filters: RestaurantTypes[] };
};
