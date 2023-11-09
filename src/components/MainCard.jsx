import React from "react";
import "./MainCard.css"; 
import clear_icon from "../imgs/clear.png";
import cloud_icon from "../imgs/cloud.png";
import drizzle_icon from "../imgs/drizzle.png";
import rain_icon from "../imgs/rain.png";
import snow_icon from "../imgs/snow.png";

export default function MainCard({ data }) {
    const weatherIconCode = data.weather[0].icon;

    let weatherImage;

    if (weatherIconCode === "01d" || weatherIconCode === "01n") {
        weatherImage = clear_icon;
    } else if (weatherIconCode === "02d" || weatherIconCode === "02n") {
        weatherImage = cloud_icon;
    } else if (weatherIconCode === "03d" || weatherIconCode === "03n") {
        weatherImage = drizzle_icon;
    } else if (weatherIconCode === "04d" || weatherIconCode === "04n") {
        weatherImage = drizzle_icon;
    } else if (weatherIconCode === "09d" || weatherIconCode === "09n" || weatherIconCode === "10d" || weatherIconCode === "10n") {
        weatherImage = rain_icon;
    } else if (weatherIconCode === "13d" || weatherIconCode === "13n") {
        weatherImage = snow_icon;
    } else {
        weatherImage = clear_icon;
    }

    return (
        <div className="card-container bg-gradient-to-b from-blue-800 to-blue-500 p-8 rounded-lg shadow-lg max-w-xs flex flex-col items-center justify-center">
            <h4 className="text-white text-2xl font-semibold mb-2 text-left">Current Weather</h4>
            <div className="weather-icon">
                <img src={weatherImage} alt="Weather Icon" className="w-48 h-48" />
            </div>
            <div className="temperature mt-4 text-white text-6xl font-semibold">
                {Math.floor(data.main.temp)}°C
            </div>
            <div className="font-normal text-center justify-center text-white capitalize">
                <span className="text-xl font-light">{data.name}</span>
            </div>
        </div>



    );
}
