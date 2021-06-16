import React, { useState } from "react";
import axios from "axios";

export default function Weather(props) {
  let [city, setCity] = useState(null);
  let [temperature, setTemperature] = useState(null);
  let [humidity, setHumidity] = useState(null);
  let [description, setDescription] = useState(null);
  let [wind, setWind] = useState(null);
  let [iconUrl, setIconUrl] = useState(null);

  function showWeather(response) {
    setTemperature(response.data.main.temp);
    setHumidity(response.data.main.humidity);
    setDescription(response.data.weather[0].description);
    setWind(response.data.wind.speed);
    setIconUrl(
      `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "3eb9c949d1b0bbf888c46292a14dc08c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeather);
  }
  function Search(event) {
    setCity(event.target.value);
  }

  if (temperature) {
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Type a City Name Here"
            onChange={Search}
          />
          <input type="submit" value="Search" />
        </form>
        <ul>
          <li>Temperature: {Math.round(temperature)} °C</li>
          <li>Description: {description}</li>
          <li>Humidity: {humidity} %</li>
          <li>Wind: {Math.round(wind)} km/h </li>
          <li>
            <img src={iconUrl} alt="icon" />
          </li>
        </ul>
      </div>
    );
  } else {
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Type a City Name Here"
            onChange={Search}
          />
          <input type="submit" value="Search"></input>
        </form>
      </div>
    );
  }
  <small>
                <a href="https://github.com/CintaChan86/Weather-React"> Coded </a> by Yacinta Hostiningtyas
  </small>
}
