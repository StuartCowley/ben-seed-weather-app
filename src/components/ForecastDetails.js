import React from "react";
import PropTypes from "prop-types";
import "../styles/ForecastDetails.css";

function ForecastDetails({ forecast }) {
  const { date, temperature, humidity, wind } = forecast;

  const formattedDate = new Date(date).toDateString();

  return (
    <div className="forecast-details" data-testid="forecast-details">
      <div className="forecast-details__date">{formattedDate}</div>
      <div className="forecast-details__maxTemperature">
        Max Temperature: {temperature.max}
        &deg;C
      </div>
      <div className="forecast-details__minTemperature">
        Min Temperature: {temperature.min}
        &deg;C
      </div>
      <div className="forecast-details__humidity">Humidity: {humidity} %</div>
      <div className="forecast-details__windSpeed">
        Wind Speed: {wind.speed} mph
      </div>
      <div className="forecast-details__windDirection">
        Wind Direction: {wind.direction}
      </div>
    </div>
  );
}

export default ForecastDetails;

ForecastDetails.propTypes = {
  forecast: PropTypes.shape({
    date: PropTypes.number.isRequired,
    humidity: PropTypes.number.isRequired,
    temperature: PropTypes.shape({
      max: PropTypes.number,
      min: PropTypes.number,
    }).isRequired,
    wind: PropTypes.shape({
      speed: PropTypes.number,
      direction: PropTypes.string,
    }).isRequired,
  }).isRequired,
};
