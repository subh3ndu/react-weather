import React from "react";
import { MdOutlineAir } from "react-icons/md";

function Wind({ value }) {
  return (
    <div className="backdrop-blur-md bg-white/30 p-5 rounded-md w-full">
      <p className="text-gray-200 text-xs max-w-140 flex items-center gap-1 mb-2">
        <MdOutlineAir />
        {"wind".toUpperCase()}
      </p>
      <p>{value} kmph</p>
    </div>
  );
}

export default Wind;
