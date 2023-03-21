import React from "react";
import { HiOutlineCubeTransparent } from "react-icons/hi";

function AirQuality() {
  return (
    <div className="backdrop-blur-md bg-white/30 p-5 rounded-md w-full">
      <p className="text-gray-200 text-xs max-w-140 flex items-center gap-1 mb-2">
        <HiOutlineCubeTransparent />
        {"air quality".toUpperCase()}
      </p>
      Air quality
    </div>
  );
}

export default AirQuality;
