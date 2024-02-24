import { useState, useEffect } from 'react';

export default function useGeolocation() {
   const [userLocation, setUserLocation] = useState<{
      latitude: number;
      longitude: number;
   } | null>(null);
   // const [error, setError] = useState<string | null>(null);

   useEffect(() => {
      const getUserLocation = () => {
         if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
               (position) => {
                  const { latitude, longitude } = position.coords;
                  setUserLocation({ latitude, longitude });
               },
               (error) => {
                  console.error('Error get user location: ', error);
                  // setError('Unable to retrieve your location');
               }
            );
         } else {
            console.log('Geolocation is not supported by this browser');
            // setError('Geolocation is not supported by your browser.');
         }
      };

      getUserLocation();
   }, []);

   return userLocation;
}
