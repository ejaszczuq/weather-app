import axios from 'axios';

const API_KEY = '2847ced1fec450f37f4a9809151d12b0'; //weather-app-key
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export class WeatherService {
   static async getWeather(city: string) {
      try {
         const response = await axios.get(`${BASE_URL}/weather`, {
            params: {
               q: city,
               appid: API_KEY,
               units: 'metric',
            },
         });
         return response.data;
      } catch (error) {
         console.error(error);
         throw error;
      }
   }
}
