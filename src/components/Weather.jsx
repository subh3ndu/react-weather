import React from "react";

function Weather({ name, temp, high, low, desc }) {
  return (
    <div className="relative">
      <div className="flex flex-col items-center text-white py-8 pt-10">
        <div className="text-3xl">{name}</div>
        <div className="text-6xl font-thin">{`${Math.round(
          temp - 273.15
        )}°`}</div>
        <div className="text-md capitalize">{desc}</div>
        <div className="text-md">{`H:${Math.round(
          high - 273.15
        )}° L:${Math.round(low - 273.15)}°`}</div>
      </div>
    </div>
  );
}

export default Weather;
