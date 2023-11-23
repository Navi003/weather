import Image from "next/image";
import Header from "./components/Header";
import { TiWeatherPartlySunny } from "react-icons/ti";
import ComingDays from "./components/ComingDays";

import CurrentDay from "./components/CurrentDay";

export default function Home() {
  return (
    <>
      <Header />
      <div className="flex flex-col flex-wrap gap-5 md:flex-row content-main">
        <div className="flex flex-col gap-4">
          <CurrentDay /> {/* Default day*/}
          <ComingDays />
        </div>
        <div className="w-[29.55rem] row-span-3 bg-red-600"></div>
      </div>
    </>
  );
}
