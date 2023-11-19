import React from "react";
import { TbGridDots } from "react-icons/tb";
import { FaBell } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { HiUserCircle } from "react-icons/hi";
import SearchBox from "./SearchBox";
import Location from "./Location";

export default function Navbar() {
  return (
    <nav className="flex flex-col gap-5 md:gap-9 md:items-center md:flex-row xl:justify-between">
      <div className="flex justify-between gap-6">
        <div className="flex gap-4">
          <figure className="p-4 rounded-full bg-slate-700">
            <TbGridDots />
          </figure>

          <figure className="p-4 rounded-full bg-slate-700">
            <FaBell />
          </figure>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <IoLocationSharp />
            <Location />
          </div>
        </div>
      </div>
      <SearchBox />
    </nav>
  );
}
