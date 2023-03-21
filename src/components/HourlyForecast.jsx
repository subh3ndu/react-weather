import React from "react";
import { BiTime } from "react-icons/bi";

function HourlyForecast() {
  return (
    <div className="backdrop-blur-md bg-white/30 mx-5 p-5 rounded-md">
      <p className="text-gray-200 text-xs max-w-140 flex items-center gap-1 mb-2">
        <BiTime />
        {"hourly forcast".toUpperCase()}
      </p>
      <p>No data available</p>
    </div>
  );
}

export default HourlyForecast;
