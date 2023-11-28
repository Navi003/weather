import React from "react";
import Time from "./Time";
import Day from "./Day";
import Icon from "./Icon";
import Details from "./Details";
import Temp from "./Temp";

export default function SelectedDay({ day, onClick }) {
  return (
    <div
      className="rounded-lg bg-lime-100 text-comp-gray fade"
      onClick={onClick}
    >
      <div className="flex gap-8 p-4 text-lg bg-slate-200 date-time">
        <Day timeStamp={day.timestamp} />
      </div>
      <div className="grid grid-cols-[auto_auto] grid-rows-[auto_auto]  p-4 pt-0 gap-x-8">
        <Temp maxTemp={day.maxTemp} minTemp={day.minTemp} />
        <Icon className="w-20 h-20 sm:w-24 sm:h-24" icon={day.icon} />
        <Details
          windKPH={day.maxWind}
          chanceOfRain={day.chanceOfRain}
          humidity={day.humidity}
          pressureIn={day.p}
        />
        <div className="flex justify-between col-span-2 ">
          <div>
            <span>Sunrise</span>: <span>{day.sunrise}</span>
          </div>
          <div>
            <spans>Sunset</spans>: <span>{day.sunset}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
