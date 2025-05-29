export interface Restaurant {
  id: string;
  name: string;
  rating: number;
  filter_ids: string[];
  image_url: string;
  delivery_time_minutes: number;
  price_range_id: string;
  is_open: boolean;
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

interface OpenDataProps {
  is_open: boolean;
  restaurant_id: string;
}

export async function getOpenStatuses(restaurants: Restaurant[]) {
  await Promise.all(
    restaurants.map(async (restaurant) => {
      const { isOpen } = await isRestaurantOpen(restaurant.id);
      restaurant.is_open = isOpen;
    })
  );
}

export async function isRestaurantOpen(id: string) {
  const res = await fetch(
    `https://work-test-web-2024-eze6j4scpq-lz.a.run.app/api/open/${id}`
  );
  const openData: OpenDataProps = await res.json();

  return {
    isOpen: openData.is_open,
  };
}
