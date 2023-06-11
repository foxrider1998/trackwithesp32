import { useEffect ,useState } from 'react';
import {firebase, databaseRef}  from '../firebase';

import MapComponent from './MapComponent';
import PersonalDataComponent from './PersonalDataComponent';

function StudentDashboard() {

  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from Firebase Realtime Database
    const fetchData = async () => {
      databaseRef.on('value', (snapshot) => {
        const firebaseData = snapshot.val();
        const dataArray = Object.values(firebaseData);
        setData(dataArray);
      });
    };

    fetchData();
  }, []);


  return (
    <div>
      <h1>Student Dashboard</h1>
      <MapComponent /> {/* Komponen yang menampilkan peta */}

 <h1>User Info</h1>
      <ul>
        {data.map((item) => (
          <li key={item}>{item}</li>
        ))}
         
      </ul>

      <PersonalDataComponent /> {/* Komponen yang menampilkan data pribadi siswa */}
    </div>
  );
}

export default StudentDashboard;
