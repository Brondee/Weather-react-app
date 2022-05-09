import { useState, useEffect } from "react";
import { useGlobalContext } from "../context";

// write here your api key, which you can get there https://openweathermap.org/api
const apiKey = "";

const Search = () => {
  const { setWeatherInfo, setWeatherDaily, setLoading, setModal } =
    useGlobalContext();

  const [query, setQuery] = useState("krasnodar");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeatherData();
  };

  const fetchWeatherData = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=1&appid=${apiKey}`
      );
      const data = await response.json();
      if (data[0]) {
        const { lat, lon } = data[0];
        const weatherResponse = await fetch(
          `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&units=metric&appid=${apiKey}`
        );
        const weatherData = await weatherResponse.json();
        if (weatherData) {
          const { dt, temp, pressure, visibility, humidity, wind_speed } =
            weatherData.current;
          setWeatherInfo({
            date: dt * 1000,
            temperature: parseInt(temp),
            city: query,
            pressure,
            visibility: String(visibility).substring(0, 2),
            humidity,
            wind: wind_speed,
          });
          setWeatherDaily(weatherData.daily);
          setError(false);
        } else {
          setModal({ show: true, text: "Can't find a city" });
          setError(true);
          console.log("cant get weather info");
        }
      } else {
        setModal({ show: true, text: "Can't find a city" });
        setError(true);
        console.log("cant get lat lon");
      }
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchWeatherData();
  }, []);

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter you city"
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        className={error ? "error-input form-input" : "form-input"}
      />
      <button className="btn-submit" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Search;
