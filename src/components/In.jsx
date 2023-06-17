import React from "react";
import search from "../images/search-interface-symbol.png";
import "./style.css"
import rainy from "../images/rain.png"
import cloudy from "../images/cloud.png"
import location from "../images/weather.jpg"
function In() {
  return (
    <div className="part">
      <div className="search" >
        <img src={search} alt="" />
        <input type="text" placeholder="Search for places" />
      </div>
    <img id="weather-icon" src="" alt="" />
    <div className="text">
<h1>12C</h1>
<p>Monday</p>
<hr></hr>
</div>
<div className="weather-icon">
  <div className="rainy">
    <img src={rainy} alt="rainy" />
    <p>Mostly Cloudy</p>
    </div>

    <div className="rainy">
    <img src={cloudy}alt="cloudy" />
    <p>Rain - 30%</p>
    </div>
</div>
<div className="location-img">
<img src={location} alt="" />

</div>
    </div>
  );
}
export default In;
