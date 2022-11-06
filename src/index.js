/* eslint-disable no-undef */
/* eslint-disable import/no-unresolved */
/* eslint-disable prettier/prettier */
import React from 'react';
// eslint-disable-next-line no-unused-vars
import ReactDOM from 'react-dom/client';
import { render } from 'react-dom';
import './styles/index.css';
import App from './components/App';
import forecast from "./data/forecast.json"


// render(<App location={forecast.location} />, document.getElementById('root'));
// eslint-disable-next-line no-console
console.log(forecast.forecasts)
render(
  <React.StrictMode>
    <App location={forecast.location} forecasts={forecast.forecasts}/>
  </React.StrictMode>,document.getElementById('root'));

