import React from "react";
import WeatherItem from "./weatherItem";

const WeatherList = ({ cities, weathers }) => {
  const itemsList = cities.map((city, index) => {
    return <WeatherItem key={city.id} city={city} weather={weathers[index]} />;
  });
  return itemsList;
};

export default WeatherList;
