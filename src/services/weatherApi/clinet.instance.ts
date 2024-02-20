import { ApiClient } from './client';

const BASE_URL = 'https://api.openweathermap.org/data/2.5';
const API_KEY = '2847ced1fec450f37f4a9809151d12b0'; //weather-app-key

export const weatherApi = new ApiClient({ baseUrl: BASE_URL, apiKey: API_KEY });
