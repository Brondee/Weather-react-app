import React from "react";

import Search from "./components/Search";
import Loading from "./components/Loading";
import Modal from "./components/Modal";
import WeatherItem from "./components/WeatherItem";
import { useGlobalContext } from "./context";

import logo from "./logo.svg";

function App() {
  const { weatherInfo, weatherDaily, loading } = useGlobalContext();
  const date = new Date(weatherInfo.date).toLocaleString("en-us", {
    day: "numeric",
    month: "long",
  });

  return (
    <main>
      <section className="weather-now-container">
        <Modal />
        <div className="short-info">
          <h2>{date}</h2>
          <h1>
            {weatherInfo.temperature ? weatherInfo.temperature + "°" : null}
          </h1>
          <h2>{weatherInfo.city}</h2>
        </div>
        <div className="general-container">
          <div className="logo-container">
            <img src={logo} alt="logo" />
            <p className="logo-text">Meteo</p>
          </div>
          <Search />
          {loading ? (
            <Loading />
          ) : (
            <div className="general-info">
              <div className="info-block pressure">
                <p className="info-title">Pressure</p>
                <p className="info-value">{weatherInfo.pressure}</p>
              </div>
              <div className="info-block humidity">
                <p className="info-title">Humidity</p>
                <p className="info-value">
                  {weatherInfo.humidity ? weatherInfo.humidity + "%" : null}
                </p>
              </div>
              <div className="info-block wind">
                <p className="info-title">Wind</p>
                <p className="info-value">
                  {weatherInfo.wind ? weatherInfo.wind + "m/s" : null}
                </p>
              </div>
              <div className="info-block visibility">
                <p className="info-title">Visibility</p>
                <p className="info-value">
                  {weatherInfo.visibility
                    ? weatherInfo.visibility + "km"
                    : null}
                </p>
              </div>
            </div>
          )}
        </div>
      </section>
      <section className="weather-daily-container">
        <h1>Daily</h1>
        <div className="forecast-daily-wrapper">
          {weatherDaily.map((item, index) => {
            return <WeatherItem {...item} key={index} />;
          })}
        </div>
      </section>
    </main>
  );
}

export default App;
