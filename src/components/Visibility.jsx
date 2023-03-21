import React from "react";
import { AiFillEye } from "react-icons/ai";

function Humidity({ value }) {
  return (
    <div className="backdrop-blur-md bg-white/30 p-5 rounded-md w-full">
      <p className="text-gray-200 text-xs max-w-140 flex items-center gap-1 mb-2">
        <AiFillEye />
        {"visibility".toUpperCase()}
      </p>
      <p>{value / 1000} km</p>
    </div>
  );
}

export default Humidity;
