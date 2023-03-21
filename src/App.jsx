import React, { useState, useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";

import Weather from "./components/Weather";
import HourlyForecast from "./components/HourlyForecast";
import WeeklyForecast from "./components/WeeklyForecast";
import PrecipitationMap from "./components/PrecipitationMap";
import AirQuality from "./components/AirQuality";
import UVIndex from "./components/UVIndex";
import Sunrise from "./components/Sunrise";
import Sunset from "./components/Sunset";
import Wind from "./components/Wind";
import FeelsLike from "./components/FeelsLike";
import Humidity from "./components/Humidity";
import Visibility from "./components/Visibility";
import Pressure from "./components/Pressure";

function App() {
  const [place, setPlace] = useState("Mumbai");
  const [inputText, setInputText] = useState("");
  const [data, setData] = useState({});

  useEffect(() => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${
      import.meta.env.VITE_KEY
    }`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData({
          name: data.name,
          visibility: data.visibility,
          ...data.rain,
          ...data.coord,
          ...data.weather[0],
          ...data.main,
          ...data.sys,
          ...data.wind,
        });
      })
      .catch((err) => console.error(err));
  }, [place]);

  function handleSubmit(e) {
    e.preventDefault();
    setPlace(inputText);
  }

  function handleChange(e) {
    setInputText(e.target.value);
  }

  return (
    <div className="w-screen h-screen bg-gradient-to-r from-cyan-500 to-blue-500">
      <div className="md:w-10/12 lg:w-7/12 mx-auto">
        <div className="absolute top-10 right-20">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              onChange={handleChange}
              placeholder="Your City"
              className="rounded-md outline-none bg-gray-900 opacity-50 pl-8 py-1 text-gray-100 font-thin"
            />
          </form>
          <i className="text-gray-300 absolute top-2 left-2">
            <AiOutlineSearch />
          </i>
        </div>

        <Weather
          name={data.name}
          temp={data.temp}
          high={data.temp_max}
          low={data.temp_min}
          desc={data.description}
        />

        <HourlyForecast />

        <div className="md:flex md:my-2 md:justify-between md:gap-x-2">
          <WeeklyForecast />
          <div className="md:flex md:flex-col md:mr-5 md:w-1/2 md:gap-y-2">
            <PrecipitationMap value={data["1h"]} />
            <AirQuality />
          </div>
        </div>

        <div className="grid md:mx-5">
          <UVIndex />
          <Sunrise utc={data.sunrise} />
          <Sunset utc={data.sunset} />
          <Wind value={data.speed} />
          <FeelsLike value={data.feels_like} />
          <Humidity value={data.humidity} />
          <Visibility value={data.visibility} />
          <Pressure value={data.pressure} />
        </div>
      </div>
    </div>
  );
}

export default App;
