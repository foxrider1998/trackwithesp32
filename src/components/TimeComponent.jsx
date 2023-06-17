import { useState, useEffect } from 'react';
import { database } from '../firebase.js';

function Time() {
  const [time, setTime] = useState('');

  
  useEffect(() => {
    const fetchTime = async () => {
      try {
        const snapshot = await database.ref('/bus/waktu').once('value');
        const waktu = snapshot.val();
        setTime(waktu);
      } catch (error) {
        console.error('Gagal mengambil waktu:', error);
      }
    };
    fetchTime();
  }, []);

  return (
    <div>
      <h2>Time</h2>
      <p>{time}</p>
    </div>
  );
}

export default Time;
