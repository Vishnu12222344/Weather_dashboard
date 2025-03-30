import React from "react";
import { WiDaySunny, WiCloud, WiRain, WiSnow, WiThunderstorm } from "react-icons/wi";
import { Card } from "../styles";

const weatherIcons = {
  Clear: <WiDaySunny size={50} color="#FFD700" />,
  Clouds: <WiCloud size={50} color="#A9A9A9" />,
  Rain: <WiRain size={50} color="#1E90FF" />,
  Snow: <WiSnow size={50} color="#B0E0E6" />,
  Thunderstorm: <WiThunderstorm size={50} color="#800080" />,
};

export const WeatherCard = ({ data }) => (
  <Card>
    <h2>{data.name}</h2>
    {weatherIcons[data.weather[0].main] || <WiCloud size={50} />}
    <h3>{data.main.temp}°C</h3>
    <p>{data.weather[0].description}</p>
    <p>Humidity: {data.main.humidity}%</p>
    <p>Wind Speed: {data.wind.speed} km/h</p>
  </Card>
);
