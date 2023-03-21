import React from "react";
import { WiHumidity } from "react-icons/wi";

function Humidity({ value }) {
  return (
    <div className="backdrop-blur-md bg-white/30 p-5 rounded-md w-full">
      <p className="text-gray-200 text-xs max-w-140 flex items-center gap-1 mb-2">
        <WiHumidity />
        {"Humidity".toUpperCase()}
      </p>
      <p>{value}%</p>
    </div>
  );
}

export default Humidity;
