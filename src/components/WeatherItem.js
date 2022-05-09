const WeatherItem = ({ temp, dt, weather }) => {
  const date = new Date(dt * 1000).toLocaleString("en-us", {
    day: "numeric",
    month: "long",
  });
  const prediction = weather[0].main;
  let itemClass = "clear";
  if (prediction === "Rain") {
    console.log("Rain");
    itemClass = "rain";
  }
  if (prediction === "Clouds") {
    console.log("Clouds");
    itemClass = "clouds";
  }
  return (
    <div className={`weather-daily-item ${itemClass}`}>
      <p className="weather-date">{date}</p>
      <h2>{parseInt(temp.day)}°</h2>
      <p className="weather-prediction">{prediction}</p>
    </div>
  );
};

export default WeatherItem;
