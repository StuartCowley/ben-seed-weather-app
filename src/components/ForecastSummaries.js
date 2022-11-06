/* eslint-disable no-undef */
/* eslint-disable react/require-default-props */
/* eslint-disable react/function-component-definition */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
import React from "react";
import PropTypes  from "prop-types";
import ForecastSummary from "./ForecastSummary";
import "../styles/ForecastSummaries.css";

const ForecastSummaries = ({ forecasts }) => (
    <div className="forecast-summaries">
      {forecasts.map(forecast => (
        <ForecastSummary
          key={forecast.date}
          date={forecast.date}
          description={forecast.description}
          icon={forecast.icon}
          temperature={forecast.temperature}
        />
      ))}
    </div>
  );

export default ForecastSummaries;

ForecastSummaries.propTypes = {
    forecasts: PropTypes.arrayOf(PropTypes.shape({
    date: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    temperature: PropTypes.shape({
        max: PropTypes.number,
        min: PropTypes.number,
    }).isRequired,
  }))
};