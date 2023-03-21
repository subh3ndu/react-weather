import React from "react";
import moment from "moment";
import { GiWaterDrop } from "react-icons/gi";

function getTime(utc) {
  const m = moment.unix(utc).utc().format("YYYY-MM-DD HH:mm:ss");
  const time = m.split(" ")[1];
  const arr = time.split(":");
  const hour = Number(arr[0]);
  const min = Number(arr[1]);
  return `${hour + 5}:${min + 30} am`;
}

function Sunrise({ utc }) {
  return (
    <div className="backdrop-blur-md bg-white/30 p-5 rounded-md w-full">
      <p className="text-gray-200 text-xs max-w-140 flex items-center gap-1 mb-2">
        <GiWaterDrop />
        {"Sunrise".toUpperCase()}
      </p>
      <p>{getTime(utc)}</p>
    </div>
  );
}

export default Sunrise;
