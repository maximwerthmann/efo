"use client";

import { AlertTriangle, ArrowRight, Megaphone } from "lucide-react";
import Link from "next/link";

import Countdown from "react-countdown";

const renderer = ({ days, completed }: any) => {
  if (completed) {
    // Render a completed state
    return <span>Heute!</span>;
  } else {
    // Render a countdown
    return (
      <span>
        in <span className="font-bold">{days}</span> Tagen
      </span>
    );
  }
};

export default function Announcement() {

    var countDownDate = new Date("June 8, 2024").getTime();


  return (
    <div className="w-full h-12 bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 duration-500 text-white flex flex-col space-x-16 px-4 text-sm">
      <div className="h-12 w-full flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <AlertTriangle size={20} />
          <span>Allgemeine Mitteilung</span>
        </div>
        <div className="flex items-center space-x-4">
          <div className="space-x-1">
            <span>Das Bahnhofsfest in Raeren beginnt</span>
            <Countdown
              className="font-bold"
              date={countDownDate}
              renderer={renderer}
            />
          </div>
          <span>(8/6/2024 - 9/6/2024)</span>
        </div>
        <Link
          href={"https://eisenbahnfreunde-grenzland.de"}
          className="flex items-center space-x-2 underline"
        >
          <span>Mehr erfahren</span>
          <ArrowRight size={20} />
        </Link>
      </div>
      <div className="flex-1 flex items-center justify-center">
        
      </div>
    </div>
  );
}
