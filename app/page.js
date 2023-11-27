import Image from "next/image";
import Header from "./components/Header";
import { TiWeatherPartlySunny } from "react-icons/ti";
import ComingDays from "./components/ComingDays";

import CurrentDay from "./components/CurrentDay";

export default function Home() {
  return (
    <>
      <Header />
      <div className="md:grid md:grid-cols-[2fr_1.5fr] ">
        <div className="flex flex-col gap-4">
          <CurrentDay /> {/* Default day*/}
          <ComingDays />
        </div>
        <div className="bg-red-600 md:min-w-[300px] ">HEllo world</div>
      </div>
    </>
  );
}
