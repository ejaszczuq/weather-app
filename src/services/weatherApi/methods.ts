import { weatherApi } from './clinet.instance';

export const getWeatherByCity = async (city: string) => {
   const url = '/weather';
   const method = 'GET';
   const params = {
      q: city,
   };

   return await weatherApi.sendRequest<any>({
      url,
      method,
      params,
   });
};

export const getWeatherByCoords = async (lat: number, lon: number) => {
   const url = '/weather';
   const method = 'GET';
   const params = {
      lat,
      lon,
   };

   return await weatherApi.sendRequest<any>({
      url,
      method,
      params,
   });
};
