import React, { useState } from 'react';
import WeatherCard from '../WeatherCard/WeatherCard';

import { useWeather } from '../../contexts/WeatherContext';

import './WeatherContainer.scss';

function WeatherContainer() {
   const { cities } = useWeather(); 
   const [currentCityIndex, setCurrentCityIndex] = useState(0); 
   const handleNextCity = () => {
      setCurrentCityIndex((prevIndex: number) => (prevIndex + 1) % cities.length);
   };

   const handlePrevCity = () => {
      setCurrentCityIndex((prevIndex: number) => (prevIndex - 1 + cities.length) % cities.length);
   };

   return (
      <div className="container">
         <div className="line">
            <img
               width="32"
               height="32"
               src="https://img.icons8.com/cotton/64/circled-chevron-right--v2.png"
               alt="circled-chevron-right--v2"
               className="arrow-right"
               onClick={handleNextCity} 
            />
            <img
               width="32"
               height="32"
               src="https://img.icons8.com/cotton/64/circled-chevron-left--v2.png"
               alt="circled-chevron-left--v2"
               className="arrow-left"
               onClick={handlePrevCity} 
            />

            <div className="date">
               <label htmlFor="date">Date</label>
               <center>
                  <input
                     type="text"
                     placeholder=""
                     onFocus={(event) => (event.currentTarget.type = 'date')}
                     onBlur={(event) => (event.currentTarget.type = 'text')}
                  />
               </center>
            </div>
         </div>
         <WeatherCard city={cities[currentCityIndex]} variant="variant1" /> {/* Wyświetl tylko jedno miasto na raz */}
      </div>
   );
}

export default WeatherContainer;
