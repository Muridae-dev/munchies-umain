"use client";

import { useEffect } from "react";
import { Restaurant } from "../lib/getRestaurants";
import { useRestaurantStore } from "../stores/restaurantStore";
import InfoCard from "./InfoCard";
import { PriceRanges, RestaurantTypes } from "../lib/getFilters";
import FilterGroup from "./FilterGroup";
import {
  deliveryTimes,
  toggleDeliveryTime,
  toggleFilters,
} from "../utils/filtering";

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
    setSelectedTypes,
    setSelectedDeliveryTimes,
    setSelectedPriceRanges,
    restaurants,
    priceRanges,
    restaurantTypes,
    selectedTypes,
    selectedDeliveryTimes,
    selectedPriceRanges,
  } = useRestaurantStore();

  useEffect(() => {
    setRestaurants(restaurantProp);
    setPriceRanges(priceRangeProp);
    setRestaurantTypes(restaurantTypeProp);
  }, [setRestaurants, setPriceRanges, setRestaurantTypes]);

  useEffect(() => {
    console.log(selectedTypes);
    console.log(selectedDeliveryTimes);
  }, [selectedTypes, selectedDeliveryTimes]);

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
        <FilterGroup
          title="Food Category"
          items={restaurantTypes}
          getKey={(r) => r.id}
          getLabel={(r) => r.name}
          isSelected={(r) => selectedTypes.includes(r.id)}
          onToggle={(r) => toggleFilters(r.id, selectedTypes, setSelectedTypes)}
          layout="col"
        />

        <FilterGroup
          title="Delivery Time"
          layout="row"
          items={deliveryTimes}
          getKey={(d) => `${d.min}-${d.max ?? "plus"}`}
          getLabel={(d) => (d.max ? `${d.min}-${d.max} min` : `${d.min}+ min`)}
          isSelected={(d) => selectedDeliveryTimes?.includes(d)}
          onToggle={(d) =>
            toggleDeliveryTime(
              d,
              selectedDeliveryTimes,
              setSelectedDeliveryTimes
            )
          }
        />

        <FilterGroup
          title="Price Range"
          layout="row"
          small
          items={priceRanges}
          getKey={(p) => p.id}
          getLabel={(p) => p.range}
          isSelected={(p) => selectedPriceRanges.includes(p.id)}
          onToggle={(p) =>
            toggleFilters(p.id, selectedPriceRanges, setSelectedPriceRanges)
          }
        />
      </div>
    </>
  );
}
