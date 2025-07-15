// src/pages/DashboardPage.jsx

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // <-- 1. IMPORTAMOS useNavigate
import { Box, Button } from '@mui/material';     // <-- Importamos los componentes de MUI necesarios
import './DashboardPage.css';
import RegisterAdvisorForm from '../components/RegisterAdvisorform';

// --- El componente para cada tarjeta de prospecto (sin cambios) ---
function ProspectoCard({ prospecto, onUpdate }) {
    const [status, setStatus] = useState(prospecto.status);
    const [notes, setNotes] = useState(prospecto.notes);

    const handleSave = () => {
        onUpdate(prospecto._id, { status, notes });
    };

    return (
        <div className="prospecto-card">
            <h3>{prospecto.name}</h3>
            <p><strong>Email:</strong> {prospecto.email}</p>
            <p><strong>Teléfono:</strong> {prospecto.phone || 'No proporcionado'}</p>
            <div className="prospecto-actions">
                <select value={status} onChange={(e) => setStatus(e.target.value)}>
                    <option value="Nuevo">Nuevo</option>
                    <option value="Contactado">Contactado</option>
                    <option value="Interesado">Interesado</option>
                    <option value="No Interesado">No Interesado</option>
                </select>
                <textarea 
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Añadir notas..."
                />
                <button onClick={handleSave}>Guardar</button>
            </div>
            <p className="date">Registrado: {new Date(prospecto.createdAt).toLocaleDateString()}</p>
        </div>
    );
}


// --- El componente principal de la página ---
function DashboardPage() {
    // --- ZONA DE LÓGICA (EL CEREBRO) ---
    const navigate = useNavigate(); // <-- 2. OBTENEMOS LA FUNCIÓN DE NAVEGACIÓN
    const [prospectos, setProspectos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const user = JSON.parse(localStorage.getItem('user'));

    // --- NUEVA FUNCIÓN PARA CERRAR SESIÓN ---
    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        navigate('/login');
    };

    const fetchProspectos = async () => { /* ...tu función fetchProspectos se queda igual... */ };
    useEffect(() => { fetchProspectos(); }, []);
    const handleUpdateProspecto = async (id, updatedData) => { /* ...tu función handleUpdateProspecto se queda igual... */ };

    if (loading) return <p>Cargando prospectos...</p>;
    if (error) return <p className="error-message">{error}</p>;


    // --- ZONA VISUAL (EL CUERPO) ---
    return (
        <div className="dashboard-container">
            {/* --- 3. AQUÍ AÑADIMOS LA BARRA SUPERIOR CON EL TÍTULO Y EL BOTÓN --- */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                <h2>Panel de Asesores - Prospectos</h2>
                <Button variant="outlined" color="error" onClick={handleLogout}>
                    Cerrar Sesión
                </Button>
            </Box>
            
            {user && user.role === 'admin' && <RegisterAdvisorForm />}
            
            <div className="prospectos-list">
                {prospectos.length > 0 ? (
                    // El .map() que ya tenías está en el lugar perfecto.
                    prospectos.map(prospecto => (
                        <ProspectoCard 
                            key={prospecto._id} 
                            prospecto={prospecto} 
                            onUpdate={handleUpdateProspecto}
                        />
                    ))
                ) : (
                    <p>No hay prospectos para mostrar.</p>
                )}
            </div>
        </div>
    );
}

export default DashboardPage;