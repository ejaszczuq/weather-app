import React, { useEffect, useState, ChangeEvent } from "react";

interface ICityList {
    cities: string[];
    onCitySelect: (city: string) => void; // Dodaj tę linię
}

const CityListComponent: React.FC<ICityList> = ({cities, onCitySelect}) => { // Dodaj onCitySelect do listy propsów
    const [selectedCity, setSelectedCity] = useState<string>('');

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSelectedCity(event.target.value);
        onCitySelect(cities[parseInt(event.target.value.split('-')[1])]); // Wywołaj onCitySelect z wybranym miastem
    }

    const listItems = cities.map((city, index) =>
        <li key={index}><input type="radio" name="cityListItem" value={`option-${index}`} checked={selectedCity === `option-${index}`} onChange={handleChange}/><span>{city}</span></li>
    );

    useEffect(() => {
       console.log(`Selected value: ${selectedCity}`);
    }, [selectedCity])

    return (
        <ul>{listItems}</ul>
    );
}

export default CityListComponent;
