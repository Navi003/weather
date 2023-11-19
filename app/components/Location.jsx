"use client";
import React, { useEffect } from "react";
import useForcastStore from "../../store/useForcastStore";

export default function Location() {
  const { data } = useForcastStore((state) => state);

  return <p className="text-text-main">{data?.location.name}</p>;
}
