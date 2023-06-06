import MapComponent from './MapComponent';
import TimeComponent from './TimeComponent';

function ParentDashboard() {
  return (
    <div>
      <h1>Parent Dashboard</h1>
      <MapComponent /> {/* Komponen yang menampilkan peta */}
      <TimeComponent /> {/* Komponen yang menampilkan informasi waktu */}
    </div>
  );
}

export default ParentDashboard;
