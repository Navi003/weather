"use client";

import React, { useState } from "react";
import { useRef } from "react";
import useForcastStore from "../../store/useForcastStore";
export default function SearchBox() {
  const { data, fetchForCast } = useForcastStore((state) => state);
  const [searchField, setSearchField] = useState();

  async function handleSubmit(e) {
    e.preventDefault();
    fetchForCast(searchField);
  }
  console.log(data);
  return (
    <form onSubmit={handleSubmit} className="w-full lg:grow xl:max-w-xl">
      <input
        value={searchField}
        onChange={(e) => setSearchField(e.target.value)}
        className="min-w-full p-4 font-semibold text-black transition-transform duration-300 rounded-full outline-none active:traform active:scale-y-125 focus:ring-4 focus:ring-amber-300"
        type="text"
      />
    </form>
  );
}
