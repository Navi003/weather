import Image from "next/image";
import Header from "./components/Header";
import { TiWeatherPartlySunny } from "react-icons/ti";
import ComingDays from "./components/ComingDays";

import CurrentDay from "./components/CurrentDay";

export default function Home() {
  return (
    <>
      <Header />
      <div className="grid-cols-1 gap-4 md:grid md:grid-cols-[1fr_1fr_auto] ">
        <CurrentDay /> {/* Default day*/}
        <ComingDays />
        <div className="row-span-2 bg-yellow-500 rounded-lg ">HEllo world</div>
      </div>
    </>
  );
}
