import React, { useEffect, useState } from "react";
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet-defaulticon-compatibility';

const MapComponent = () => {
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    const getUserLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            const location = { lat: latitude, lng: longitude };

            localStorage.setItem('userLocation', JSON.stringify(location));
            setUserLocation(location);
          },
          (error) => {
            console.error('Error getting user location:', error);
          }
        );
      } else {
        console.error('Geolocation is not supported by your browser');
      }
    };

    const storedLocation = localStorage.getItem('userLocation');
    if (storedLocation) {
      setUserLocation(JSON.parse(storedLocation));
    } else {
      getUserLocation();
    }
  }, []);

  useEffect(() => {
    if (userLocation) {
      // Инициализация карты
      const map = L.map('map', {
        center: [userLocation.lat, userLocation.lng],
        zoom: 13,
        layers: [
          L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', ),
        ],
      });

      // Добавление маркера на карту
      L.marker([userLocation.lat, userLocation.lng]).addTo(map);
    }
  }, [userLocation]);

  return <div id="map" style={{ height: '910px', width: '100%' }}></div>;
};

export default MapComponent;