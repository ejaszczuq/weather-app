import React, { useEffect, useState } from 'react';
import { WeatherService } from '../service/weatherService';

interface IWeather {
    city: string;
}

interface IWeatherData {
    name: string,
    weather: {main: string, description: string }[],
    main: {temp: number},
    wind: {speed: number},
    visibility: number;
}

function WeatherComponent ({city}: IWeather) {
    const [weatherData, setWeatherData] = useState<IWeatherData | null>(null);

    useEffect(() => {
        async function fetchWeather() {
            try {
                const data = await WeatherService.getWeather(city);
                setWeatherData(data);
            } catch (error) {
                console.error(error);
            }
        }

        fetchWeather();
    }, [city]);

    return (
        <div>
            {weatherData && (
                <div>
                    <h2>{weatherData.name}</h2>
                    <p>{weatherData.weather[0].main}
                    &nbsp;({weatherData.weather[0].description})</p> 
                    <p>{Math.round(weatherData.main.temp)}°C</p>
                </div>
            )}
        </div>
    );
}

export default WeatherComponent;
