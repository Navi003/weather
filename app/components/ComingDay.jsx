"use client";
import React, { useState } from "react";
import { TiWeatherPartlySunny } from "react-icons/ti";
import NotExpanded from "./NotExpanded";
import SelectedDay from "./SelectedDay";
export default function ComingDay({ day, onClick, index, expand }) {
  return (
    <div
      className={`flex cursor-pointer bg-comp-gray  rounded-xl`}
      onClick={onClick}
    >
      {expand === index ? <SelectedDay day={day} /> : <NotExpanded day={day} />}
    </div>
  );
}
