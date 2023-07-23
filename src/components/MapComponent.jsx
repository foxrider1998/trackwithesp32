import React, { useState, useEffect } from 'react';
import {firebase, database } from '../firebase';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import userSessions from "../sessions/user"
function MapBox() {
  const user = firebase.auth().currentUser;


 

  // Listen for changes to the database
  // db.on("siswa", (snapshot) => {
  
  //   // Check if the data that you are looking for exists
  //   if (snapshot.child(user).exists()) {
  //     loginAs="siswa";
  //     // Do something with the data
  //   }
  // });
  // userSessionsloginAs="siswa";

  const [lng, setLng] = useState(null);
  const [lat, setLat] = useState(null);
  const [loading, setLoading] = useState(true);

console.log(userSessions.loginAs);

  useEffect(() => {
    const fetchCoordinates = async () => {
      try {

        if (userSessions.loginAs==="siswa") {
          
       

        const snapshot = await database.ref('/bus').once('value');
        const busData = snapshot.val();
        setLat(busData.lat);
        setLng(busData.long);
        setLoading(false);
        console.log(busData);

        } else  if (userSessions.loginAs==="parent") {
          
       

          const snapshot = await database.ref('/siswa/58e163eac910').once('value');
          const busData = snapshot.val();
          setLat(busData.lat);
          setLng(busData.long);
          setLoading(false);
          console.log(busData);
          }


      } catch (error) {
        console.error('Gagal mengambil koordinat:', error);
      }
    };
    fetchCoordinates();
     // Update coordinates every 5 seconds
     const intervalId = setInterval(fetchCoordinates, 5000);

     // Cleanup the interval on component unmount
     return () => clearInterval(intervalId);
  }, []);

console.log(userSessions.loginAs);

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
      <MapContainer center={markerPosition} zoom={16} style={{ width: '100%', height: '100%' }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={markerPosition} draggable={true} />
      </MapContainer>
    </div>
  );
}

export default MapBox;
