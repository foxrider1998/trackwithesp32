import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import ParentDashboard from './components/ParentDashboard';
import AdminDashboard from './components/AdminDashboard';
import StudentDashboard from './components/StudentDashboard';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/parent" component={ParentDashboard} />
        <Route path="/admin" component={AdminDashboard} />
        <Route path="/student" component={StudentDashboard} />
      </Switch>
    </Router>
  );
}

export default App;

