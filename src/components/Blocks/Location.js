import React, { useState, useRef, useEffect } from "react";
import "../../style/Location.scss";
import loc from "../../image/loccccc.svg";
import cross from "../../image/cross.svg";
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import axios from 'axios'; // Импортируем Axios
import MapComponent from './MapLocation';

const Location = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [currentCity, setCurrentCity] = useState("");
  const modalRef = useRef(null);

  const toggleModal = (e) => {
    e.stopPropagation();
    setModalVisible(!modalVisible);
  };

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setModalVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    const getUserLocation = async () => {
      console.log('Trying to get user location...');
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            console.log('Got user location:', position.coords);
            const { latitude, longitude } = position.coords;
            const location = { lat: latitude, lng: longitude };
            localStorage.setItem('userLocation', JSON.stringify(location));

            // Получаем город по координатам с использованием OpenCage Geocoding API
            try {
              const response = await axios.get(`https://api.opencagedata.com/geocode/v1/json?key=9fdeeb7368564f6c80399da16846be59&language=ru&pretty=1&q=${latitude}+${longitude}`);
              const city = response.data.results[0]?.components?.city || "Не удалось определить город";
              console.log('City:', city);
              setCurrentCity(city);
            } catch (error) {
              console.error('Error getting city from coordinates:', error);
            }
          },
          (error) => {
            console.error('Error getting user location:', error);
          }
        );
      } else {
        console.error('Geolocation is not supported by your browser');
      }
    };

    getUserLocation();

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []); 

  return (
    <div className="Location">
      <div className="Location__text" onClick={toggleModal}>
        <img src={loc} alt="Location" />
        <p>{currentCity}</p>
      </div>
      {modalVisible && (
        <div className="Location__modal" ref={modalRef}>
          <MapComponent />
          <img className="" src={cross} alt="Close" onClick={toggleModal} />
        </div>
      )}
    </div>
  );
};

export default Location;