import { getRestaurantData, Restaurant } from "../lib/getRestaurants";
import Content from "./Content";

export default async function About() {
  const {
    restaurants: { restaurants },
  }: { restaurants: { restaurants: Restaurant[] } } = await getRestaurantData();

  return <Content restaurants={restaurants} />;
}
