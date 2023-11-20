"use client";

import React from "react";
import useForcastStore from "../../store/useForcastStore";
import Image from "next/image";
export default function Icon({ icon, iconAlt }) {
  const { data } = useForcastStore((state) => state);

  console.log(icon);
  return (
    <div className="flex items-center justify-center">
      <Image
        className="w-28 h-28"
        src={`https://${!icon ? data?.current.condition.icon : icon}`}
        alt={data?.current.condition.text}
        width={90}
        height={90}
      />
    </div>
  );
}
