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
    <div>
      {feelsLike ? (
        <div className="text-lg font-semibold text-blue-700">
          Real feel : {feelsLike}°
        </div>
      ) : (
        <div className="text-lg font-semibold">
          Chance of Rain : {chanceOfRain}%
        </div>
      )}
      {minTemp && <div>Min Temp : {minTemp}</div>}
      <div>Wind Ne : {windKPH} Kph </div>
      {pressureIn && <div>Pressure : {pressureIn} hpa</div>}
      <div>Humidity: {humidity}%</div>
    </div>
  );
}
