import React from "react";

export default function Details({
  windKPH = null,
  chanceOfRain = null,
  humidity,
  minTemp,
  pressureIn,
  feelsLike,
}) {
  return (
    <div className={`flex col-span-2 space-x-8`}>
      <div>
        <div className="text-xs font-semibold text-blue-700 md:text-lg sm:text-xl ">
          Real feel : {feelsLike}°
        </div>
        {/* 
        <div className="text-xs font-semibold text-blue-700 md:text-lg ">
          Chance of Rain : {chanceOfRain}%
        </div> */}

        {/* <div>Min Temp : {minTemp}</div> */}
        <div className="text-xs font-semibold text-blue-700 md:text-lg sm:text-xl ">
          Wind Ne : {windKPH} Kph
        </div>
      </div>

      <div>
        <div className="text-xs font-semibold text-blue-700 md:text-lg sm:text-xl">
          Pressure : {pressureIn}
        </div>

        <div className="text-xs font-semibold text-blue-700 md:text-lg sm:text-xl ">
          Humidity: {humidity}%
        </div>
      </div>
    </div>
  );
}
