import { useState, useEffect } from 'react';
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';
import { database } from '../firebase';

const containerStyle = {
  width: '400px',
  height: '400px',
};

const center = {
  lat: 0,
  lng: 0,
};

function Map() {
  const [coordinates, setCoordinates] = useState(center);


  useEffect(() => {
    const fetchCoordinates = async () => {
      try {
        const snapshot = await database.ref('/bus').once('value');
        const busData = snapshot.val();
        const lat = busData.lat;
        const lng = busData.long;
        setCoordinates({ lat, lng });
      } catch (error) {
        console.error('Gagal mengambil koordinat:', error);
      }
    };
    fetchCoordinates();
  }, []);

  return (
    <LoadScript googleMapsApiKey={YOUR_GOOGLE_MAPS_API_KEY}>
      <GoogleMap mapContainerStyle={containerStyle} center={coordinates} zoom={10}>
        <Marker position={coordinates} />
      </GoogleMap>
    </LoadScript>
  );
}

export default Map;
