import { getRestaurantData, Restaurant } from "./lib/getRestaurants";
import { getPriceRanges, getRestaurantTypes } from "./lib/getFilters";
import RestaurantsPage from "./components/RestaurantsPage";

export default async function Home() {
  const {
    restaurants: { restaurants },
  }: { restaurants: { restaurants: Restaurant[] } } = await getRestaurantData();

  const priceRanges = await getPriceRanges(restaurants);

  const { filters } = await getRestaurantTypes();

  return (
    <RestaurantsPage
      restaurantProp={restaurants}
      priceRangeProp={priceRanges}
      restaurantTypeProp={filters}
    />
  );
}
