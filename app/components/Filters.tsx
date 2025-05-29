"use client";

import { useRestaurantStore } from "../stores/restaurantStore";
import FilterGroup from "./FilterGroup";
import {
  deliveryTimes,
  toggleDeliveryTime,
  toggleFilters,
} from "../utils/filtering";

export default function Filters() {
  const {
    setSelectedTypes,
    setSelectedDeliveryTimes,
    setSelectedPriceRanges,
    priceRanges,
    restaurantTypes,
    selectedTypes,
    selectedDeliveryTimes,
    selectedPriceRanges,
  } = useRestaurantStore();

  return (
    <>
      {/* MOBILE */}
      <div className="flex flex-col gap-[10px] lg:hidden w-full">
        <FilterGroup
          title="Delivery Time"
          layout="row"
          items={deliveryTimes}
          getKey={(deliveryTime) =>
            `${deliveryTime.min}-${deliveryTime.max ?? "plus"}`
          }
          getLabel={(deliveryTime) =>
            deliveryTime.max
              ? `${deliveryTime.min}-${deliveryTime.max} min`
              : `${deliveryTime.min}+ min`
          }
          isSelected={(deliveryTime) =>
            selectedDeliveryTimes?.includes(deliveryTime)
          }
          onToggle={(deliveryTime) =>
            toggleDeliveryTime(
              deliveryTime,
              selectedDeliveryTimes,
              setSelectedDeliveryTimes
            )
          }
        />
      </div>

      {/* DESKTOP */}
      <div className="hidden lg:flex flex-col gap-[32px] card p-[24px] w-[239px]">
        <h2 className="text-h1">Filter</h2>
        <FilterGroup
          title="Food Category"
          items={restaurantTypes}
          getKey={(restaurantType) => restaurantType.id}
          getLabel={(restaurantType) => restaurantType.name}
          isSelected={(restaurantType) =>
            selectedTypes.includes(restaurantType.id)
          }
          onToggle={(restaurantType) =>
            toggleFilters(restaurantType.id, selectedTypes, setSelectedTypes)
          }
          layout="col"
        />

        <FilterGroup
          title="Delivery Time"
          layout="row"
          items={deliveryTimes}
          getKey={(deliveryTime) =>
            `${deliveryTime.min}-${deliveryTime.max ?? "plus"}`
          }
          getLabel={(deliveryTime) =>
            deliveryTime.max
              ? `${deliveryTime.min}-${deliveryTime.max} min`
              : `${deliveryTime.min}+ min`
          }
          isSelected={(deliveryTime) =>
            selectedDeliveryTimes?.includes(deliveryTime)
          }
          onToggle={(deliveryTime) =>
            toggleDeliveryTime(
              deliveryTime,
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
          getKey={(priceRange) => priceRange.id}
          getLabel={(priceRange) => priceRange.range}
          isSelected={(priceRange) =>
            selectedPriceRanges.includes(priceRange.id)
          }
          onToggle={(priceRange) =>
            toggleFilters(
              priceRange.id,
              selectedPriceRanges,
              setSelectedPriceRanges
            )
          }
        />
      </div>
    </>
  );
}
