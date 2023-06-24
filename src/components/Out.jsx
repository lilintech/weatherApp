import React from "react";
import "./style.css";
import celsius from "../images/celsius.png";
import farenheit from "../images/farenheit.png";

function Out() {
  return (
    <div className="out-main">
      <div className="navbar">
        <div className="nav-left">
          <h2>Today</h2>
          <h2>Week</h2>
        </div>

        <div className="nav-right">
          <img src={celsius} alt="" />
          <img src={farenheit} alt="" />
        </div>
      </div>

    <div className="forecasts">

    </div>

    <div className="highlights">
        
    </div>


    </div>
  );
}

export default Out;
