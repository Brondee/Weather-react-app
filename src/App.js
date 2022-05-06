import React, { useState } from "react";

import Search from "./Search";
import Loading from "./Loading";
import Modal from "./Modal";

import logo from "./logo.svg";

function App() {
  const [loading, setLoading] = useState(false);
  const [weatherInfo, setWeatherInfo] = useState({
    temperature: "",
    city: "",
    pressure: "",
    humidity: "",
    wind: "",
    visibility: "",
  });
  const [modal, setModal] = useState({ show: false, text: "" });

  const closeModal = () => {
    setModal(false);
  };

  return (
    <main>
      <Modal closeModal={closeModal} setModal={setModal} {...modal} />
      <div className="short-info">
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
        <Search
          setWeatherInfo={setWeatherInfo}
          setLoading={setLoading}
          setModal={setModal}
        />
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
                {weatherInfo.visibility ? weatherInfo.visibility + "km" : null}
              </p>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

export default App;
