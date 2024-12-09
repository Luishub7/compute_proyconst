/* import React from 'react'; */
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ProyectosPage from './pages/ProyectosPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/proyectos" element={<ProyectosPage />} />
      </Routes>
    </Router>
  );
}

export default App;
