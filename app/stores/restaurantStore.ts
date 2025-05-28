import { create } from "zustand";
import { Restaurant } from "../lib/getRestaurants";
import { PriceRanges, RestaurantTypes } from "../lib/getFilters";

interface RestaurantState {
  restaurants: Restaurant[];
  setRestaurants: (restaurants: Restaurant[]) => void;
  priceRanges: PriceRanges[];
  setPriceRanges: (priceRanges: PriceRanges[]) => void;
  restaurantTypes: RestaurantTypes[];
  setRestaurantTypes: (restaurantTypes: RestaurantTypes[]) => void;
}

export const useRestaurantStore = create<RestaurantState>((set) => ({
  restaurants: [],
  setRestaurants: (restaurants) => set({ restaurants }),
  priceRanges: [],
  setPriceRanges: (priceRanges) => set({ priceRanges }),
  restaurantTypes: [],
  setRestaurantTypes: (restaurantTypes) => set({ restaurantTypes }),
}));
