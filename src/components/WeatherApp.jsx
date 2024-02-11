import React from 'react'
import "../styles/WeatherApp.css"
import img1 from "../images/craiyon_205929_dreamy_blue_and_pink_thick_clouds_background.png"
import img2 from "../images/ios-weather.png"

const WeatherApp = () => {
  return (
    <div className="craiyon-205929-dreamy-blue-and-parent">
    <img
      className="craiyon-205929-dreamy-blue-and-icon"
      alt=""
      src={img1}
    />
    <input type="text" />
    <img className="ios-weather-1-icon" alt="" src={img2} />
    <div className="celcius-parent">
      <div className="celcius">
        <div className="c">C</div>
        <div className="celcius-child" />
      </div>
      <div className="div33">24</div>
    </div>
    <div className="london">London</div>
    <div className="wind">
      <div className="div34">36</div>
      <div className="wind1">Wind :</div>
        <div className="phwind-duotone-icon">
        <i class="fa-solid fa-wind"></i>
        </div>
    </div>
  </div>
  )
}

export default WeatherApp
