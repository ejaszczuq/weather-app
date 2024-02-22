import React, { useEffect, useState } from 'react';
import { WeatherService } from '../../services/weatherApi/weatherService';

import './WeatherCard.scss';

interface IWeather {
   city?: string;
   latitude?: number;
   longitude?: number;
   variant: string;
}

interface IWeatherData {
   name: string;
   weather: { main: string; description: string }[];
   main: { temp: number };
   wind: { speed: number };
   visibility: number;
}

function WeatherCard({ city, latitude, longitude, variant }: IWeather) {
   const [weatherData, setWeatherData] = useState<IWeatherData | null>(null);

   useEffect(() => {
      async function fetchWeather() {
         try {
            let res;
            if (city) {
               res = await WeatherService.getWeatherByCity(city);
            } else if (latitude && longitude) {
               res = await WeatherService.getWeatherByCoords(latitude, longitude);
            }
            if (res) {
               setWeatherData(res.data);
            }
         } catch (error) {
            console.error(error);
         }
      }

      fetchWeather();
   }, [city, latitude, longitude]);

   let currentDate = new Date();

   let options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      hour: '2-digit',
      minute: '2-digit',
   };

   let formattedDate = currentDate.toLocaleString('en-US', options);

   return (
      <>
         {weatherData && (
            <div className={`wCardBox ${variant}`}>
               <p className="date">Now, {formattedDate}</p>
               <center>
                  <div className="line">
                     <h2 className="cityName">{weatherData.name}</h2>
                     <img src="images/sun.png" alt="weather-icon" height={50} width={45} />
                     <p className="temp">{Math.round(weatherData.main.temp)}°C</p>
                  </div>
               </center>
               <div className="weatherMainInfo">
                  <hr />
                  <p>{weatherData.weather[0].main} </p>
                  <hr />
               </div>
            </div>
         )}
      </>
   );
}

export default WeatherCard;
