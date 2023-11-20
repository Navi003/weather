import React from "react";
import { TiWeatherPartlySunny } from "react-icons/ti";
import Image from "next/image";
export default function NotExpanded({ day }) {
  const timestampInSeconds = day.timestamp;
  const timestampInMilliseconds = timestampInSeconds * 1000;

  const date = new Date(timestampInMilliseconds);

  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const dayName = dayNames[date.getDay()];

  return (
    <div className="p-4">
      <h3 className="text-3xl text-center md:mb-6">{dayName.slice(0, 3)}</h3>

      <div className="grid justify-between grid-cols-2 md:flex md:flex-col-reverse ">
        <div className="mx-auto my-auto text-3xl md:text-6xl">
          {day.maxTemp}
        </div>
        <div className="flex items-center justify-center">
          <Image
            className="w-28 h-28"
            src={`https://${day.icon}`}
            alt={day.iconAlt}
            width={90}
            height={90}
          />
        </div>
      </div>
    </div>
  );
}
