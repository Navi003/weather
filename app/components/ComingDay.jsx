"use client";
import React, { useState } from "react";
import { TiWeatherPartlySunny } from "react-icons/ti";
import NotExpanded from "./NotExpanded";
import SelectedDay from "./SelectedDay";
export default function ComingDay({ day, onClick, index, expand }) {
  return (
    <div
      className={`flex flex-col cursor-pointer bg-comp-gray md:block md:gap-5 animate overflow-hidden`}
      onClick={() => onClick(index)}
    >
      {expand === index ? <SelectedDay day={day} /> : <NotExpanded day={day} />}
    </div>
  );
}
