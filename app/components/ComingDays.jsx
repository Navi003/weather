"use client";

import React, { useState } from "react";
import ComingDay from "./ComingDay";
import useForcastStore from "../../store/useForcastStore";
export default function ComingDays() {
  const { data } = useForcastStore((state) => state);

  const [expand, setExpand] = useState(null);

  function handleExpand(index) {
    console.log(index);
    setExpand((prevIndex) => (prevIndex === index ? null : index));
  }

  // const forecastDays = data.forecast.forecastday;
  const content = data.forecast.forecastday.map((day, index) => {
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

    return (
      <ComingDay
        onClick={handleExpand}
        index={index}
        key={Math.random()}
        day={dayData}
        expand={expand}
      />
    );
  });

  return content;
}
