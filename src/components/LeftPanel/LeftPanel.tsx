import React, { useEffect, useState } from 'react';
import WeatherCard from '../WeatherCard/WeatherCard';

import './LeftPanel.scss';
import { WeatherService } from '../../services/weatherApi/weatherService';

interface ILeftPanelProps {
   city: string;
}

function LeftPanel({ city }: ILeftPanelProps) {
   const [latitude, setLatitude] = useState<number | null>(null);
   const [longitude, setLongitude] = useState<number | null>(null);

   useEffect(() => {
      if (navigator.geolocation) {
         navigator.geolocation.getCurrentPosition(handleSuccess);
      }
   }, []);

   const handleSuccess = ({
      coords: {
         latitude,
         longitude
      }
   }: {coords: {latitude: number; longitude: number}}) => {
      setLatitude(latitude);
      setLongitude(longitude);
   }

   useEffect(() => {
      if (latitude && longitude) {
         WeatherService.getWeatherByCoords(latitude, longitude)
            .then(data => console.log(data))
            .catch(error => console.error(error));
      }
   }, [latitude, longitude]);

   return (
      <div className="container-leftPanel">
         <div className="line">
            <input type="text" />
            <p>🔍</p>
         </div>

         <div className="cardsBox">
            {latitude && longitude && <WeatherCard latitude={latitude} longitude={longitude} variant="variant2"/>}
            <WeatherCard city={city} variant="variant2" />
            <WeatherCard city={city} variant="variant2" />
            <WeatherCard city={city} variant="variant2" />
         </div>
      </div>
   );
}

export default LeftPanel;
