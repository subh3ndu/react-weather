import React from "react";
import { CiTempHigh } from "react-icons/ci";

function FeelsLike({ value }) {
  return (
    <div className="backdrop-blur-md bg-white/30 p-5 rounded-md w-full">
      <p className="text-gray-200 text-xs max-w-140 flex items-center gap-1 mb-2">
        <CiTempHigh />
        {"Feels like".toUpperCase()}
      </p>
      <p>{Math.round(value - 273.15)}°</p>
    </div>
  );
}

export default FeelsLike;
