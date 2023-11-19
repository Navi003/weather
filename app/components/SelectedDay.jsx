import React from "react";
import Time from "./Time";
import Day from "./Day";
import Icon from "./Icon";
import Details from "./Details";
import Temp from "./Temp";

export default function SelectedDay({ day }) {
  return (
    <div className="bg-base-blue text-comp-gray">
      <div className="flex gap-8 p-4 text-lg bg-slate-200 date-time">
        <Day timeStamp={day.timestamp} />
      </div>
      <div className="grid grid-cols-2 grid-rows-2 p-4">
        <Temp maxTemp={day.maxTemp} minTemp={day.minTemp} />
        <Icon icon={day.icon} />
        <Details wind={day.maxWind} chanceOfRain={day.chanceOfRain} />
        <div>
          <div>Sunrise : {day.sunrise}</div>
          <div>Sunset : {day.sunset}</div>
        </div>
      </div>
    </div>
  );
}
