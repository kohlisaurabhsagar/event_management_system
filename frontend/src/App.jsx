import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AuthPage from './pages/UserAuth';
import Dashboard from './pages/UserDashboard';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/home" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;

