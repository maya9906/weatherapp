import React, { useState, useEffect } from "react";
import "./WeatherApp.css";
// import CardComponent from "./CardComponent.jsx";
import CardDetailComponent from "./CardDetailComponent.jsx";
import MainCard from "./MainCard.jsx";

import search_icon from "../imgs/search.png";
import clear_icon from "../imgs/clear.png";
import cloud_icon from "../imgs/cloud.png";
import drizzle_icon from "../imgs/drizzle.png";
import rain_icon from "../imgs/rain.png";
import snow_icon from "../imgs/snow.png";
import Header from "../components/Header";
import Footer from "../components/Footer";

// import wind_icon from "../imgs/wind.jpg";
// import humidity_icon from "../imgs/humidity.jpg";


const WeatherApp = () => {

    let api_key = "7a73f546e23472cce6023cba32b7b261";

    const [data, setData] = useState(null);
    const [wicon, setWicon] = useState(cloud_icon);

    const search = async () => {
        const element = document.getElementsByClassName("cityInput");

        if (element[0].value === "") {
            return;
        }

        let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;

        let response = await fetch(url);
        let newData = await response.json();
        setData(newData);

        if (newData.weather[0].icon === "01d" || newData.weather[0].icon === "01n") {
            setWicon(clear_icon);
        } else if (newData.weather[0].icon === "02d" || newData.weather[0].icon === "02n") {
            setWicon(cloud_icon);
        } else if (newData.weather[0].icon === "03d" || newData.weather[0].icon === "03n") {
            setWicon(drizzle_icon);
        } else if (newData.weather[0].icon === "04d" || newData.weather[0].icon === "04n") {
            setWicon(drizzle_icon);
        } else if (newData.weather[0].icon === "09d" || newData.weather[0].icon === "09n") {
            setWicon(rain_icon);
        } else if (newData.weather[0].icon === "010d" || newData.weather[0].icon === "010n") {
            setWicon(rain_icon);
        } else if (newData.weather[0].icon === "013d" || newData.weather[0].icon === "013n") {
            setWicon(snow_icon);
        } else {
            setWicon(clear_icon);
        }
    };



    return (
        <div>
            
            <div className="main-container">

                <div className="container">

                    <div className="searchBar">
                        <input type="text" className="cityInput search-inside" placeholder="Search" />
                        <button className="search-button" onClick={search}>
                            <img className="search-icon" src={search_icon} alt="Search" />
                        </button>
                    </div>

                    <div className="card-container">
                        {data && (
                            <>
                                <MainCard data={data} className="main-card" />
                                <CardDetailComponent data={data} className="second-card" />
                            </>
                        )}
                    </div>

                </div>

            </div>
           
        </div>
    );
};


export default WeatherApp;

