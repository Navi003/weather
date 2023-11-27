import React from "react";
import { TiWeatherPartlySunny } from "react-icons/ti";
import Image from "next/image";
import Icon from "./Icon";
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
    <div className="flex justify-between p-4 rounded-lg">
      <h3 className="text-3xl text-center md:mb-6">{dayName.slice(0, 3)}</h3>

      <div>
        <div>{day.maxTemp}</div>
        <div className="flex items-center justify-center">
          <Icon
            className="w-16 h-16 sm:w-24 sm:h-24"
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
