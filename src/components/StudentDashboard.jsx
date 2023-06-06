import MapComponent from './MapComponent';
import PersonalDataComponent from './PersonalDataComponent';

function StudentDashboard() {
  return (
    <div>
      <h1>Student Dashboard</h1>
      <MapComponent /> {/* Komponen yang menampilkan peta */}
      <PersonalDataComponent /> {/* Komponen yang menampilkan data pribadi siswa */}
    </div>
  );
}

export default StudentDashboard;
