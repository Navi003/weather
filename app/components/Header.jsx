import React from "react";

export default function Header() {
  return (
    <div className="flex flex-col justify-between py-2 mt-4">
      <div className="flex gap-3 mb-2 ">
        <h5 className="text-gray-600">Today</h5>
        <h5 className="text-gray-600">Tomorrow</h5>
        <h5>Next 5 Days</h5>
      </div>

      {/* TODO */}
      {/* Make it work as toggle component  */}
      {/* <div className="flex items-center gap-3 p-2 font-medium rounded-full swtich bg-base-blue text-comp-gray">
        <div className="">Forcast</div>
        <div className="">Air Quality</div>
      </div> */}
    </div>
  );
}
