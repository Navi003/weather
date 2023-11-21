"use client";

import React from "react";
import Time from "./Time";
import Day from "./Day";
import Icon from "./Icon";
import Details from "./Details";
import Temp from "./Temp";
import useForcastStore from "../../store/useForcastStore";
export default function CurrentDay() {
  const { data, getGeoLocation } = useForcastStore((state) => state);
  const currDate = new Date();
  const currTimeStamp = currDate.getTime();

  if (!data) return;

  const {
    temp_c: temp,
    last_updated_epoch: lastUpdatedTimeStamp,
    condition,
    feelslike_c: feelsLike,
    humidity,
    wind_kph: windKph,
    pressure_in: pressureIn,
  } = data?.current;

  return (
    <div className="bg-base-blue text-comp-gray">
      <div className="flex gap-8 p-4 text-lg bg-slate-200 date-time">
        <h5>Today</h5>
        <Time timeStamp={lastUpdatedTimeStamp} />
      </div>
      <div className="grid grid-cols-2 grid-rows-2 p-4">
        <Temp maxTemp={temp} />
        <Icon icon={condition.icon} iconAlt={condition.text} />
        <Details
          windKPH={windKph}
          humidity={humidity}
          pressureIn={pressureIn}
          feelsLike={feelsLike}
        />
      </div>
    </div>
  );
}
