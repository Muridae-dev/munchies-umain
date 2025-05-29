import {
  getOpenStatuses,
  getRestaurantData,
  Restaurant,
} from "../../lib/getRestaurants";
import { getPriceRanges, getRestaurantTypes } from "../../lib/getFilters";
import RestaurantsPage from "../../components/RestaurantsPage";
import { notFound } from "next/navigation";
import { slugify } from "@/app/utils/regex";

type Params = { slug: string };

export async function generateStaticParams() {
  const { filters } = await getRestaurantTypes();

  return filters.map((filter) => ({
    slug: encodeURIComponent(slugify(filter.name)),
  }));
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;

  const {
    restaurants: { restaurants },
  }: { restaurants: { restaurants: Restaurant[] } } = await getRestaurantData();

  const { filters } = await getRestaurantTypes();

  const matchingFilter = filters.find(
    (filter) => slugify(filter.name) === decodeURIComponent(slug).toLowerCase()
  );

  if (!matchingFilter) {
    return notFound();
  }

  const filteredRestaurants = restaurants.filter((restaurant) =>
    restaurant.filter_ids.includes(matchingFilter.id)
  );

  await getOpenStatuses(filteredRestaurants);
  const priceRanges = await getPriceRanges(filteredRestaurants);

  return (
    <RestaurantsPage
      restaurantProp={filteredRestaurants}
      priceRangeProp={priceRanges}
      restaurantTypeProp={filters}
    />
  );
}
