import { create } from "zustand";
import getForcastData from "../lib/getForcastData";
import { getForcastDataFromGeoLocation } from "../lib/getForcastData";
import React from "react";

const initialState = {
  data: null,
};

const store = (set, get) => ({
  ...initialState,
  useResetAll: () => set({ ...initialState }),

  fetchForCast: async (searchTerm) => {
    try {
      const data = await getForcastData(searchTerm);
      console.log(data.forecast.forecastday);
      set({ data: data });
    } catch (error) {
      console.log(error);
    }
  },

  getGeoLocation: async () => {
    let latitude;
    let longitude;

    if (!get().data) {
      if (navigator.geolocation) {
        // Get the current position
        navigator.geolocation.getCurrentPosition(
          async function (position) {
            // Access the latitude and longitude from the position object

            latitude = position.coords.latitude;
            longitude = position.coords.longitude;

            const data = await getForcastDataFromGeoLocation(
              position.coords.latitude,
              position.coords.longitude
            );
            set({ data });
          },
          function (error) {
            // Handle errors, if any
            console.error("Error getting geolocation:", error.message);
          }
        );
      } else {
        // Geolocation is not supported by this browser
        console.error("Geolocation is not supported by this browser");
      }
    }
  },
});

const useForcastStore = create(store);
export default useForcastStore;
