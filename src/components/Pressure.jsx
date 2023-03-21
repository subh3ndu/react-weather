import React from "react";
import { TbWashPress } from "react-icons/tb";

function Pressure({ value }) {
  return (
    <div className="backdrop-blur-md bg-white/30 p-5 rounded-md w-full">
      <p className="text-gray-200 text-xs max-w-140 flex items-center gap-1 mb-2">
        <TbWashPress />
        {"Pressure".toUpperCase()}
      </p>
      <p>{value} hPa</p>
    </div>
  );
}

export default Pressure;