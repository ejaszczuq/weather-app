import { useEffect, useState } from 'react';

import CityList from '../../components/CityList/CityList';
import LeftPanel from '../../components/LeftPanel/LeftPanel';
import WeatherContainer from '../../components/WeatherContainer/WeatherContainer';

import './Main.scss';
import { BrowserStorageManager } from '../../utils/BrowserStorageManager';

const CITY_STORAGE_KEY = 'CITY';

const MainPage = () => {
   const [selectedCity, setSelectedCity] = useState<string>('');

   const handleCitySelect = (city: string) => {
      setSelectedCity(city);
      // BrowserStorageManager.writeLocalStorage(CITY_STORAGE_KEY, city);
      window.localStorage.setItem(CITY_STORAGE_KEY, selectedCity);
   };

   useEffect(() => {
      const city = BrowserStorageManager.readLocalStorage<string>(CITY_STORAGE_KEY);
      // const city = window.localStorage.getItem(CITY_STORAGE_KEY) as string;
      console.log('useEffect ~ city:', city);
   }, [selectedCity]);

   return (
      <div className="panels">
         <center>
            <WeatherContainer city={selectedCity} />
         </center>
         <LeftPanel city={selectedCity} />
         <form>
            <CityList cities={['Poznań', 'Warszawa']} onCitySelect={handleCitySelect} />
         </form>
      </div>
   );
};

export default MainPage;
