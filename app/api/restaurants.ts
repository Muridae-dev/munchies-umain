export interface Restaurant {
  id: string;
  name: string;
  rating: number;
  filter_ids: string[];
  image_url: string;
  price_range_id: string;
}

export async function getRestaurantData() {
  const res = await fetch(
    "https://work-test-web-2024-eze6j4scpq-lz.a.run.app/api/restaurants"
  );
  const restaurants = await res.json();

  return {
    restaurants,
  };
}
