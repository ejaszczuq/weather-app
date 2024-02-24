import React, { useState, useEffect } from 'react';
import useGeolocation from '../hooks/useGeolocation';
import { getWeatherByCoords } from '../services/weatherApi/methods';

interface IContext {
   children: React.ReactNode;
}

interface IGeolocationCoordinates {
   latitude: number;
   longitude: number;
}

interface ContextValue {
   cities: string[];
   handleSetCities: (newCities: string[]) => void;
   userLocation: IGeolocationCoordinates | null; 
}

const WeatherContext = React.createContext<ContextValue | undefined>(undefined);

export const WeatherProvider = ({ children }: IContext) => {
   const userLocation = useGeolocation();
   const [cities, setCities] = useState(['Poznan', 'Warszawa']);

   useEffect(() => {
      if (userLocation) {
         getWeatherByCoords(userLocation.latitude, userLocation.longitude)
            .then(weatherData => {
               const currentCity = weatherData.data.name;
               setCities(prevCities => [currentCity, ...prevCities]);
            })
            .catch(error => {
               console.error(error);
            });
      }
   }, [userLocation]);

   const handleSetCities = (newCities: string[]) => setCities(newCities);

   const contextValue: ContextValue = {
      cities,
      handleSetCities,
      userLocation,
   };

   return <WeatherContext.Provider value={contextValue}>{children}</WeatherContext.Provider>;
};

export const useWeather = (): ContextValue => {
   const context = React.useContext(WeatherContext);

   if (context === undefined) {
      throw new Error('useWeather must be used within an WeatherProvider');
   }

   return context;
};
