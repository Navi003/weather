"use client";
import React from "react";
import useForcastStore from "../../store/useForcastStore";
export default function Time({ timeStamp }) {
  const timestampInSeconds = timeStamp;
  const timestampInMilliseconds = timestampInSeconds * 1000;

  const date = new Date(timestampInMilliseconds);

  const hours = date.getHours();
  const minutes = date.getMinutes();

  return <h3 className="text-xl font-bold">{`${hours}:${minutes}`}</h3>;
}
