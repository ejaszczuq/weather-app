import { weatherApi } from './clinet.instance';

export const getWeather = async (city: string) => {
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
