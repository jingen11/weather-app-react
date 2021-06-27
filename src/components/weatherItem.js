import "./weather.scss";
import React from "react";
import Cloudy from "../icons/Cloudy";
import Sunny from "../icons/Sunny";
import Windy from "../icons/Windy";
import Foggy from "../icons/Foggy";
import Snowy from "../icons/Snowy";
import Stormy from "../icons/Stormy";

const WeatherItem = ({ city, weather }) => {
  const { id, main } = weather.weather[0];
  let renderedIcon;
  if (id === 800) {
    renderedIcon = <Sunny />;
  } else if (main === "Clouds") {
    renderedIcon = <Cloudy />;
  } else if (id > 700) {
    renderedIcon = <Foggy />;
  } else if (id >= 600) {
    renderedIcon = <Snowy />;
  } else if (id >= 300) {
    renderedIcon = <Windy />;
  } else if (id >= 200) {
    renderedIcon = <Stormy />;
  }
  return (
    <div className="column">
      <div className="ui raised segment" style={{ borderRadius: "10px" }}>
        <div className="svg-contain">{renderedIcon}</div>
        <div className="data-contain">
          <h4 className="ui center aligned dividing header">{city.city}</h4>
          <div className="ui two column divided grid">
            <div className=" stretched row">
              <div
                className="column"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "10px 0",
                }}
              >
                <p style={{ fontSize: "15px" }}>Current Temp:</p>
                <p style={{ fontSize: "22px", fontStyle: "italic" }}>
                  <strong>{weather.main.temp}</strong>
                  <span>&#176; C</span>{" "}
                </p>
              </div>
              <div className="column">
                <h5 className="ui dividing header">Details:</h5>
                Feels Like: {weather.main.feels_like} &#176;C
                <br />
                Humidity: {weather.main.humidity} %
                <br />
                Pressure: {weather.main.pressure} hPa
                <br />
                Max Temp:{weather.main.temp_max} &#176;C
                <br />
                Min Temp:{weather.main.temp_min} &#176;C
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherItem;
