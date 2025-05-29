"use client";

import { Restaurant } from "../lib/getRestaurants";
import Button from "../components/Button";
import CategoryCard from "../components/CategoryCard";
import InfoCard from "../components/InfoCard";
import Logo from "../components/Logo";
import RestaurantCard from "../components/RestaurantCard";

export default function Content({
  restaurants,
}: {
  restaurants: Restaurant[];
}) {
  const buttonPress = () => {
    alert("pressed");
  };

  return (
    <div className="flex align-center flex-col gap-10 h-auto w-full p-5 bg-[#5993f0]">
      <div className="flex align-center flex-col gap-5">
        <span className="underline">TEXT</span>
        <span className="text-display">Text Display</span>
        <span className="text-h1">Text h1</span>
        <span className="text-title">Text title</span>
        <span className="text-subtitle">Text subtitle</span>
        <span className="text-body">Text body</span>
      </div>

      <div className="flex align-center flex-col gap-5">
        <span className="underline">Colors</span>
        <div>
          White
          <div className="size-20 bg-white"></div>
        </div>

        <div>
          Stroke
          <div className="size-20 aspect-square bg-stroke"></div>
        </div>

        <div>
          Off-white
          <div className="size-20 aspect-square bg-off-white"></div>
        </div>

        <div>
          Black
          <div className="size-20 aspect-square bg-black"></div>
        </div>

        <div>
          Green
          <div className="size-20 aspect-square bg-green"></div>
        </div>
      </div>

      <div className="flex align-center flex-col gap-5">
        <span className="underline">Components</span>
        <Button label="Order" onClick={buttonPress} />
        <Button
          label="Button Secondary"
          onClick={buttonPress}
          variant="secondary"
        />
        Logo dark
        <Logo />
        Logo light
        <Logo variant="light" />
      </div>

      <div className="flex align-center flex-col gap-5">
        <CategoryCard title={"Coffee"} imageSrc={restaurants[0].image_url} />
      </div>

      <div className="flex align-center flex-col gap-5">
        <RestaurantCard
          title={restaurants[0].name}
          imageSrc={restaurants[0].image_url}
          id={restaurants[0].id}
          deliveryTime={restaurants[0].delivery_time_minutes}
        />
      </div>

      <div className="flex align-center flex-col gap-5">
        <InfoCard title="Coffee" />
        <InfoCard title="Open tomorrow at 12 pm" variant="secondary" />
      </div>
    </div>
  );
}
