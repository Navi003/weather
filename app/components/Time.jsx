"use client";
import React from "react";

export default function Time({ timeStamp }) {
  const timestampInSeconds = timeStamp;
  const timestampInMilliseconds = timestampInSeconds * 1000;

  const date = new Date(timestampInMilliseconds);

  const hours = date.getHours();
  const minutes = date.getMinutes();

  const timeString = date.toLocaleTimeString("en-US", {
    hour12: false,
    hourCycle: "h23",
    hour: "2-digit",
    minute: "2-digit",
  });

  return <h3 className="text-xl font-bold">{`${timeString}`}</h3>;
}
