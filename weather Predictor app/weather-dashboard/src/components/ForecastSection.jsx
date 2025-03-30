import React from "react";
import { ForecastWrapper, ForecastBox } from "../styles";

export const ForecastSection = ({ forecast }) => (
  <ForecastWrapper>
    {forecast.list.slice(0, 5).map((item, index) => (
      <ForecastBox key={index}>
        <p>{new Date(item.dt_txt).toLocaleDateString()}</p>
        <h3>{item.main.temp}°C</h3>
        <p>{item.weather[0].description}</p>
      </ForecastBox>
    ))}
  </ForecastWrapper>
);
