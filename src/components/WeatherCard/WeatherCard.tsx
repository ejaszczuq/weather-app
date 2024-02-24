import React, { useEffect, useState } from 'react';

import { getWeatherByCity, getWeatherByCoords } from '../../services/weatherApi/methods';

import './WeatherCard.scss';
import { AxiosResponse } from 'axios';

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
      const fetchWeather = async () => {
         try {
            let res: AxiosResponse<any>;

            if (city) {
               res = await getWeatherByCity(city);
            } else if (latitude && longitude) {
               res = await getWeatherByCoords(latitude, longitude);
            } else {
               console.log('No city or coordinates provided.');
               return;
            }

            if (res && res.status === 200) {
               setWeatherData(res.data);
            }
         } catch (e) {
            console.error(e);
         }
      };

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
