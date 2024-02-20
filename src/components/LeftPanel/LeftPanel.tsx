import React from 'react';
import WeatherCard from '../WeatherCard/WeatherCard';

import './LeftPanel.scss';

interface ILeftPanelProps {
   city: string;
}

function LeftPanel({ city }: ILeftPanelProps) {
   return (
      <div className="container-leftPanel">
         <div className="line">
            <input type="text" />
            <p>🔍</p>
         </div>

         <div className="cardsBox">
            <WeatherCard city={city} variant="variant2" />
            <WeatherCard city={city} variant="variant2" />
            <WeatherCard city={city} variant="variant2" />
            {/* <WeatherCard city={city} variant="variant2"/> */}
            {/* <WeatherCard city={city} variant="variant2"/> */}
         </div>
      </div>
   );
}

export default LeftPanel;
