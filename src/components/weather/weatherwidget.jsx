import React, { useState, useEffect } from 'react';
import './style.css';
import axios from 'axios'; 
import { ReactComponent as MoonSvg } from '../../assets/moon-solid.svg';
import { ReactComponent as CloudSvg } from '../../assets/cloud-solid.svg';

const WeatherWidget = ({ location }) => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    if (location.length) {
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=d5f91f22b88cf1bd6ac75387df7794db&units=metric`)
        .then(response => {
          setWeatherData(response.data);
        })
        .catch(error => {
          console.error("Error fetching weather data:", error);
        });
    }
  }, [location]); // Run the effect when 'location' changes

  if (!weatherData) return <div>Loading...</div>;

  const currentTimeUTC = new Date().getTime() / 1000;
  const localTime = currentTimeUTC + weatherData.timezone;
  const isDayTime = localTime > weatherData.sys.sunrise && localTime < weatherData.sys.sunset; // Correct condition
  const cloudSize = weatherData.clouds.all;

  return (
    <div className='body'>
      <div
      style={{
        border: '2px solid black',
        padding: '20px',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '250px',
        borderRadius: '35px',
        background: 'linear-gradient(to bottom, #0e1626, #2a454b)',
        color: '#fff',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.5)',
      }}
      name="weather-widget"
    >
      <MoonSvg className="moon" />
      <div className="cloud-container">
        {cloudSize > 50 && <CloudSvg className="cloud" />}
      </div>
      <div className="temperature">{Math.round(weatherData.main.temp)}°</div>
      <div className="weather">{weatherData.weather[0].description}</div> {/* Display actual weather description */}
      <div className="low-high">Low: {Math.round(weatherData.main.temp_min)}° High: {Math.round(weatherData.main.temp_max)}°</div> {/* Display low and high temperatures */}
      <div className="feels-like">Feels like: {Math.round(weatherData.main.feels_like)}°</div> {/* Display feels-like temperature */}
      <div className="location">{location}</div>
      <div className="humidity">Humidity: {weatherData.main.humidity}%</div> {/* Display humidity */}</div>
      <div
      style={{
        border: '2px solid black',
        padding: '20px',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '250px',
        borderRadius: '35px',
        background: 'linear-gradient(to bottom, #0e1626, #2a454b)',
        color: '#fff',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.5)',
      }}
      name="weather-widget"
    >
      <MoonSvg className="moon" />
      <div className="cloud-container">
        {cloudSize > 50 && <CloudSvg className="cloud" />}
      </div>
      <div className="temperature">{Math.round(weatherData.main.temp)}°</div>
      <div className="weather">{weatherData.weather[0].description}</div> {/* Display actual weather description */}
      <div className="low-high">Low: {Math.round(weatherData.main.temp_min)}° High: {Math.round(weatherData.main.temp_max)}°</div> {/* Display low and high temperatures */}
      <div className="feels-like">Feels like: {Math.round(weatherData.main.feels_like)}°</div> {/* Display feels-like temperature */}
      <div className="location">{location}</div>
      <div className="humidity">Humidity: {weatherData.main.humidity}%</div> {/* Display humidity */}
    </div>
    <div>
    <div
      style={{
        border: '2px solid black',
        padding: '20px',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '250px',
        borderRadius: '35px',
        background: 'linear-gradient(to bottom, #0e1626, #2a454b)',
        color: '#fff',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.5)',
      }}
      name="weather-widget"
    >
      <MoonSvg className="moon" />
      <div className="cloud-container">
        {cloudSize > 50 && <CloudSvg className="cloud" />}
      </div>
      <div className="temperature">{Math.round(weatherData.main.temp)}°</div>
      <div className="weather">{weatherData.weather[0].description}</div> {/* Display actual weather description */}
      <div className="low-high">Low: {Math.round(weatherData.main.temp_min)}° High: {Math.round(weatherData.main.temp_max)}°</div> {/* Display low and high temperatures */}
      <div className="feels-like">Feels like: {Math.round(weatherData.main.feels_like)}°</div> {/* Display feels-like temperature */}
      <div className="location">{location}</div>
      <div className="humidity">Humidity: {weatherData.main.humidity}%</div> {/* Display humidity */}
    </div>
    </div>
    </div>
 
    

    
  );
};

export default WeatherWidget;
