"use client";

import React from "react";
import ComingDay from "./ComingDay";
import useForcastStore from "../../store/useForcastStore";
export default function ComingDays() {
  console.log("hellooo");
  const { data } = useForcastStore((state) => state);

  // const forecastDays = data.forecast.forecastday;
  const content = data.forecast.forecastday.map((day) => {
    const dayData = {
      timestamp: day.date_epoch,
      maxTemp: day.day.maxtemp_c,
      minTemp: day.day.mintemp_c,
      sunrise: day.astro.sunrise,
      sunset: day.astro.sunset,
      chanceOfRain: day.day.daily_chance_of_rain,
      maxWind: day.day.maxwind_kph,
      icon: day.day.condition.icon,
      iconAlt: day.day.condition.text,
    };

    return <ComingDay key={Math.random()} day={dayData} />;
  });

  return content;
}
