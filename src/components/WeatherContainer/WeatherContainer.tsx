import React, { useEffect, useState } from 'react';
import { WeatherService } from '../../services/weatherApi/weatherService';

import './WeatherContainer.scss';

interface IWeatherContainer {
   city: string;
}

function WeatherContainer({ city }: IWeatherContainer) {
   const [weatherData, setWeatherData] = useState<any | null>(null);

   useEffect(() => {
      async function fetchWeather() {
         try {
            let res;
            if (city) {
               res = await WeatherService.getWeatherByCity(city);
            } else {
               const coords = city.split(',');
               res = await WeatherService.getWeatherByCoords(parseFloat(coords[0]), parseFloat(coords[1]));
            }
            if (res) {
               setWeatherData(res.data);
            }
         } catch (error) {
            console.error(error);
         }
      }

      fetchWeather();
   }, [city]);

   return (
      <div className="container-weatherContainer">
         {weatherData && (
            <div className="line">
               <h2 className="cityName">{weatherData.name}</h2>
               <img src="images/sun.png" alt="weather-icon" height={50} width={45} />
               <p className="temp">{Math.round(weatherData.main.temp)}°C</p>
            </div>
         )}
      </div>
   );
}

export default WeatherContainer;
