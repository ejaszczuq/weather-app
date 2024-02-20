import React, { useEffect, useState } from 'react';
import { WeatherService } from '../../services/weatherApi/weatherService';

import './WeatherCard.scss';
import { getWeather } from '../../services/weatherApi/methods';

interface IWeather {
   city: string;
   variant: string;
}
interface IWeatherData {
   name: string;
   weather: { main: string; description: string }[];
   main: { temp: number };
   wind: { speed: number };
   visibility: number;
}

function WeatherCard({ city, variant }: IWeather) {
   const [weatherData, setWeatherData] = useState<IWeatherData | null>(null);

   useEffect(() => {
      async function fetchWeather() {
         try {
            // const data = await WeatherService.getWeather(city);
            const res = await getWeather(city);
            setWeatherData(res.data);
            console.log('fetchWeather ~ data:', res.data);
         } catch (error) {
            console.error(error);
         }
      }

      fetchWeather();
   }, [city]);

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
