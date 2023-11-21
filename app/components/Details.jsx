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
    <div
      className={`${
        feelsLike ? "grid grid-cols-[auto_1fr] col-span-2 gap-3" : ""
      }`}
    >
      {feelsLike ? (
        <div className="text-lg font-semibold text-blue-700">
          Real feel : {feelsLike}°
        </div>
      ) : (
        <div className="text-lg font-semibold text-blue-700">
          Chance of Rain : {chanceOfRain}%
        </div>
      )}
      {minTemp && <div>Min Temp : {minTemp}</div>}
      <div className="text-lg font-semibold text-blue-700">
        Wind Ne : {windKPH} Kph{" "}
      </div>
      {pressureIn && (
        <div className="text-lg font-semibold text-blue-700">
          Pressure : {pressureIn} hpa
        </div>
      )}
      <div className="text-lg font-semibold text-blue-700">
        Humidity: {humidity}%
      </div>
    </div>
  );
}
