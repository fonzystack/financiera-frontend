// src/pages/DashboardPage.jsx

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button } from '@mui/material';
import './DashboardPage.css';
// CORRECCIÓN: El nombre del componente/archivo usualmente empieza con mayúscula.
import RegisterAdvisorForm from '../components/RegisterAdvisorForm'; 

// --- Componente para cada tarjeta de prospecto ---
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


// --- Componente principal de la página ---
function DashboardPage() {
    const navigate = useNavigate();
    const [prospectos, setProspectos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const user = JSON.parse(localStorage.getItem('user'));

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        navigate('/login');
    };

    // LÓGICA COMPLETA PARA OBTENER DATOS
    const fetchProspectos = async () => {
        try {
            setLoading(true);
            const token = localStorage.getItem('token');
            if (!token) throw new Error('No se encontró token de autenticación.');

            const response = await fetch('http://localhost:4000/api/prospectos', {
                headers: { 'Authorization': `Bearer ${token}` }
            });

            if (!response.ok) throw new Error('No estás autorizado para ver esta información.');

            const data = await response.json();
            setProspectos(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    // useEffect llama a la función para cargar los datos al inicio
    useEffect(() => {
        fetchProspectos();
    }, []);

    // LÓGICA COMPLETA PARA ACTUALIZAR DATOS
    const handleUpdateProspecto = async (id, updatedData) => {
        try {
            const token = localStorage.getItem('token');
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/prospectos/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(updatedData)
            });
            if (!response.ok) throw new Error("No se pudo guardar los cambios.");
            
            // Recargamos los datos para ver los cambios reflejados
            fetchProspectos(); 
        } catch (error) {
            console.error("Error al actualizar:", error);
            alert("No se pudo guardar los cambios.");
        }
    };

    if (loading) return <p>Cargando prospectos...</p>;
    if (error) return <p className="error-message">{error}</p>;


    return (
        <div className="dashboard-container">
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                <h2>Panel de Asesores - Prospectos</h2>
                <Button variant="outlined" color="error" onClick={handleLogout}>
                    Cerrar Sesión
                </Button>
            </Box>
            
            {user && user.role === 'admin' && <RegisterAdvisorForm />}
            
            <div className="prospectos-list">
                {prospectos.length > 0 ? (
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