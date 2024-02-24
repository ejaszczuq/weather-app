import { useEffect, useState } from 'react';

import { BrowserStorageManager } from '../../utils/BrowserStorageManager';

import LeftPanel from '../../components/LeftPanel/LeftPanel';
import WeatherContainer from '../../components/WeatherContainer/WeatherContainer';

import './Main.scss';

const CITY_STORAGE_KEY = 'CITY';

const MainPage = () => {

   const [selectedCity, setSelectedCity] = useState<string>('');

   useEffect(() => {
      const city = BrowserStorageManager.readLocalStorage<string>(CITY_STORAGE_KEY);
      if (city) setSelectedCity(city);
   }, [selectedCity]);

   return (
      <div className="panels">
         <center>
            <WeatherContainer />
         </center>
         <LeftPanel city={selectedCity} />
      </div>
   );
};

export default MainPage;
