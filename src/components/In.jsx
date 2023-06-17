import React, { useEffect, useState } from "react";
import "./style.css";
import axios from "axios";
import rainy from "../images/rain.png";
import cloudy from "../images/cloud.png";
import location from "../images/weather.jpg";
function In() {
  //states to store the user input
  const [input, setInput] = useState("");

  //states to store the fetched data
  const [forecastData, setForecastdata] = useState(null);

  //handle submit and prevent reload
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const api_key = "bd154e411a08f09bf8f084b1cdbfa2a0";
      const inputValue = input;
      //get data from api
      const results = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${inputValue}&units=metric&appid=${api_key}`
      );
      const data = results.data;
      //store the fetched data in this usesate
      setForecastdata(data.list);
    } catch (error) {
      //incase there are  any errors
      console.log(error);
    }
    setInput("");
  };
  //get user input
  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);
  };
  //hook to monitor forecastdata stste
  useEffect(() => {
    if (forecastData && forecastData.length > 0) {
      console.log(forecastData);
      console.log(forecastData.city);
    // console.log(forecastData.city.name);
    }
  }, [forecastData]);

  return (
    <div className="part">
      <form className="form" onSubmit={handleSubmit}>
        <div className="search">
          <input
            type="text"
            placeholder="Search for places"
            id="input"
            value={input}
            onChange={handleChange}
          />
          <button type="submit" id="submit"></button>

          <i id="search" className="fa-solid fa-search"></i>
        </div>
      </form>
      <div className="weather-image">
        <img
          id="weather-icon"
          src={
            forecastData && forecastData.length > 0
              ? `https://openweathermap.org/img/wn/${forecastData[0].weather[0].icon}@2x.png`
              : ""
          }
          alt=""
        />
      </div>

      <div className="text">
        {/* fetching the data from the array */}
        <h1>
          {forecastData && forecastData.length > 0
            ? `${forecastData[0].main.temp}°C`
            : ""}
        </h1>
        <p>
          {forecastData && forecastData.length > 0
            ? new Date(forecastData[0].dt * 1000).toLocaleDateString(
                undefined,
                {
                  weekday: "long",
                  month: "long",
                  year: "numeric",
                }
              )
            : ""}
        </p>

        <hr></hr>
      </div>
      <div className="weather-icon">
        <div className="rainy">
          <p>
            {" "}
            {forecastData && forecastData.length > 0
              ? `${forecastData[0].weather[0].description}`
              : ""}{" "}
          </p>
        </div>

        <div className="rainy">
          <h4>Wind Speed: </h4>
          <p>
            {" "}
            {forecastData && forecastData.length > 0
              ? `${forecastData[0].wind.speed}km/hr`
              : ""}{" "}
          </p>
        </div>
      </div>
      <div className="location-img">
        <p> {input} </p>
       
        <img src={location} alt="" />
      </div>
    </div>
  );
}
export default In;
