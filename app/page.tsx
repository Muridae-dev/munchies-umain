import {
  getOpenStatuses,
  getRestaurantData,
  Restaurant,
} from "./lib/getRestaurants";
import { getPriceRanges, getRestaurantTypes } from "./lib/getFilters";
import RestaurantsPage from "./components/RestaurantsPage";
import OpeningAnimation from "./components/OpeningAnimation";
import { cookies } from "next/headers";

export default async function Home() {
  const {
    restaurants: { restaurants },
  }: { restaurants: { restaurants: Restaurant[] } } = await getRestaurantData();

  const priceRanges = await getPriceRanges(restaurants);

  const { filters } = await getRestaurantTypes();

  await getOpenStatuses(restaurants);

  const cookieStore = cookies();
  const hasSeen =
    (await cookieStore).get("hasSeenOpeningAnimation")?.value === "true";

  return (
    <>
      {!hasSeen && <OpeningAnimation />}
      <RestaurantsPage
        restaurantProp={restaurants}
        priceRangeProp={priceRanges}
        restaurantTypeProp={filters}
      />
    </>
  );
}
