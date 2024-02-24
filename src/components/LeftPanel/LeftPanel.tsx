import React from 'react';
import WeatherCard from '../WeatherCard/WeatherCard';

import { useWeather } from '../../contexts/WeatherContext';

import './LeftPanel.scss';

interface ILeftPanelProps {
   city: string;
}

function LeftPanel({ city }: ILeftPanelProps) {

   const { cities } = useWeather();
   return (
      <div className="container-leftPanel">
         <div className="line">
            <input type="text" />
            <p>🔍</p>
         </div>

         <div className="cardsBox">
            {cities.map(city => (
               <WeatherCard key={city} city={city} variant="variant2" />
            ))}
         </div>
      </div>
   );
}

export default LeftPanel;
