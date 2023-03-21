import React from "react";
import { BsCalendarDate } from "react-icons/bs";

function WeeklyForecast() {
  return (
    <div className="backdrop-blur-md bg-white/30 ml-5 p-5 rounded-md w-1/2">
      <p className="text-gray-200 text-xs max-w-140 flex items-center gap-1 mb-2">
        <BsCalendarDate />
        {"weekly forcast".toUpperCase()}
      </p>
      <p>No data available</p>
    </div>
  );
}

export default WeeklyForecast;
