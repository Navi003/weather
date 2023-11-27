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
        className="flex flex-col items-center justify-center"
        key={Math.random()}
      >
        <div className="text-lg font-bold">{hour}</div>
        <div className="w-10 h-10 p-2 ">
          <Image
            src={`https://${hou.condition.icon}`}
            width={60}
            height={60}
            alt={hou.condition.text}
            className="object-cover w-full"
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
    <div className="shrink bg-base-blue text-comp-gray rounded-xl md:col-span-2">
      <div className="flex gap-8 p-4 text-lg bg-slate-200 date-time">
        <h5>Today</h5>
        <Time timeStamp={lastUpdatedTimeStamp} />
      </div>
      <div className="flex text-xs">
        <div className="grow md:min-w-max">
          <div className="grid grid-cols-2 grid-rows-[auto_auto_auto] gap-y-3 p-4">
            <Temp maxTemp={temp} />
            <Icon
              className="w-28 h-28 sm:w-36 sm:h-36"
              icon={condition.icon}
              iconAlt={condition.text}
            />
            <Details
              windKPH={windKph}
              humidity={humidity}
              pressureIn={pressureIn}
              feelsLike={feelsLike}
            />
            <div className="flex col-span-2 overflow-x-auto ">{content}</div>
          </div>

          {/* Hourly weather */}
        </div>
      </div>
    </div>
  );
}
