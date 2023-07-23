import MapComponent from './MapComponent';
import TimeComponent from './TimeComponent';

import userSessions from "../sessions/user"

import    "./sty.css";
userSessions.loginAs = "parent"

function ParentDashboard() {
  return (
    <div className='container'>
      <div className='parents-bg'>
        <h1>Parent Dashboard</h1>
        <MapComponent /> {/* Komponen yang menampilkan peta */}
        <TimeComponent /> {/* Komponen yang menampilkan informasi waktu */}
      </div>
    </div>
  );
}

export default ParentDashboard;
