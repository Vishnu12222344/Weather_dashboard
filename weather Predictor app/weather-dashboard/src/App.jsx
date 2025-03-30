import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import axios from "axios";
import { WeatherCard } from "./components/WeatherCard";
import { ForecastSection } from "./components/ForecastSection";
import { MainWrapper, SearchBar, InputBox, Button, ErrorMessage } from "./styles";
import { ThemeToggle } from "./components/ThemeToggle";
const WEATHER_API_KEY = "0fc643bf02fa3578bfd25b731336910f"; // Replace with your OpenWeather API Key
const MAX_SEARCH_HISTORY = 5;

const lightTheme = { background: "#87CEEB", color: "black" };
const darkTheme = { background: "#2F4F4F", color: "white" };

const App = () => {
  const [city, setCity] = useState("New York");
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [theme, setTheme] = useState(lightTheme);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    fetchWeather(city);
  }, []);

  const fetchWeather = async (city) => {
    setLoading(true);
    setError("");
    try {
      const weatherRes = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WEATHER_API_KEY}&units=metric`
      );
      const forecastRes = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${WEATHER_API_KEY}&units=metric`
      );
      setWeather(weatherRes.data);
      setForecast(forecastRes.data);
      updateHistory(city);
    } catch (err) {
      setError("City not found. Try another one!");
    }
    setLoading(false);
  };

  const updateHistory = (city) => {
    setHistory((prev) => [city, ...prev.filter((c) => c !== city)].slice(0, MAX_SEARCH_HISTORY));
  };

  return (
    <ThemeProvider theme={theme}>
      <MainWrapper>
        <h1>Weather DashBoard</h1>
        <ThemeToggle theme={theme} setTheme={setTheme} />

        <SearchBar>
          <InputBox
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && fetchWeather(city)}
            placeholder="Enter city name..."
          />
          <Button onClick={() => fetchWeather(city)}>Search</Button>
        </SearchBar>

        {loading && <p>Loading...</p>}
        {error && <ErrorMessage>{error}</ErrorMessage>}
        {weather && <WeatherCard data={weather} />}
        {forecast && <ForecastSection forecast={forecast} />}

        <h3>Recent Searches:</h3>
        <ul>
          {history.map((item, index) => (
            <li key={index} onClick={() => fetchWeather(item)}>{item}</li>
          ))}
        </ul>
      </MainWrapper>
    </ThemeProvider>
  );
};

export default App;
