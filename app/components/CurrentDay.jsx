import React from "react";
import Time from "./Time";
import Day from "./Day";
import Icon from "./Icon";
import Details from "./Details";
import Temp from "./Temp";

export default function CurrentDay({ day }) {
  return (
    <div className="bg-base-blue text-comp-gray">
      <div className="flex gap-8 p-4 text-lg bg-slate-200 date-time">
        <Day />
      </div>
      <div className="grid grid-cols-2 grid-rows-2 p-4">
        <Temp />
        <Icon />
        <Details />
        <div>
          <div>Sunrise</div>
          <div>Sunset</div>
        </div>
      </div>
    </div>
  );
}
