import React from "react";

export default function Header() {
  return (
    <div className="flex mt-4 p-4 justify-between items-center">
      <div className=" flex gap-3">
        <h1>Today</h1>
        <h1>Tomorrow</h1>
        <h1>Next 7 Days</h1>
      </div>

      {/* TODO */}
      {/* Make it work as toggle component  */}
      <div className=" swtich flex items-center gap-3 bg-base-blue py-2 px-2 rounded-full text-comp-gray font-medium ">
        <div className="">Forcast</div>
        <div className="">Air Quality</div>
      </div>
    </div>
  );
}
