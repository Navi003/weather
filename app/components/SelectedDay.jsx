import React from "react";
import Time from "./Time";
import Day from "./Day";
import Icon from "./Icon";
import Details from "./Details";
import Temp from "./Temp";

export default function SelectedDay({ day, onClick }) {
  return (
    <div className="bg-lime-100 text-comp-gray fade" onClick={onClick}>
      <div className="flex gap-8 p-4 text-lg bg-slate-200 date-time">
        <Day timeStamp={day.timestamp} />
      </div>
      <div className="grid grid-cols-2 grid-rows-2 p-4">
        <Temp maxTemp={day.maxTemp} minTemp={day.minTemp} />
        <Icon icon={day.icon} />
        <Details
          windKPH={day.maxWind}
          chanceOfRain={day.chanceOfRain}
          humidity={day.humidity}
          pressureIn={day.p}
        />
        <div className="mx-auto ">
          <div className="space-x-1">
            <span>Sunrise</span>: <span>{day.sunrise}</span>
          </div>
          <div className="space-x-2">
            <spans>Sunset</spans>: <span>{day.sunset}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
