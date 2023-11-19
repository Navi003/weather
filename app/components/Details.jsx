"use client";

import React from "react";
import useForcastStore from "../../store/useForcastStore";

export default function Details() {
  const { data } = useForcastStore((state) => state);

  const {
    feelslike_c: feelsLike,
    wind_kph: windKPH,
    pressure_in: pressureIn,
    humidity,
  } = data?.current;

  return (
    <div>
      <div>Real feel : {feelsLike}°</div>
      <div>Wind Ne : {windKPH} </div>
      <div>Pressure : {pressureIn}</div>
      <div>Hemudity: {humidity}</div>
    </div>
  );
}
