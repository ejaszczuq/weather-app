import React, { useEffect, useState, ChangeEvent } from 'react';

import './CityList.scss';

interface ICityList {
   cities: string[];
   onCitySelect: (city: string) => void;
}

const CityListComponent: React.FC<ICityList> = ({ cities, onCitySelect }) => {
   const [selectedCity, setSelectedCity] = useState<string>('');

   const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      setSelectedCity(event.target.value);
      onCitySelect(cities[parseInt(event.target.value.split('-')[1])]);
   };

   // const listItems = useEffect(() => {
   //    console.log(`Selected value: ${selectedCity}`);
   // }, [selectedCity]);

   return (
      <ul>
         {cities.map((city, index) => (
            <li key={index}>
               <input
                  type="radio"
                  name="cityListItem"
                  value={`option-${index}`}
                  checked={selectedCity === `option-${index}`}
                  onChange={handleChange}
               />
               <span>{city}</span>
            </li>
         ))}
      </ul>
   );
};

export default CityListComponent;
