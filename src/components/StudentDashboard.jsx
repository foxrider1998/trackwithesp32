import { useEffect ,useState } from 'react';
import {firebase, databaseRef}  from '../firebase';

import MapBox from './MapComponent';
import PersonalDataComponent from './PersonalDataComponent';

import    "./sty.css";
import userSessions from "../sessions/user"

userSessions.loginAs ="siswa";
function StudentDashboard() {
  const user = firebase.auth().currentUser;

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
    <div className='container'>
       <div className='student-bg'> 
        <h1>Student Dashboard</h1>
        <MapBox /> {/* Komponen yang menampilkan peta */}

           <h1>User Info</h1>
                <ul>
                  {data.map((item) => (
                    <li key={item}>{item}</li>
                  ))}

                </ul>

        <PersonalDataComponent /> {/* Komponen yang menampilkan data pribadi siswa */}
      </div>
    </div>
  );
}

export default StudentDashboard;
