"use client";

import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import CategoryCard from "./CategoryCard";
import { useRestaurantStore } from "../stores/restaurantStore";

export default function CategoryTypeList() {
  const { restaurantTypes } = useRestaurantStore();

  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    slides: { perView: "auto", spacing: 10 },
    mode: "free",
  });

  return (
    <div
      ref={sliderRef}
      className="keen-slider shrink-0 !sticky top-[0px] z-1 bg-off-white pb-[24px]"
    >
      {restaurantTypes.map((restaurantType) => (
        <div
          key={restaurantType.id}
          className="keen-slider__slide !w-[160px] flex-shrink-0"
        >
          <CategoryCard
            title={restaurantType.name}
            imageSrc={restaurantType.image_url}
          />
        </div>
      ))}
      <div className="keen-slider__slide !w-[1px] flex-shrink-0 opacity-0 pointer-events-none" />
    </div>
  );
}
