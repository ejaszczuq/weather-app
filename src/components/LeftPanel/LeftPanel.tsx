import React from 'react';
import WeatherCard from '../WeatherCard/WeatherCard';
import useGeolocation from '../../hooks/useGeolocation';

import './LeftPanel.scss';

interface ILeftPanelProps {
   city: string;
}

function LeftPanel({ city }: ILeftPanelProps) {
   const userLocation = useGeolocation();

   return (
      <div className="container-leftPanel">
         <div className="line">
            <input type="text" />
            <p>🔍</p>
         </div>

         <div className="cardsBox">
            {userLocation && (
               <WeatherCard latitude={userLocation.latitude} longitude={userLocation.longitude} variant="variant2" />
            )}
            <WeatherCard city={city} variant="variant2" />
            <WeatherCard city={city} variant="variant2" />
            <WeatherCard city={city} variant="variant2" />
         </div>
      </div>
   );
}

export default LeftPanel;
