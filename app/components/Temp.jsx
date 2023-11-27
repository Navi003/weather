"use client";

import React from "react";
export default function Temp({ maxTemp, minTemp }) {
  return (
    <div className="flex items-center justify-center text-3xl font-extrabold sm:text-4xl md:text-5xl">
      {maxTemp}°
    </div>
  );
}
