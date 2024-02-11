import React, { useState } from 'react'
import "../styles/WetherApp.css"
import img1 from "../images/craiyon_205929_dreamy_blue_and_pink_thick_clouds_background.png"
import img2 from "../images/ios-weather.png"

const WeatherApp = () => {

    const[city,setCity]=useState("");
    const[weather,setWeather]=useState(null);

    const api_key = "0b3ef51a5a4af3e057124ef3711731ac";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=Metric&appid=${api_key}`;

    
   const handleCity=(e)=>{
    setCity(e.target.value);
   }

  const search=async()=>{
    try {
        if (city==="") {
            return;
         }
         const response = await fetch(url);
         const data = await response.json();
    
         const cityname=data.name;
         const temperature=data.main.temp;
         const windy=data.wind.speed;
    
         setWeather({cityname,temperature,windy});
    } catch (error) {
         console.log(error);
    }
  }

  return (
    <div className="craiyon-205929-dreamy-blue-and-parent">
    <img
      className="craiyon-205929-dreamy-blue-and-icon"
      alt=""
      src={img1}
    />

    <input type="text" placeholder="Search" required onChange={handleCity}/>
    <button type="submit" onClick={search}>
    <i class="fa-solid fa-magnifying-glass"></i>
    </button>
    
    <img className="ios-weather-1-icon" alt="" src={img2} />
      {weather &&(
        <>
         <div className="celcius-parent">
      <div className="celcius">
        <div className="c">C</div>
        <div className="celcius-child" />
      </div>
      <div className="div33">{weather.temperature}</div>
    </div>
    <div className="london">{weather.cityname}</div>
    <div className="wind">
      <div className="div34">{weather.windy}</div>
      <div className="wind1">Wind :</div>
        <div className="phwind-duotone-icon">
        <i class="fa-solid fa-wind"></i>
        </div>
    </div>
        </>
      )}
  </div>
  )
}

export default WeatherApp
