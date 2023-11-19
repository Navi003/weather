"use client";

import React from "react";
export default function Temp({ maxTemp, minTemp }) {
  return (
    <div className="flex items-center justify-center text-6xl font-extrabold">
      {maxTemp}°
    </div>
  );
}
