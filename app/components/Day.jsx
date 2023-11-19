"use client";
import React from "react";
import useForcastStore from "../../store/useForcastStore";

export default function Day() {
  const { data } = useForcastStore((state) => state);

  const timestampInSeconds = data?.current.last_updated_epoch;
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

  const day = dayNames[date.getDay()];

  return <h3>{day}</h3>;
}
