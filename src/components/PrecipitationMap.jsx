import React from "react";
import { BsUmbrellaFill } from "react-icons/bs";

function PrecipitationMap({ value }) {
  return (
    <div className="backdrop-blur-md bg-white/30 p-5 rounded-md w-full">
      <p className="text-gray-200 text-xs max-w-140 flex items-center gap-1 mb-2">
        <BsUmbrellaFill />
        {"precipitation".toUpperCase()}
      </p>
      <p>{value ? value.toString() + " m" : "No rain"}</p>
    </div>
  );
}

export default PrecipitationMap;
