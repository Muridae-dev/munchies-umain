import { create } from "zustand";
import { Restaurant } from "../lib/getRestaurants";
import { PriceRange, RestaurantTypes } from "../lib/getFilters";
import { DeliveryTime } from "../utils/filtering";

interface RestaurantState {
  restaurants: Restaurant[];
  setRestaurants: (restaurants: Restaurant[]) => void;

  priceRanges: PriceRange[];
  setPriceRanges: (priceRanges: PriceRange[]) => void;

  restaurantTypes: RestaurantTypes[];
  setRestaurantTypes: (restaurantTypes: RestaurantTypes[]) => void;

  selectedTypes: string[];
  setSelectedTypes: (ids: string[]) => void;

  selectedPriceRanges: string[];
  setSelectedPriceRanges: (ids: string[]) => void;

  selectedDeliveryTimes: DeliveryTime[];
  setSelectedDeliveryTimes: (range: DeliveryTime[]) => void;
}

export const useRestaurantStore = create<RestaurantState>((set) => ({
  restaurants: [],
  setRestaurants: (restaurants) => set({ restaurants }),

  priceRanges: [],
  setPriceRanges: (priceRanges) => set({ priceRanges }),

  restaurantTypes: [],
  setRestaurantTypes: (restaurantTypes) => set({ restaurantTypes }),

  selectedTypes: [],
  setSelectedTypes: (selectedTypes) => set({ selectedTypes }),

  selectedPriceRanges: [],
  setSelectedPriceRanges: (selectedPriceRanges) => set({ selectedPriceRanges }),

  selectedDeliveryTimes: [],
  setSelectedDeliveryTimes: (selectedDeliveryTimes) =>
    set({ selectedDeliveryTimes }),
}));
