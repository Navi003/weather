"use client";
import React, { useState } from "react";
import { TiWeatherPartlySunny } from "react-icons/ti";
import NotExpanded from "./NotExpanded";
import SelectedDay from "./SelectedDay";
export default function ComingDay({ day }) {
  const [expand, setExpand] = useState();

  function handleExpand() {
    setExpand((e) => !e);
  }

  return (
    <div
      className={`flex flex-col ${
        !expand && "p-4"
      } cursor-pointer bg-comp-gray md:block md:gap-5 animate overflow-hidden`}
      onClick={handleExpand}
    >
      {expand ? <SelectedDay day={day} /> : <NotExpanded day={day} />}
    </div>
  );
}
