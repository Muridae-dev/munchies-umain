"use client";

import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import CategoryCard from "./CategoryCard";
import { useRestaurantStore } from "../stores/restaurantStore";

export default function CategoryTypeList() {
  const { restaurantTypes } = useRestaurantStore();

  const [sliderRef] = useKeenSlider<HTMLElement>({
    slides: { perView: "auto", spacing: 10 },
    mode: "free",
  });

  return (
    <ul
      ref={sliderRef}
      className="keen-slider shrink-0 !sticky top-0 z-10 bg-off-white pb-xl"
    >
      {restaurantTypes.map((restaurantType) => (
        <li
          key={restaurantType.id}
          className="keen-slider__slide !w-category-card-w flex-shrink-0"
        >
          <CategoryCard
            title={restaurantType.name}
            imageSrc={restaurantType.image_url}
          />
        </li>
      ))}
      <div className="keen-slider__slide !w-[1px] flex-shrink-0 opacity-0 pointer-events-none" />
    </ul>
  );
}
