"use client";

import React from "react";
import Time from "./Time";
import Image from "next/image";
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

  const { hour } = data.forecast.forecastday.at(0);

  console.log(hour);

  const content = hour.map((hou) => {
    const timestampInSeconds = hou.time_epoch;
    const timestampInMilliseconds = timestampInSeconds * 1000;

    const date = new Date(timestampInMilliseconds);
    const hour = date.getHours();

    const temp = hou.temp_c;

    return (
      <div
        className="flex items-center justify-between gap-8 md:gap-4 md:justify-center md:flex-col"
        key={Math.random()}
      >
        <div className="text-lg font-bold">{hour}</div>
        <div className="w-10 h-10 ">
          <Image
            src={`https://${hou.condition.icon}`}
            width={60}
            height={60}
            alt={hou.condition.text}
            className="object-cover"
          />
        </div>
        <div>{temp}°</div>
      </div>
    );
  });

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
    <div className="max-w-5xl bg-base-blue text-comp-gray rounded-xl">
      <div className="flex gap-8 p-4 text-lg bg-slate-200 date-time">
        <h5>Today</h5>
        <Time timeStamp={lastUpdatedTimeStamp} />
      </div>
      <div className="flex justify-between">
        <div className="grow md:min-w-max">
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

        {/* Hourly weather */}
        <div className="h-56 p-4 mr-4 overflow-auto overflow-x-auto md:gap-4 md:flex">
          {content}
        </div>
      </div>
    </div>
  );
}
