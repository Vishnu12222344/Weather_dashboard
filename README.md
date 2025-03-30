🌦️ Weather Predictor App

📌 Overview

The Weather Predictor App is a responsive and feature-rich web application that allows users to search for real-time weather information and a 5-day forecast for any city. It also supports theme toggling (Dark/Light Mode), recent search history, and a refresh button for up-to-date data.

🚀 Features

🌍 Search Weather by City: Enter a city name and get real-time weather details.

📅 5-Day Forecast: View upcoming weather trends.

🌗 Dark/Light Mode: Toggle between dark and light themes.

🔄 Refresh Button: Fetch the latest weather data.

🕒 Recent Search History: Stores the last 5 searched cities.

⚡ Loading Animations: Smooth UI transitions using Framer Motion or CSS.

🛠️ Error Handling: Friendly error messages for invalid inputs or API failures.

📱 Responsive Design: Optimized for mobile and desktop.

🛠️ Tech Stack

The application is built using the following technologies:

Frontend

React.js (with Vite)

Tailwind CSS / Styled Components

Framer Motion (for animations)

Backend & APIs

OpenWeather API (5-Day/3-Hour Forecast & Current Weather)

Other Technologies

React Hooks (for state management)

Axios (for API requests)

LocalStorage (for recent search history)

⚡ Installation & Setup

1️⃣ Clone the Repository

git clone https://github.com/yourusername/weather-predictor.git
cd weather-predictor

2️⃣ Install Dependencies

npm install

3️⃣ Secure Your API Key

Create a .env file in the root directory.

Add the following line (replace with your OpenWeather API key):

VITE_WEATHER_API_KEY=0fc643bf02fa3578bfd25b731336910f

Ensure your .gitignore includes .env to prevent key exposure.

4️⃣ Run the Application

npm run dev

The app will be available at http://localhost:5173.

🔥 Usage

Enter a city name in the search bar and hit Search.

View the current weather and 5-day forecast.

Toggle Dark/Light Mode using the switch.

Click on a city from Recent Searches to quickly check past queries.

Hit Refresh to update the weather data.

🔒 Security Measures

API Key is stored securely in an .env file.

.gitignore prevents sensitive data from being committed.

🛠️ Future Enhancements

🌎 Geolocation Support: Auto-detect user's location.

📍 Map Integration: Display searched cities on a map.

📊 Advanced Forecasting: Hourly breakdown of temperature.

🤝 Contributing

Contributions are welcome! Feel free to fork the repo and submit a pull request.

📜 License

This project is licensed under the MIT License.

🌟 Star the repo if you like this project! ✨

