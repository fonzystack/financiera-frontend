// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom'; // 1. Importa Routes y Route
import Header from './components/Header';
// Importa tus componentes de la página de inicio
import Hero from './components/Hero';
import Servicios from './components/Servicios';
import Contacto from './components/Contacto';
import LoginPage from './pages/LoginPages';
import HomePage from './pages/HomePage';
import ProtectedRoute from './components/ProtectedRoute';
import DashboardPage from './pages/DashboardPage'; // Importa la página del dashboard si la tienes

// Creamos un componente para la página de inicio para mantenerlo ordenado

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes> {/* 2. Routes define el área donde cambiarán las páginas */}
          <Route path="/" element={<HomePage />} /> {/* 3. Ruta para la página de inicio */}
          <Route path="/login" element={<LoginPage />} /> {/* 4. Ruta para la página de login */}
          {/* Puedes agregar más rutas aquí según sea necesario */}
          <Route 
            path="/dashboard" element={<ProtectedRoute><DashboardPage /></ProtectedRoute>}
          /> {/* 6. Ruta protegida para el dashboard */}
        </Routes>
      </main>
    </div>
  );
}

export default App;