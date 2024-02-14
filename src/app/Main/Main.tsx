import { useEffect, useState } from "react";
import CityListComponent from "../../components/cityListComponent";
import WeatherComponent from "../../components/weatherComponent";
import "./Main.scss";

const MainPage = () => {
  const [selectedCity, setSelectedCity] = useState<string>(''); // Dodaj stan dla wybranego miasta

  const handleCitySelect = (city: string) => { // Dodaj tę funkcję
    setSelectedCity(city);
  }

  return(
    <>
      <WeatherComponent city={selectedCity}/> {/* Przekaż wybrane miasto do WeatherComponent */}
      <form>
        <CityListComponent cities={['Poznań', 'Warszawa']} onCitySelect={handleCitySelect} /> {/* Przekaż funkcję handleCitySelect do CityListComponent */}
      </form>
    </>
  )
};

export default MainPage;
