import React, { useState, useEffect } from 'react';
import { database } from '../firebase';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

function MapBox() {
  const [lng, setLng] = useState(null);
  const [lat, setLat] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCoordinates = async () => {
      try {
        const snapshot = await database.ref('/bus').once('value');
        const busData = snapshot.val();
        setLat(busData.lat);
        setLng(busData.long);
        setLoading(false);
      } catch (error) {
        console.error('Gagal mengambil koordinat:', error);
      }
    };
    fetchCoordinates();
  }, []);

  if (loading) {
    return <div style={{ width: '300px', height: '300px' }}>Loading...</div>;
  }

  const centerLat = -6.5088664; // Ganti dengan koordinat lintang Sadang yang tepat
  const centerLng = 107.4604586; // Ganti dengan koordinat bujur Sadang yang tepat

  const markerPosition = [lat !== null ? lat : centerLat, lng !== null ? lng : centerLng];


  console.log(lat);
  console.log(lng);
  return (
    <div style={{ width: '300px', height: '300px' }}>
      <MapContainer center={markerPosition} zoom={13} style={{ width: '100%', height: '100%' }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={markerPosition} draggable={true} />
      </MapContainer>
    </div>
  );
}

export default MapBox;
