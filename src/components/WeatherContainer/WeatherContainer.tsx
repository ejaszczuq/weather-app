import React from 'react';
import WeatherCard from '../WeatherCard/WeatherCard';

import './WeatherContainer.scss';

function WeatherContainer({ city }: { city: string }) {
   return (
      <div className="container">
         <div className="line">
            <img
               width="32"
               height="32"
               src="https://img.icons8.com/cotton/64/circled-chevron-right--v2.png"
               alt="circled-chevron-right--v2"
               className="arrow-right"
            />
            <img
               width="32"
               height="32"
               src="https://img.icons8.com/cotton/64/circled-chevron-left--v2.png"
               alt="circled-chevron-left--v2"
               className="arrow-left"
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
         <WeatherCard city={city} variant="variant1" />
      </div>
   );
}

export default WeatherContainer;
