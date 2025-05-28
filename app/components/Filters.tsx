"use client";

import { useEffect } from "react";
import { Restaurant } from "../lib/getRestaurants";
import { useRestaurantStore } from "../stores/restaurantStore";
import InfoCard from "./InfoCard";
import { PriceRanges, RestaurantTypes } from "../lib/getFilters";

interface FilterProps {
  restaurantProp: Restaurant[];
  priceRangeProp: PriceRanges[];
  restaurantTypeProp: RestaurantTypes[];
}

export default function Filters({
  restaurantProp,
  priceRangeProp,
  restaurantTypeProp,
}: FilterProps) {
  const {
    setRestaurants,
    setPriceRanges,
    setRestaurantTypes,
    restaurants,
    priceRanges,
    restaurantTypes,
  } = useRestaurantStore();

  const deliveryTimes = [
    {
      min: 0,
      max: 10,
    },
    {
      min: 10,
      max: 30,
    },
    {
      min: 30,
      max: 60,
    },
    {
      min: 60,
    },
  ];

  useEffect(() => {
    setRestaurants(restaurantProp);
    setPriceRanges(priceRangeProp);
    setRestaurantTypes(restaurantTypeProp);
  }, [setRestaurants, setPriceRanges, setRestaurantTypes]);

  return (
    <>
      {/* MOBILE */}
      <div className="flex flex-col gap-[10px] px-[24px] md:hidden">
        <span className="text-subtitle opacity-[40%]">Delivery Time</span>
        <div className="flex gap-[10px]">
          {deliveryTimes.map((deliveryTime) => {
            return (
              <InfoCard
                key={deliveryTime.min}
                title={
                  deliveryTime.max
                    ? `${deliveryTime.min}-${deliveryTime.max} min`
                    : `${deliveryTime.min} min+`
                }
              />
            );
          })}
        </div>
      </div>

      {/* DESKTOP */}
      <div className="hidden md:flex flex-col gap-[32px] card p-[24px] w-[239px]">
        <h2 className="text-h1">Filter</h2>
        <div>
          <span className="text-subtitle opacity-[40%]">Food Category</span>
          <div className="flex flex-col gap-[10px]">
            {restaurantTypes.map((restaurantType) => {
              return (
                <InfoCard key={restaurantType.id} title={restaurantType.name} />
              );
            })}
          </div>
        </div>

        <div>
          <span className="text-subtitle opacity-[40%]">Delivery Time</span>
          <div className="flex flex-row flex-wrap gap-[10px]">
            {deliveryTimes.map((deliveryTime) => {
              return (
                <InfoCard
                  key={deliveryTime.min}
                  title={
                    deliveryTime.max
                      ? `${deliveryTime.min}-${deliveryTime.max} min`
                      : `${deliveryTime.min} min+`
                  }
                />
              );
            })}
          </div>
        </div>

        <div>
          <span className="text-subtitle opacity-[40%]">Price Range</span>
          <div className="flex flex-row flex-wrap gap-[10px]">
            {priceRanges.map((priceRange) => {
              return (
                <InfoCard
                  key={priceRange.id}
                  title={priceRange.range}
                  small={true}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
