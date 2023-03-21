import React from "react";
import { BsSunFill } from "react-icons/bs";

function UVIndex() {
  return (
    <div className="backdrop-blur-md bg-white/30 p-5 rounded-md w-full">
      <p className="text-gray-200 text-xs max-w-140 flex items-center gap-1 mb-2">
        <BsSunFill />
        {"uv index".toUpperCase()}
      </p>
      UV Index
    </div>
  );
}

export default UVIndex;
