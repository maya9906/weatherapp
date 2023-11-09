import React from "react";
import "./SecondCard.css";
import humidity from "../imgs/humidity.png"
import wind from "../imgs/wind.png"
import temperatureRange from "../imgs/temperature-range.png"
import feelsLike from "../imgs/feels-like.png"



export default function CardDetailComponent({ data }) {
    const weatherIcon = data.weather[0].icon;

    return (
        <div className="card-detail-container">
            <div className="card bg-gradient-to-r from-cyan-500 to-blue-500">
            <h5 className="mb-2 text-m font-light tracking-tight text-white">Humidity</h5>
                <div className="flex items-center justify-center">
                    <img src={humidity} alt="humidity image" title="humidity image"/>
                    <span className="text-4xl font-bold text-white feels-like">{Math.floor(data.main.humidity)}%</span>
                </div>
            </div>

            <div className="card bg-gradient-to-r from-cyan-500 to-blue-500">
                <h5 className="mb-2 text-m font-light tracking-tight text-white">Wind Speed</h5>
                <div className="flex items-center justify-center">
                    <img src={wind} alt="wind image" title="wind image"/>
                <span className="text-4xl font-bold text-white feels-like">{Math.floor(data.wind.speed)}km/h</span>
                </div>
            </div>

            <div className="card bg-gradient-to-r from-cyan-500 to-blue-500">
                <h5 className="mb-2 text-m font-light tracking-tight text-white">Temperature Range</h5>
                <div className="flex items-center justify-center">
                    <img src={temperatureRange} alt="temperature range image" title="temperature range image"/>
                <span className="text-4xl font-bold text-white feels-like">
                    {Math.floor(data.main.temp_min)}°C - {Math.floor(data.main.temp_max)}°C
                </span>
                </div>
            </div>

            <div className="card bg-gradient-to-r from-cyan-500 to-blue-500">
                <h5 className="mb-2 text-m font-light tracking-tight text-white">Feels Like</h5>
                <div className="flex items-center justify-center">
                    <img src={feelsLike} alt="humidity image" title="humidity image"/>
                <span className="text-4xl font-bold text-white feels-like">{Math.floor(data.main.feels_like)}°C</span>
                </div>
                <p className="font-normal text-center justify-center text-white capitalize">{data.weather[0].description}</p>
            </div>
        </div>

    );
}
